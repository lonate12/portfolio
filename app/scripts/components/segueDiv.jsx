var React = require('react');

var SegueDiv = React.createClass({
  render: function(){
    return(
      <div id="segue" className="fs-container row">
        <div className="segue-div col-md-6 col-md-offset-3">
          <h1 className="text-center">I know you came to find out a little about me&hellip;</h1>
          <h2 className="text-center">But first let me show you some of what I can do!</h2>
          <div className="segue-image"></div>
        </div>
      </div>
    );
  }
});

module.exports = {
  SegueDiv: SegueDiv
};
