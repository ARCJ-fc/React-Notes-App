var React = require("react");

var PostItForm = React.createClass({
	eHandler: function(e) {
		e.preventDefault();
		this.refs.textfield.getDOMNode().textContent = "";
		console.log(this.refs.textfield.getDOMNode().value);
	},
    render: function() {
        return (
            <form className="postItForm col-md-4" onSubmit={this.eHandler}>
                <input type="text" className="postItText" ref="postitform" />
                <input type="submit" className="postItSubmit" />
            </form>
        );
    }
})

module.exports = PostItForm