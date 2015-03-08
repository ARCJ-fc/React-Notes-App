var React       = require("react");
var ButtonGroup = require("./ButtonGroup");

var WhiteBoardHeader = React.createClass({
    render: function(){
        return (
            <div className="header">
                <h1>{this.props.text}</h1>
                <ButtonGroup tabSwitcher={this.props.tabSwitcher} />
            </div>
        );
    }
});

module.exports = WhiteBoardHeader;
