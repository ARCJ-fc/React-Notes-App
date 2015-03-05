var React = require("react");

var PostItForm = React.createClass({
	eHandler: function(e) {
		e.preventDefault();
		this.refs.textfield.getDOMNode().textContent = "";
		console.log(this.refs.textfield.getDOMNode().value);
	},
    render: function() {
        return (
            <form className="col-md-3" ref="commentform" onSubmit={this.eHandler}>
                <input type="text" className="postItText" ref="textfield" />
                <input type="submit" className="postItSubmit" ref="textsubmit" />
            </form>
        );
    }
})

module.exports = PostItForm