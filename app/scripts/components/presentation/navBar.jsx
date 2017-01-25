var React = require('react');

var NavBar = React.createClass({
  render: function(){
    return(
      <div className={this.props.isFooter? "footer-nav" : "row top-bar"}>
        <img src="./images/lro-logo-white.svg" className={this.props.isFooter? "hide" : "logo-small"}></img>
        <ul className="top-bar-nav">
          <li className="normal-link"><a href="#">Home</a></li>
          <li className="normal-link"><a href="#about">About</a></li>
          <li className="normal-link"><a href="#projects">Projects</a></li>
          <li className="normal-link"><a href="#contact">Contact</a></li>
          <li className="social-link">
            <a target="_blank" href="https://www.linkedin.com/in/luisreneonate">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </li>
          <li className="social-link">
            <a target="_blank" href="https://github.com/lonate12">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = NavBar;
