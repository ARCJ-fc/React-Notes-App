var React = require('react');

var PostItLogin = React.createClass({
  render: function() {
    return (
      <form className="loginForm">
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <input type="submit" value="Post" />
      </form>
    );
  }
});


module.exports = PostItLogin;