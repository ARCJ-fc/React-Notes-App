var React       = require("react");
var PieChart 	= require("../d3/PieChart.js");

var WhiteBoardGraph = React.createClass({
  getDefaultProps: function() {
    return {
      width: 400,
      height: 320,
      colours: ["#FD9827", "#DA3B21"]
    }
  },
  componentDidMount: function() {
    var el = this.getDOMNode();
    PieChart.create(el, this.props);
  },
  shouldComponentUpdate: function() {
    var el = this.getDOMNode();
    PieChart.update(el, this.props);
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