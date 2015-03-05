var React = require("react");

var PostItForm = React.createClass({
    render: function() {
        return (
            <form>
                <input type="text" className="postItText" />
                <input type="submit" className="postItSubmit" />
            </form>
        );
    }
})

module.exports = PostItForm