var React = require('react');

var NavBar = require('./navBar.jsx');

var Footer = React.createClass({
  render: function(){
    return(
      <footer className="row footer">
        <NavBar isFooter={true}/>
      </footer>
    );
  }
});

module.exports = Footer;
