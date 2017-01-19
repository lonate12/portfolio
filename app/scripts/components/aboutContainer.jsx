var React = require('react');

var Header = require('./presentation/header.jsx');

var AboutContainer = React.createClass({
  render: function(){
    return (
      <div className = "container">
        <h1>About</h1>
        <Header />
      </div>
    );
  }
});

module.exports = {
  AboutContainer: AboutContainer
};
