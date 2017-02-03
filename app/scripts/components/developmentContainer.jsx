var React = require('react');

// var Header = require('./presentation/header.jsx');
// var Footer = require('./presentation/footer.jsx');

var DevelopmentContainer = React.createClass({
  render: function(){
    return (
      <div id="projects" className="fs-container row">
        <div className="col-md-6 project-image-container">
          <h1 className="text-center white">Previous Projects</h1>
        </div>
        <div className="col-md-6 project-description-container"></div>
      </div>
    );
  }
});

module.exports = {
  DevelopmentContainer: DevelopmentContainer
};
