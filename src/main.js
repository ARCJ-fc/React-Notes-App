var React 			= require("react"),
	WhiteBoard 		= require("./components/WhiteBoard.js"),
	PostItPoster	= require("./components/PostItPoster.js");



var WhiteBoardApp = React.createClass({
	getInitialState: function() {
		return {data : [{name: "france", value: "pug"}, {name: "britain", value: "terrier"}]}
	},
	render: function() {
		return (
			<div>
				<WhiteBoard data={this.state.data} />
				<PostItPoster /> 
			</div>
			)
	}
});

React.render(
	<WhiteBoardApp/>,
	document.getElementById("content")
);