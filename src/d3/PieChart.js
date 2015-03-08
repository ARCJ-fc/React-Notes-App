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

	var data = [{name: "unanswered", value: props.data.length-1}, {name: "answered", value: props.answered.length+1}];


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
					"d": PieChart.arc,
		    		"fill": function(d, i) {
		    			return "hsl(" + Math.floor(Math.random()*255) + ", 50%, 50%)";
		    		},
				});

		arcs.selectAll("path")
			.transition()
			.duration(1000)
			.attr({
	    		"fill": function(d, i) {
	    			return "hsl(" + Math.floor(Math.random()*255) + ", 50%, 50%)";
	    		}
			})
			.attrTween("d", function(d) {
				var z = d3.interpolate(d.startAngle, d.endAngle); 
				return function(t) {
					d.endAngle = z(t); 
					return PieChart.arc(d);
				}
			})	
			
		// Labels
		arcs.enter()
			.append("text")
			    .attr({
			    	"transform": function(d) {
			    		return "translate(" + PieChart.arc.centroid(d) + ")";
			    	},
			    	"text-anchor": "middle"
			    	})
		    .text(function(d) {
		    	return d.data.name;
		    });

		arcs.selectAll("text")
			.attr({
			    	"transform": function(d) {
			    		return "translate(" + PieChart.arc.centroid(d) + ")";
			    	},
			    	"text-anchor": "middle"
			    	})
		    .text(function(d) {
		    	return d.data.name;
		    });
};

module.exports = PieChart;