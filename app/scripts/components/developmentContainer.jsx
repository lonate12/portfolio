var React = require('react');
var $ = require('jquery');

var DevelopmentContainer = React.createClass({
  noScroll: function(e){
    // Function adapted from https://jsbin.com/howojuq/edit?html,js,output
    $(e.target).on( 'mousewheel DOMMouseScroll', function (e) {

      var e0 = e.originalEvent;
      var delta = e0.wheelDelta || -e0.detail;

      this.scrollTop += ( delta < 0 ? 1 : -1 );
      e.preventDefault();
    });
  },
  render: function(){
    return (
      <div id="projects" className="fs-container row">
        <div className="col-md-6 project-image-container">
          <h1 className="text-center white">Previous Projects</h1>
        </div>
        <div className="col-md-6 project-description-container">
          <div className="col-md-12 project">
            <div className="col-md-4 project-thumbnail star-wars-wg-thumbnail"></div>
            <div className="col-md-8 project-description" onScroll={this.noScroll}>
              <h2 className="">Star Wars Word Game</h2>
              <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a className="col-md-4 col-md-offset-1 btn btn-success" href="">Source Code</a>
              <a className="col-md-4 col-md-offset-1 btn btn-success" href="">Live Project</a>
            </div>
          </div>
          <div className="col-md-12 project">
            <div className="col-md-4 project-thumbnail github-replica-thumbnail"></div>
            <div className="col-md-8 project-description" onScroll={this.noScroll}>
              <h2 className="">Github Replica</h2>
              <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a className="col-md-4 col-md-offset-1 btn btn-success" href="">Source Code</a>
              <a className="col-md-4 col-md-offset-1 btn btn-success" href="">Live Project</a>
            </div>
          </div>
          <div className="col-md-12 project">
            <div className="col-md-4 project-thumbnail the-standings-thumbnail"></div>
            <div className="col-md-8 project-description" onScroll={this.noScroll}>
              <h2 className="">The Standings</h2>
              <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a className="col-md-4 col-md-offset-1 btn btn-success" href="">Source Code</a>
              <a className="col-md-4 col-md-offset-1 btn btn-success" href="">Live Project</a>
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
