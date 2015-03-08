var React       = require("react");

var ButtonGroup = React.createClass({
	clickHandler: function(e) {
		var tab = e.target.id;
		this.props.tabSwitcher(tab);
	},
    render: function(){
        return (
	        <div className="btn-toolbar" id="btnholder" role="toolbar" aria-label="...">
			  <button className="btn-group buttons clickables" id="home" ref="home" role="group" aria-label="..." onClick={this.clickHandler}></button>
			  <button className="btn-group buttons clickables" id="answered" ref="answered" role="group" aria-label="..." onClick={this.clickHandler}></button>
			  <button className="btn-group buttons clickables" id="home" ref="home" role="group" aria-label="..." onClick={this.clickHandler}></button>
			</div>
		);
    }
});

module.exports = ButtonGroup;