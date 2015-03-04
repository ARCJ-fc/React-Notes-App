var React = require('react');

var PostItPoster = React.createClass({
	getInitialState: function() {
		return null
	},
	onChange: function() {
		e.preventDefault();
	},
	render: function() {
		return (
		<form className="commentForm">
			<input type="text" placeholder="name..." />
			<input type="text" placeholder="opinion" />
			<input type="submit" value="Post" onChange = {this.onChange}/>
		</form>
		);
	}
});


module.exports = PostItPoster;