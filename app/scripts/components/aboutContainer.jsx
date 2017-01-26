var React = require('react');

var AboutContainer = React.createClass({
  render: function(){
    return (
      <div id="about" className="fs-container red row">
        <img className="headshot" src="images/headshot.jpg"></img>
      </div>
    );
  }
});

module.exports = {
  AboutContainer: AboutContainer
};
