var React       = require("react");
var PieChart 	= require("../d3/PieChart.js")

var WhiteBoardGraph = React.createClass({
  componentDidMount: function() {
    var el = this.getDOMNode();
    PieChart.create(el, {
      width: '300px',
      height: '300px'
    });
  },

  getChartState: function() {
    return {
      data: this.props.data,
    };
  },

  componentWillUnmount: function() {
    var el = this.getDOMNode();
    PieChart.destroy(el);
  },

    render: function(){
        return (
            <div className="svgHolder">
            </div>
        );
    }
});

module.exports = WhiteBoardGraph;