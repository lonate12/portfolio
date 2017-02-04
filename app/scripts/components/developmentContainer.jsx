var React = require('react');
var $ = require('jquery');
var descriptions = require('../projectDescriptions.js');

var DevelopmentContainer = React.createClass({
  // noScroll: function(e){
  //   // Function adapted from https://jsbin.com/howojuq/edit?html,js,output
  //   $(e.target).on( 'mousewheel DOMMouseScroll', function (e) {
  //
  //     var e0 = e.originalEvent;
  //     var delta = e0.wheelDelta || -e0.detail;
  //
  //     this.scrollTop += ( delta < 0 ? 1 : -1 );
  //     e.preventDefault();
  //   });
  // },
  render: function(){
    var techsStarWars = descriptions.starWars.tech.map(function(tech){
      return(
        <p key={tech} className="tech">{tech}</p>
      );
    });

    var techsGitHub = descriptions.gitHub.tech.map(function(tech){
      return(
        <p key={tech} className="tech">{tech}</p>
      );
    });

    var techsTheStandings = descriptions.theStandings.tech.map(function(tech){
      return(
        <p key={tech} className="tech">{tech}</p>
      );
    });

    return (
      <div id="projects" className="fs-container row">
        <div className="col-md-6 project-image-container">
          <h1 className="text-center projects-header">Previous</h1>
          <h1 className="text-center projects-header">Projects</h1>
        </div>
        <div className="col-md-6 project-description-container">
          <div className="col-md-12 project star-wars">
            <div className="col-md-4 project-thumbnail star-wars-wg-thumbnail"></div>
            <div className="col-md-8 project-description">
              <h2>{descriptions.starWars.name}</h2>
              <p>{descriptions.starWars.description1}</p>
              <p>{descriptions.starWars.description2}</p>
              <h3 className="technologies-used text-center">Technologies Used</h3>
              <div className="tech-div">
                {techsStarWars}
              </div>
              <a className="col-md-4 col-md-offset-1 btn btn-success" href="">Source Code</a>
              <a className="col-md-4 col-md-offset-2 btn btn-success" href="">Live Project</a>
            </div>
          </div>
          <div className="col-md-12 project github">
            <div className="col-md-4 project-thumbnail github-replica-thumbnail"></div>
            <div className="col-md-8 project-description">
              <h2>{descriptions.gitHub.name}</h2>
              <p>{descriptions.gitHub.description1}</p>
              <p>{descriptions.gitHub.description2}</p>
              <h3 className="technologies-used text-center">Technologies Used</h3>
              <div className="tech-div">
                {techsGitHub}
              </div>
              <a className="col-md-4 col-md-offset-1 btn btn-success" href="">Source Code</a>
              <a className="col-md-4 col-md-offset-2 btn btn-success" href="">Live Project</a>
            </div>
          </div>
          <div className="col-md-12 project the-standings">
            <div className="col-md-4 project-thumbnail the-standings-thumbnail"></div>
            <div className="col-md-8 project-description">
              <h2>{descriptions.theStandings.name}</h2>
              <p>{descriptions.theStandings.description1}</p>
              <p>{descriptions.theStandings.description2}</p>
              <p>{descriptions.theStandings.description3}</p>
              <h3 className="technologies-used text-center">Technologies Used</h3>
              <div className="tech-div">
                {techsTheStandings}
              </div>
              <a className="col-md-4 col-md-offset-1 btn btn-success" href="">Source Code</a>
              <a className="col-md-4 col-md-offset-2 btn btn-success" href="">Live Project</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = {
  DevelopmentContainer: DevelopmentContainer
};
