var React 			= require('react'),
	WBComments 		= require("./WBComments.js");

var WhiteBoard = React.createClass({
	render: function() {

		var boardList = this.props.data.map(function(option) {
				return <WBComments key={option.name} name={option.name} value={option.value}/>
		})

		return (
		      <ol className="boardList col-md-6 col-md-offset-3">
		        {boardList}
		      </ol>
		)
	}
});

module.exports = WhiteBoard;