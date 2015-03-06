var React       = require("react");

var CommentBox = React.createClass({
    render: function(){
        return (
            <div className="comment">
            	<button type="button" className="edit glyphicon glyphicon-edit" />
                <p>{this.props.data.text}</p>
                <button type="button" className="button glyphicon glyphicon-menu-up"/>
            </div>
        );
    }
});

module.exports = CommentBox;
