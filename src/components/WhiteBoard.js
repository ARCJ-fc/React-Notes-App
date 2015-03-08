var React           = require("react");
var CommentBox      = require("./CommentBox.js");
var CommentEdit     = require("./CommentEdit.js");
var AnsweredBox     = require("./AnsweredBox.js");
var AboutBox        = require("./AboutBox.js");

var WhiteBoard = React.createClass({
   render: function(){
       var commentFactory = this.props.data.map(function(comment, index){
          if (comment.editMode) {
            return <CommentEdit key={index+comment.text} data={comment} confirmChanges={this.props.confirmChanges} deleteComment={this.props.deleteComment} answeredComment={this.props.answeredComment} />
          } else {
            return <CommentBox key={comment.text+index} data={comment} upVote={this.props.upVote} editToggle={this.props.editToggle} />
          }
        }.bind(this));

       var answeredFactory = this.props.answered.map(function(comment, index){
            return <AnsweredBox key={comment.text+index} data={comment} restoreComment={this.props.restoreComment} />
        }.bind(this));

       var currentTab;

       switch (this.props.tab) {
          case "home":
            currentTab = commentFactory;
            break;
          case "answered":
            currentTab = answeredFactory;
            break;
          case "about":
            currentTab = <AboutBox />;
            break
          default:
            currentTab = commentFactory;
            break;
       }

       return (
        <div className="commentFactory col-md-8">
          {currentTab}
        </div>
        );
   } 
});

module.exports = WhiteBoard;