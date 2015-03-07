var React       = require("react");

var CommentBox = React.createClass({
	clickHandler: function(e) {
        console.log(this.props)
		this.props.upVote()
	},
    render: function(){
        return (
            <div className="comment">
            	<button type="button" className="edit glyphicon glyphicon-edit" />
                <p>{this.props.data.text}</p>
                <button type="button" className="button glyphicon glyphicon-menu-up" ref="upvote" onClick={this.clickHandler} />
                <p className="voteNum">{this.props.data.votes}</p>
            </div>
        );
    }
});

module.exports = CommentBox;
