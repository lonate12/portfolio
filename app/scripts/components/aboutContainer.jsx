var React = require('react');

var AboutContainer = React.createClass({
  render: function(){
    return (
      <div id="about" className="fs-container row">
        <div className="col-xs-12 col-md-6 headshot-div">
          <img className="headshot" src="images/headshot.jpg"></img>
          <div className="tech-skills col-xs-12 col-md-10 col-md-offset-1">
            <h3 className="text-center tech-toolbox-header white">Technical Toolbox</h3>
            <div className=" tech-list col-md-6">
              <div className="tech-tool">HTML5</div>
              <div className="tech-tool">CSS3</div>
              <div className="tech-tool">JavaScript</div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h1 className="white">There was once a guy who didn't feel he was living up to his potential...</h1>
          <p className="white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    );
  }
});

module.exports = {
  AboutContainer: AboutContainer
};
