var React       = require("react");

var AboutBox = React.createClass({
    
	clickHandler: function(e) {
	},

    render: function(){
        return (
            <div className="about">
                <div className="comment">
                    <button type="button" className="edit glyphicon glyphicon-edit"/>
                    <p className="commentText">This is where unanswered comments are displayed with their votes, along with an edit button on the left, and an upvote button on the right</p>
                    <button type="button" className="button glyphicon glyphicon-menu-up" ref="upvote"/>
                    <p className="voteNum"></p>
                </div>
                <div className="comment editor">
                    <button type="button" className="confirm glyphicon glyphicon-ok" />
                    <button type="button" className="delete glyphicon glyphicon-remove" />
                    <textarea type="text" placeholder="If you click on the edit button, you'll see this. Hit 'X' to DELETE your comment, hit the tick to SAVE YOUR CHANGES, or hit thumbs up to mark as answered" className="editBox" ref="editBox" disabled="true"/>
                    <button type="button" className="button activeButton glyphicon glyphicon-thumbs-up" />
                </div>
                <div className="comment">
                    <button type="button" className="edit glyphicon glyphicon-thumbs-up" />
                    <p className="commentText">Answered comments are displayed here, alongside the # of votes >>>>. Hit the REWIND button to undo answered status </p>
                    <button type="button" className="button undo glyphicon glyphicon-fast-backward" ref="undo" />
                    <p className="voteNum"></p>
                </div>
                <div className="comment">
                    <button type="button" className="edit glyphicon glyphicon-user" />
                    <p className="commentText">Thanks for trying it out!</p>
                    <button type="button" className="button undo glyphicon glyphicon-star" ref="undo" />
                    <p className="voteNum"></p>
                </div>
            </div>
        );
    }
});

module.exports = AboutBox;