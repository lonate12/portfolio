var React = require('react');

var Header = require('./presentation/header.jsx');

var ContactContainer = React.createClass({
  render: function(){
    return (
      <div className = "container">
        <h1>Contact</h1>
        <Header />
      </div>
    );
  }
});

module.exports = {
  ContactContainer: ContactContainer
};
