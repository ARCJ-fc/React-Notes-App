var React       = require("react");

var AnsweredBox = React.createClass({
    
	clickHandler: function(e) {
        var myProps = this.props.data;
        console.log(myProps);
		this.props.restoreComment(myProps);
	},

    render: function(){
        return (
            <div className="comment">
            	<button type="button" className="edit glyphicon glyphicon-thumbs-up" />
                <p className="commentText">{this.props.data.text}</p>
                <button type="button" className="button undo glyphicon glyphicon-fast-backward" ref="undo" onClick={this.clickHandler} />
                <p className="voteNum">{this.props.data.votes}</p>
            </div>
        );
    }
});

module.exports = AnsweredBox;