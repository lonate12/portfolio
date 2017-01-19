var React = require('react');

var Header = require('./presentation/header.jsx');
var Footer = require('./presentation/footer.jsx');

var AboutContainer = React.createClass({
  render: function(){
    return (
      <div className = "container">
        <h1>About</h1>
        <Header />
        <Footer />
      </div>
    );
  }
});

module.exports = {
  AboutContainer: AboutContainer
};
