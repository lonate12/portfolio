var React = require('react');
var CubeLink = require('./presentation/cubeLink.jsx');

var ContactContainer3 = React.createClass({
  render: function(){
    return (
      <div id="contact" className="row">
          <h1 className="contact-header white text-center">Contact</h1>
          <div className="col-md-4">
            <a className="contact-link" href="mailto:luisreneonate@gmail.com">
              <div className="contact-icon text-center">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
              </div>
            </a>
            <h2 className="text-center white">luisreneonate@gmail.com</h2>
          </div>
          <div className="col-md-4">
            <a className="contact-link" href="https://www.linkedin.com/in/luisreneonate" target="_blank">
              <div className="contact-icon text-center">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </div>
            </a>
            <h2 className="text-center white">LinkedIn</h2>
          </div>
          <div className="col-md-4">
            <a className="contact-link" href="https://github.com/lonate12" target="_blank">
              <div className="contact-icon text-center">
                <i className="fa fa-github" aria-hidden="true"></i>
              </div>
            </a>
            <h2 className="text-center white">GitHub</h2>
          </div>
      </div>
    );
  }
});

module.exports = {
  ContactContainer3: ContactContainer3
};
