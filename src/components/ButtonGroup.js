var React       = require("react");

var ButtonGroup = React.createClass({
	clickHandler: function(e) {
		var tab = e.target.id;
		this.props.tabSwitcher(tab);
	},
    render: function(){
        return (
	        <div className="btn-toolbar" id="btnholder" role="toolbar" aria-label="...">
			  <button className="btn-group buttons clickables" id="home" ref="home" role="group" aria-label="..." onClick={this.clickHandler}>home</button>
			  <button className="btn-group buttons clickables" id="answered" ref="answered" role="group" aria-label="..." onClick={this.clickHandler}>answered</button>
			  <button className="btn-group buttons clickables" id="about" ref="home" role="group" aria-label="..." onClick={this.clickHandler}>about</button>
			</div>
		);
    }
});

module.exports = ButtonGroup;