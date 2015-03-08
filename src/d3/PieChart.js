var d3 = require("d3");

var PieChart = {};

PieChart.create = function(el, props) {

  	PieChart.svg = d3.select(el)
		  			.append("svg")
			      		.attr({	
				      		"class": "d3",
				        	"width": props.width,
				        	"height": props.height
			        })
			      	.append("g")
			      		.attr({
			      			"transform": "translate(" + props.width/2 + "," + props.height/2 + ")"
			      		});

  this.update(el, props);
};

PieChart.update = function(el, props) {
	this._drawPie(el, props)
};

PieChart._drawPie = function(el, props) {

	var data = [{name: "unanswered", value: props.data.length}, {name: "answered", value: props.answered.length}];
	var rate = Math.floor((data[1].value / (data[0].value+data[1].value))*100);
	console.log(rate);

	PieChart.outerRadius = props.height / 2;
	PieChart.innerRadius = props.height / 4;

	PieChart.arc = d3.svg.arc()
					.innerRadius(PieChart.innerRadius)
					.outerRadius(PieChart.outerRadius);

	PieChart.pie = d3.layout.pie()
					.value(function(d) {
						return d.value;
					})
					.sort(null);


	var arcs = PieChart.svg.selectAll("g.arc")
					  		.data(PieChart.pie(data));

	  	arcs.enter()
	  		.append("g")
	  			.attr({"class": "arc"})
			.append("path")
				.attr({
					"d": function(d) {
						return PieChart.arc(d)
					},
		    		"fill": function(d, i) {
		    			return props.colours[i];
		    		},
				});

		arcs.selectAll("path")
			.transition()
			.duration(500)
			.attrTween("d", function(d) {
				var z = d3.interpolate(d.startAngle, d.endAngle); 
				return function(t) {
					d.endAngle = z(t); 
					console.log(d.endAngle);
					return PieChart.arc(d);
				}
			})	

		arcs.exit().remove();

	var text =	PieChart.svg.selectAll("text")
							.data([rate])
						
		text.enter()
			.append("text")
				.attr({
	      			// "transform": "translate(" + props.width/2 + "," + props.height/2 + ")",
	      			"text-anchor": "middle"
				});

		text.text(function(d) {
				return d + "%"
			});

		text.exit().remove();

};

module.exports = PieChart;