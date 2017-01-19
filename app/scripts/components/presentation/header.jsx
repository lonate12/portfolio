var React = require('react');

var NavBar = require('./navBar.jsx');

var Header = React.createClass({
  render: function(){
    return(
      <header className = "row">
        <NavBar />
      </header>
    );
  }
});

module.exports = Header;
