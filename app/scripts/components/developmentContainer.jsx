var React = require('react');

var Header = require('./presentation/header.jsx');
var Footer = require('./presentation/footer.jsx');

var DevelopmentContainer = React.createClass({
  render: function(){
    return (
      <div id="projects" className="fs-container row">
        <h1 className="text-center white">Projects I've worked on</h1>
        <div className="project-container col-md-12 green">
          <div className="row max-height">
            <div className="project-description col-md-6">
              <h3>The Standings</h3>
              <p>I made The Standings as an app to help manage soccer tournaments.</p>
            </div>
            <div className="project-image-container col-md-6">
              <div className="project-image"></div>
              <a href="#" className="btn btn-success col-md-6">Link to live app</a>
              <a href="#" className="btn btn-success col-md-6">Link to source code</a>
            </div>
          </div>
        </div>
        <div className="project-container col-md-12 red">
          <div className="row max-height">
            <div className="project-description col-md-6">Test 3</div>
            <div className="project-image-container col-md-6">Test 4</div>
          </div>
        </div>
        <div className="project-container col-md-12 blue">
          <div className="row max-height">
            <div className="project-description col-md-6">Test 5</div>
            <div className="project-image-container col-md-6">Test 6</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = {
  DevelopmentContainer: DevelopmentContainer
};
