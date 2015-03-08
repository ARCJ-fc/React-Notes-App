var React = require("react");

var PostItPoster = React.createClass({
    onChange: function() {
        return {}  
    },
    render: function(){
        function clickHandler(e){
            e.preventDefault();
        }
        return(
            <form>
                <textarea type="text" className="PostItPoster" />
                <input type="submit" ref="commentButton" className={this.state.active} onChange={this.onChange} />
            </form>
        );
    }
});

module.exports = PostItPoster;