var React       = require("react");

var WhiteBoardHeader = React.createClass({
    render: function(){
        return (
            <div className="header">
                <h1>{this.props.text}</h1>
            </div>
        );
    }
});

module.exports = WhiteBoardHeader;
