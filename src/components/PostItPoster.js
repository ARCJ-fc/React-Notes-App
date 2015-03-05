var React = require('react');

var PostItPoster = React.createClass({
	getInitialState: function() {
		return {text: ""};
	},
	onSubmit: function(e) {
		e.preventDefault();
		this.refs.commentForm.getDOMNode().textContent = "";
		this.setState({text: ""});
	},
	render: function() {
		return (
		<form className="commentForm" onSubmit={this.onSubmit}>
			<input type="text" placeholder="name..." value=""/>
			<input type="text" ref="commentForm" placeholder="opinion"/>
			<input type="submit" value="Post"/>
		</form>
		);
	}
});


module.exports = PostItPoster;