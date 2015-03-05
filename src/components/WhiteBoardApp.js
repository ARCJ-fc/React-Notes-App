var React = require("react");
var WhiteBoard = require("./WhiteBoard.js");

var WhiteBoardApp = React.createClass({
    getInitialState: function() {
      return {data: [{text: "hello"}, {text: "goodbye"}, {text: "cya"}, {text: "joy"}, {text: "lolz"}]};  
    },
    render: function(){
        return (
            <div className="whiteBoardApp">
                <WhiteBoard data={this.state.data} />
            </div>
        );
    }
});

module.exports = WhiteBoardApp;