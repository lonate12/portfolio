var React = require('react');

var NavBar = require('./presentation/navBar.jsx');
var Footer = require('./presentation/footer.jsx');

var HomeContainer = React.createClass({
  render: function(){
    return(
      <div className="container">
        <NavBar />
        <header className="banner row">
          <div className="main-img-container">
            <i className="chevron fa fa-chevron-down" aria-hidden="true"></i>
          </div>
        </header>

        <Footer />
      </div>
    );
  }
});

module.exports = {
  HomeContainer: HomeContainer
};
