var React = require('react');

var AboutContainer = React.createClass({
  render: function(){
    return (
      <div id="about" className="fs-container red row">
        <div className="col-md-6 headshot-div">
          <img className="headshot" src="images/headshot.jpg"></img>
          <div className="tech-skills col-md-10 col-md-offset-1">
            <h3 className="text-center white">Technologies I know...</h3>
            <div className=" tech-list col-md-6">
              <h4 className="text-center white">Languages</h4>
              <ul>
                <li className="text-center white">HTML 5</li>
                <li className="text-center white">CSS 3</li>
                <li className="text-center white">JavaScript</li>
              </ul>
            </div>
            <div className="tech-list col-md-6">
              <h4 className="text-center white">Libraries</h4>
              <ul>
                <li className="text-center white">jQuery</li>
                <li className="text-center white">Backbone.js</li>
                <li className="text-center white">React.js</li>
                <li className="text-center white">Bootstrap</li>
                <li className="text-center white">SCSS</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h3 className="white">A little about me</h3>
          <p className="white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    );
  }
});

module.exports = {
  AboutContainer: AboutContainer
};
