var React = require('react');
var $ = require('jquery');
var descriptions = require('../projectDescriptions.js');
var ProjectTile = require('./projectTile.jsx');

var CopyDevelopmentContainer = React.createClass({
  render: function(){
    var projectTiles = descriptions.map(function(project, i){
      if (descriptions.length % 2 != 0 && (i+1) === descriptions.length){
        return <ProjectTile project={project} key={i} last={true} projectId={i}/>;
      } else {
        return (
          <ProjectTile project={project} key={i} last={false} projectId={i}/>
        );
      }
    });

    return (
      <div id="projects" className="row">
        <div className="col-md-12 project-image-container">
          <h1 className="text-center projects-header">Previous</h1>
          <h1 className="text-center projects-header">Projects</h1>
        </div>
        {projectTiles}
      </div>
    );
  }
});

module.exports = {
  CopyDevelopmentContainer: CopyDevelopmentContainer
};
