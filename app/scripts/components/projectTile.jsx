var React = require('react');

var ProjectTile = React.createClass({
  render: function(){
    var description = this.props.project.description.map(function(paragraph, i){
      return (
        <p className="text-center description" key={i}>{paragraph}</p>
      );
    });

    return (
      <div className={this.props.last ? "col-xs-12 tile-container" : "col-xs-12 col-md-6 col-lg-3 tile-container"}>
        <div className="tile">
          <div className={"image thumbnail " + this.props.project.thumbnail}>
            <div className="overlay">
              <div className="col-xs-12">
                <h2 className="text-center">{this.props.project.name}</h2>
              </div>
              <div className="col-xs-12 links-container">
                <div className="col-xs-6">
                  <a href={this.props.project.sourceLink} className="text-center col-xs-12 btn btn-success">View Source Code</a>
                </div>
                <div className="col-xs-6">
                  <a href={this.props.project.liveLink} className="text-center col-xs-12 btn btn-success">View Live Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ProjectTile;
