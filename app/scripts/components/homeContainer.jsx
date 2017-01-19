var React = require('react');

var Header = require('./presentation/header.jsx');
var Footer = require('./presentation/footer.jsx');

var HomeContainer = React.createClass({
  render: function(){
    return(
      <div className="container">
        <h1>Home</h1>
        <Header />
        <Footer />
      </div>
    );
  }
});

module.exports = {
  HomeContainer: HomeContainer
};
