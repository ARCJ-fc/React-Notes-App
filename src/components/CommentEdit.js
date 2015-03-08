var React       = require("react");

var CommentEdit = React.createClass({
    
	confirmHandler: function(e) {
        var myProps = this.props.data;
        myProps.newText = this.refs.editBox.getDOMNode().value || this.props.data.text;
		this.props.confirmChanges(myProps);
	},

    deleteHandler: function() {
        var myProps = this.props.data;
        this.props.deleteComment(myProps);
    },

    successHandler: function() {
        var myProps = this.props.data;
        this.props.answeredComment(myProps)
    },

    render: function(){
        return (
            <div className="comment">
                <button type="button" className="confirm glyphicon glyphicon-ok" onClick={this.confirmHandler} />
                <button type="button" className="delete glyphicon glyphicon-remove" onClick={this.deleteHandler}/>
                <input type="text" placeholder={this.props.data.text} className="editBox" ref="editBox"/>
                <button type="button" className="button activeButton glyphicon glyphicon-thumbs-up" onClick={this.successHandler} />
            </div>
        );
    }
});

module.exports = CommentEdit;
