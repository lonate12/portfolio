var React = require('react');

var NavBar = require('./presentation/navBar.jsx');
var Footer = require('./presentation/footer.jsx');
var AboutContainer = require('./aboutContainer.jsx').AboutContainer;
var DevelopmentContainer = require('./developmentContainer.jsx').DevelopmentContainer;

var HomeContainer = React.createClass({
  render: function(){
    return(
      <div className="container" id="home">
        <NavBar />
        <header className="banner row">
          <div className="main-img-container">
            <img src="./images/lro-logo-white.svg" className="logo-large"></img>
            <h2 className="tagline">Not your average front-end developer!</h2>
            <i className="chevron fa fa-chevron-down" aria-hidden="true"></i>
          </div>
        </header>
        <AboutContainer />
        <DevelopmentContainer />
        <div id="contact" className="fs-container green row"></div>
        <Footer />
      </div>
    );
  }
});

module.exports = {
  HomeContainer: HomeContainer
};