var React = require('react');
var $ = require('jquery');
var descriptions = require('../projectDescriptions.js');

var DevelopmentContainer = React.createClass({
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
              <a className="col-xs-4 col-xs-offset-1 btn btn-success" href="https://github.com/lonate12/3.4-js-word-game" target="_blank">Source Code</a>
              <a className="col-xs-4 col-xs-offset-2 btn btn-success" href="https://lonate12.github.io/3.4-js-word-game/" target="_blank">Live Project</a>
              <i className="fa fa-arrow-down pull-right" aria-hidden="true"></i>
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
              <a className="col-xs-4 col-xs-offset-1 btn btn-success" href="https://github.com/lonate12/4.4-github-knockoff" target="_blank">Source Code</a>
              <a className="col-xs-4 col-xs-offset-2 btn btn-success" href="https://lonate12.github.io/4.4-github-knockoff/" target="_blank">Live Project</a>
              <i className="fa fa-arrow-down pull-right" aria-hidden="true"></i>
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
              <a className="col-xs-4 col-xs-offset-1 btn btn-success" href="https://github.com/lonate12/tournament-management-app" target="_blank">Source Code</a>
              <a className="col-xs-4 col-xs-offset-2 btn btn-success" href="https://lonate12.github.io/tournament-management-app/" target="_blank">Live Project</a>
              <i className="fa fa-arrow-down pull-right" aria-hidden="true"></i>
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
