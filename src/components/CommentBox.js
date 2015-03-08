var React       = require("react");

var CommentBox = React.createClass({
	clickHandler: function(e) {
        var myProps = this.props.data;
		this.props.upVote(myProps);
	},
    editHandler: function() {
        var myProps = this.props.data
        this.props.editToggle(myProps);
    },
    render: function(){
        return (
            <div className="comment">
            	<button type="button" className="edit glyphicon glyphicon-edit" onClick={this.editHandler} />
                <p className="commentText">{this.props.data.text}</p>
                <button type="button" className="button glyphicon glyphicon-menu-up" ref="upvote" onClick={this.clickHandler} />
                <p className="voteNum">{this.props.data.votes}</p>
            </div>
        );
    }
});

module.exports = CommentBox;
