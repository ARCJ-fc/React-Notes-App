var React				= require("react");
var PostItForm          = require("./PostItForm.js");
var WhiteBoardGraph 	= require("./WhiteBoardGraph.js");


var WhiteBoardUtils = React.createClass({
	render: function() {
				// <WhiteBoardGraph data={this.props.data} answered={this.props.answered} />
    	return (
    		<div className="col-md-4">
				<PostItForm commentAdd={this.props.commentAdd} />
			</div>
		)
	}
})

module.exports = WhiteBoardUtils;
 