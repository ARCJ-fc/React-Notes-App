var React       = require("react");
var PieChart 	= require("../d3/PieChart.js");

var WhiteBoardGraph = React.createClass({
  getDefaultProps: function() {
    return {
      width: 420,
      height: 340,
      colours: ["#4eca7d", "hsl(400, 80%, 50%)"]
    }
  },
  componentDidMount: function() {
    var el = this.getDOMNode();
    PieChart.create(el, this.props);
  },
  shouldComponentUpdate: function(nextProps) {
    if (nextProps.data.length === this.props.data.length && nextProps.answered.length === this.props.answered.length) {return false};
    var el = this.getDOMNode();
    PieChart.update(el, nextProps);
    return false;
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