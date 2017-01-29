var React = require('react');

var Header = require('./presentation/header.jsx');
var Footer = require('./presentation/footer.jsx');

var DevelopmentContainer = React.createClass({
  render: function(){
    return (
      <div id="projects" className="fs-container row">
        <div className="project-container col-md-12 green">
          <div className="row max-height">
            <div className="project-description col-md-6">Test1</div>
            <div className="project-image col-md-6">Test 2</div>
          </div>
        </div>
        <div className="project-container col-md-12 red">
          <div className="row max-height">
            <div className="project-description col-md-6">Test 3</div>
            <div className="project-image col-md-6">Test 4</div>
          </div>
        </div>
        <div className="project-container col-md-12 blue">
          <div className="row max-height">
            <div className="project-description col-md-6">Test 5</div>
            <div className="project-image col-md-6">Test 6</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = {
  DevelopmentContainer: DevelopmentContainer
};
