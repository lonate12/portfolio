var React = require('react');

var NavBar = React.createClass({
  render: function(){
    return(
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#/about/">About</a></li>
        <li><a href="#/development/">Development</a></li>
        <li><a href="#/graphic-design/">Graphic Design</a></li>
        <li><a href="#/contact/">Contact</a></li>
      </ul>
    );
  }
});

module.exports = NavBar;
