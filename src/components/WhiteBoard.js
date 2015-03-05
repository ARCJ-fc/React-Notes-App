var React = require("react");
var CommentBox = require("./CommentBox.js")

var WhiteBoard = React.createClass({
   render: function(){
       var commentFactory = this.props.data.map(function(comment){
           return <CommentBox key={comment.text} data={comment} />
       });
       return (
        <div className="commentFactory col-md-9 col-md-offset-3">
           {commentFactory}
        </div>
        );
   } 
});

module.exports = WhiteBoard;