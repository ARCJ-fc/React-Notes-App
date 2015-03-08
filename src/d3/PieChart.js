var d3 = require("d3");

var PieChart = {};

PieChart.create = function(el, props) {
  var svg = d3.select(el).append('svg')
      .attr({	
      		'class': 'd3',
        	'width': 300,
        	'height': 300
        });

    var outerRadius = w / 2;
	var innerRadius = w / 3;
	var arc = d3.svg.arc()
			.innerRadius(innerRadius)
			.outerRadius(outerRadius);

	var pie = d3.layout.pie();

  this.update(el, props);
};

PieChart.update = function(el, props) {
	this._drawPie(el, props)
};

PieChart._drawPie = function(el, props) {
  	
	var arcs = svg.selectAll("g.arc")
				  .data(pie(data, function(d) {return d.text}))
				  .enter()
				  .append("g")
				  .attr("class", "arc")
				  .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");
			
			//Draw arc paths
			arcs.append("path")
			    .attr("fill", function(d, i) {
			    	return color(i);
			    })
			    .attr("d", arc);
			
			//Labels
			arcs.append("text")
			    .attr("transform", function(d) {
			    	return "translate(" + arc.centroid(d) + ")";
			    })
			    .attr("text-anchor", "middle")
			    .text(function(d) {
			    	return d.value;
			    });
};