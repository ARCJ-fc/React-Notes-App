var React = require("react");

var PostItForm = React.createClass({
	eHandler: function(e) {
		e.preventDefault();
        this.props.commentAdd(this.refs.postitform);
        this.refs.postitform.getDOMNode().value = "";
	},
    render: function() {
        return (
            <form className="postItForm" ref="formwrapper" onSubmit={this.eHandler}>
                <input type="text" className="postItText" ref="postitform" />
                <input type="submit" className="postItSubmit" />
            </form>
        );
    }
});

module.exports = PostItForm