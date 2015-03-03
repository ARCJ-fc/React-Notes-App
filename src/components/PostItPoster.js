var React = require('react');

var PostItPoster = React.createClass({
  render: function() {
    return (
      <form className="commentForm">
        <input type="text" placeholder="name..." />
        <input type="text" placeholder="opinion" />
        <input type="submit" value="Post" />
      </form>
    );
  }
});


module.exports = PostItPoster;