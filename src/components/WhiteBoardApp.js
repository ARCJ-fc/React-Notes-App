var React               = require("react");
var WhiteBoard          = require("./WhiteBoard.js");
var WhiteBoardHeader    = require("./WhiteBoardHeader.js");
var WhiteBoardUtils    = require("./WhiteBoardUtils.js");

var WhiteBoardApp = React.createClass({
    getInitialState: function() {
        return {
            data: [{editMode: false, text: "hello", votes: 1}, {editMode: false, text: "goodbye", votes: 0}, {editMode: false, text: "cya", votes: 2}, {editMode: false, text: "joy", votes: 4}, {editMode: false, text: "lolz", votes: 19}].sort(this.voteSort),
            answered: [{editMode: false, text: "muah", votes: 7}],
            tab: "home"
        };  
    },

    tabSwitcher: function(x) {
        this.setState({tab: x})
    },

    answeredComment: function(x) {
        var answered = this.state.answered;
        var newData = [];
        this.state.data.forEach(function(ele) {
            if (x.text !== ele.text) {
                return newData.push(ele);
            } 
            answered.push(x);
        });
        this.setState({data: newData, answered: answered});

    },

    restoreComment: function(x) {
        var data = this.state.data;
        var newAnswered = [];
        this.state.answered.forEach(function(ele) {
            if (x.text !== ele.text) {
                return newAnswered.push(ele);
            } 
            data.push(x);
        });
        this.setState({data: data, answered: newAnswered});
    },

    commentAdd: function(x){
        if (x.getDOMNode().value === "") {return false};
        var newComment  = {editMode: false, text: x.getDOMNode().value, votes: 0}
        var newData     = this.state.data.concat([newComment]);
        this.setState({data: newData});
    },

    editToggle: function(x) {
        var newData = this.state.data.map(function(ele) {
            if (x.text === ele.text) {
                ele.editMode = !ele.editMode;
            }
            return ele;
        });
        this.setState({data: newData});
    },

    confirmChanges: function(x) {
        var newData = this.state.data.map(function(ele) {
            if (x.text === ele.text) {
                ele.text = x.newText;
                ele.editMode = !ele.editMode;
            }
            return ele;
        });
        this.setState({data: newData});
    },

    deleteComment: function(x) {
        var newData = [];
        this.state.data.forEach(function(ele) {
            if (x.text !== ele.text) {
                return newData.push(ele);
            } else {return false}
        });
        this.setState({data: newData});
    },

    voteSort: function(a, b) {
            if (a.votes < b.votes) {
                return 1;
            } else if (a.votes > b.votes) {
                return -1;
            } else {return 0};
    },

    upVote: function(x){
        var newData = this.state.data.map(function(ele) {
            if (x.text === ele.text) {
                ele.votes += 1;
            }
            return ele;
        }).sort(this.voteSort);
        this.setState({data: newData});
    },

    render: function(){
        return (
            <div className="whiteBoardApp">
                <WhiteBoardHeader text={"the-whiteboard"} tabSwitcher={this.tabSwitcher} />
                <WhiteBoardUtils data={this.state.data}  answered={this.state.answered} commentAdd={this.commentAdd} />
                <WhiteBoard tab={this.state.tab} data={this.state.data} answered={this.state.answered} upVote={this.upVote} editToggle={this.editToggle} answeredComment={this.answeredComment} confirmChanges={this.confirmChanges} deleteComment={this.deleteComment} restoreComment={this.restoreComment}/>
            </div>
        );
    }
});

module.exports = WhiteBoardApp;