var React = require("react");
var CommentBox = require("./CommentBox.js");
var CommentEdit = require("./CommentEdit.js");

var WhiteBoard = React.createClass({
   render: function(){
       var commentFactory = this.props.data.map(function(comment, index){
        console.log(this);
          if (comment.editMode) {
            return <CommentEdit key={index+comment.text} data={comment} confirmChanges={this.props.confirmChanges} deleteComment={this.props.deleteComment} answeredComment={this.props.answeredComment} />
          } else {
            return <CommentBox key={comment.text+index} data={comment} upVote={this.props.upVote} editToggle={this.props.editToggle} />
          }
        }.bind(this));

       return (
        <div className="commentFactory col-md-8">
           {commentFactory}
        </div>
        );
   } 
});

module.exports = WhiteBoard;