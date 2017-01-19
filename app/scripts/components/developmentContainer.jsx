var React = require('react');

var Header = require('./presentation/header.jsx');
var Footer = require('./presentation/footer.jsx');

var DevelopmentContainer = React.createClass({
  render: function(){
    return (
      <div className = "container">
        <h1>Development</h1>
        <Header />
        <Footer />
      </div>
    );
  }
});

module.exports = {
  DevelopmentContainer: DevelopmentContainer
};
