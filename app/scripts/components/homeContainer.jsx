var React = require('react');
var $ = require('jquery');

var NavBar = require('./presentation/navBar.jsx');
var Footer = require('./presentation/footer.jsx');
var AboutContainer = require('./aboutContainer.jsx').AboutContainer;
var DevelopmentContainer = require('./developmentContainer.jsx').DevelopmentContainer;
var ContactContainer3 = require('./contactContainer3.jsx').ContactContainer3;
var CopyDevelopmentContainer = require('./copyDevelopmentContainer.jsx').CopyDevelopmentContainer;

var HomeContainer = React.createClass({
  disappear: function(){
    console.log($(window));
  },
  render: function(){
    return(
      <div className="container-fluid" id="home">
        <NavBar />
        <header className="banner row">
          <div className="main-img-container">
            <img src="./images/lro-logo-white.svg" className="logo-large"></img>
            <h2 className="tagline">Not your average front-end developer!</h2>
            <div className="catchphrase-div">
              <h4 className="text-center catchphrase">Scroll down to explore</h4>
              <i className="chevron fa fa-chevron-down" aria-hidden="true"></i>
            </div>
          </div>
        </header>
        <CopyDevelopmentContainer />
        <AboutContainer />
        <ContactContainer3 />
        <Footer />
      </div>
    );
  }
});

module.exports = {
  HomeContainer: HomeContainer
};
