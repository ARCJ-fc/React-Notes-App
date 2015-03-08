var React       = require("react");

var AboutBox = React.createClass({
    
	clickHandler: function(e) {
	},

    render: function(){
        return (
            <div className="about">
            	<h1>About this project</h1>
                <p className="commentText">Founders And Coders</p>
            </div>
        );
    }
});

module.exports = AboutBox;