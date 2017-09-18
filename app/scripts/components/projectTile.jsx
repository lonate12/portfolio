var React = require('react');

var ProjectTile = React.createClass({
  render: function(){
    return (
      <div className={this.props.last ? "col-xs-12 tile-container" : "col-xs-12 col-md-6 col-lg-3 tile-container"}>
        <div className="tile">
          <div className={"image thumbnail " + this.props.project.thumbnail}>
            <div className="overlay">
              <div className="col-xs-12">
                <h2 className="text-center"><a className="learn-link" href={"#/" + this.props.projectId + "/"}>{this.props.project.name}</a></h2>
              </div>
              <div className="col-xs-12 links-container">
                <div className="col-xs-6">
                  <a href={this.props.project.sourceLink} className="text-center col-xs-12 btn btn-success">View Source Code</a>
                </div>
                <div className="col-xs-6">
                  <a href={this.props.project.liveLink} className="text-center col-xs-12 btn btn-success">View Live Project</a>
                </div>
              </div>
              <div className="col-xs-12 text-center"><a className="learn-link" href={"#/" + this.props.projectId + "/"}>Learn More&hellip;</a></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ProjectTile;
