// 3rd Party Imports
var React = require('react');

// Local Components
var NavBar = require('./presentation/navBar.jsx');

var ProjectDetailContainer = React.createClass({
  render: function(){
    var description = this.props.project.description.map(function(text, i){
      return (
        <p className="project-description-p" key={i}>{text}</p>
      );
    });

    var tech = this.props.project.tech.map(function(tech, i){
      return (
        <li className="col-xs-12 col-md-3 col-lg-1 text-center" key={i}>
          <img className="tech-logo" src={"./images/tech/" + tech + ".png"} alt={tech + " Logo"} />
        </li>
      );
    });

    return(
      <div className="container-fluid project-detail-container" id="home">
        <NavBar />
        <div className="project-container row">
          <div className={"col-xs-12 white project-detail-image " + this.props.project.thumbnail}></div>
          <div className="col-md-12 white">
            <div className="row project-title-container">
              <h1 className="white project-title text-center">{this.props.project.name}</h1>
            </div>
            <div className="row project-description-container">
              <div className="col-xs-12">
                { description }
              </div>
            </div>
            <div className="row project-tech-container">
              <div className="col-xs-12 text-center">
                <h2 className="text-center tech-header">Technology Used</h2>
                <ul className="list-inline">
                  {tech}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = {
  ProjectDetailContainer: ProjectDetailContainer
};
