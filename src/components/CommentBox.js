var React       = require("react");

var CommentBox = React.createClass({
    render: function(){
        return (
            <div className="comment">
                <p>{this.props.data.text}</p><button type="button" className="button glyphicon glyphicon-menu-up"/>
            </div>
        );
    }
});

module.exports = CommentBox;