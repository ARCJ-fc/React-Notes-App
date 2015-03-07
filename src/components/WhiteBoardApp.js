var React      = require("react");
var WhiteBoard = require("./WhiteBoard.js");
var PostItForm = require("./PostItForm.js");

var WhiteBoardApp = React.createClass({
    getInitialState: function() {
        return {data: [{text: "hello", votes: '1'}, {text: "goodbye", votes: '0'}, {text: "cya", votes: '2'}, {text: "joy", votes: '4'}, {text: "lolz", votes: '19'}]};  
    },
    commentAdd: function(x){
        var newComment  = {text: x.getDOMNode().value, votes: '0'}
        var newData     = this.state.data.concat([newComment]);
        this.setState({data: newData});
    },
    upVote: function(x){
        // console.log(this.props);
        return false;
    },
    render: function(){
        return (
            <div className="whiteBoardApp">
                <PostItForm commentAdd={this.commentAdd} />
                <WhiteBoard data={this.state.data} upVote={this.upVote}/>
            </div>
        );
    }
});

module.exports = WhiteBoardApp;