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

	PieChart.outerRadius = props.height *0.2;
	PieChart.innerRadius = props.height *0.6;

	PieChart.arc = d3.svg.arc()
					.innerRadius(PieChart.innerRadius)
					.outerRadius(PieChart.outerRadius);

	PieChart.pie = d3.layout.pie()
					.value(function(d) {
						return d.value;
					})
					.sort(null);


	var arcs = PieChart.svg.selectAll("path")
					  		.data(PieChart.pie(data));

	  	arcs.enter()
	  		.append("path")
				.attr({
					"d": PieChart.arc,
		    		"fill": function(d, i) {
		    			return props.colours[i];
		    		},
				})
			.on("mouseover", function (d, i) {
		        d3.select(this)
		            .transition()
		            .duration(500)
		            .ease('bounce')
		            .attr('transform', function (d) {
		              var dist = 15;
		              d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
		              var x = Math.sin(d.midAngle) * dist;
		              var y = -Math.cos(d.midAngle) * dist;
		              return 'translate(' + x + ',' + y + ')';
            	});
		        arcs.filter(function(e) { return e.value !== d.value; }).style('opacity',0.5);
		    })
		    .on('mouseout', function (d, i) {
	            d3.select(this)
		            .transition()
		            .duration(500)
		            .ease('bounce')
		            .attr('transform', 'translate(0,0)');
	            arcs.filter(function(e) { return e.value !== d.value; }).style('opacity',1);
	        });


		arcs.attr("d", PieChart.arc)
			.transition()
			.duration(500)
			.attrTween("d", function(d) {
				var z = d3.interpolate(d.startAngle, d.endAngle); 
				return function(t) {
					d.endAngle = z(t); 
					return PieChart.arc(d);
				}
			})

		arcs.exit().remove();

	var text =	PieChart.svg.selectAll("text")
							.data([rate])
						
		text.enter()
			.append("text")
				.attr({
	      			"transform": "translate(5, 10)",
	      			"text-anchor": "middle"
				});

		text.text(function(d) {
				return d + "%"
			});

		text.exit().remove();

};

module.exports = PieChart;