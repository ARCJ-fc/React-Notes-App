var React = require("react");

var CommentBox = React.createClass({
    onChange: function() {
        return {}  
    },
    render: function(){
        function clickHandler(e){
            e.preventDefault();
        }
        return(
            <form>
                <input type="text" className="commentBox" />
                <input type="submit" ref="commentButton" className={this.state.active} onChange={this.onChange} />
            </form>
        );
    }
});

module.exports = CommentBox;
