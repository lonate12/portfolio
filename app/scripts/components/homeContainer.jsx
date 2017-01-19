var React = require('react');

var Header = require('./presentation/header.jsx');


var HomeContainer = React.createClass({
  render: function(){
    return(
      <div className="container">
        <h1>Home</h1>
        <Header />
      </div>
    );
  }
});

module.exports = {
  HomeContainer: HomeContainer
};
