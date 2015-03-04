var React = require('react');

var WBComments = React.createClass({
	render: function() {
		return (
		      <ul className="comments">{this.props.name} the {this.props.value}</ul>
		)
	}
});

module.exports = WBComments;