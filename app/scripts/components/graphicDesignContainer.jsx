var React = require('react');

var Header = require('./presentation/header.jsx');

var GraphicDesignContainer = React.createClass({
  render: function(){
    return (
      <div className = "container">
        <h1>Graphic Test</h1>
        <Header />
      </div>
    );
  }
});

module.exports = {
  GraphicDesignContainer: GraphicDesignContainer
};
