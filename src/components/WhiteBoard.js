var React = require('react');

var WhiteBoard = React.createClass({
	render: function() {

		var boardList = this.props.data.map(function(option) {
				return <ul key={option.name}>{option.name} the {option.value}</ul>
		})

		return (
		      <ol className="boardList col-md-6 col-md-offset-3">
		        {boardList}
		      </ol>
		)
	}
});

module.exports = WhiteBoard;