var React = require('react');

var ContactContainer3 = React.createClass({
  render: function(){
    return (
      <div id="contact" className = "fs-container">
        <div className="row contact-picture-3">
          <h1 className="white text-center">Contact</h1>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h2 className="text-center white">Email</h2>
            <h3 className="text-center">
              <a href="mailto:luisreneonate@gmail.com">luisreneonate@gmail.com</a>
            </h3>
          </div>
          <div className="col-md-4">
            <h2 className="text-center white">LinkedIn</h2>
            <h3 className="text-center">
              <a href="https://linkedin.com/en/luisreneonate">
                Click Here
              </a>
            </h3>
          </div>
          <div className="col-md-4">
            <h2 className="text-center white">GitHub</h2>
            <h3 className="text-center">
              <a href="https://github.io/lonate12">
                Click there
              </a>
            </h3>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = {
  ContactContainer3: ContactContainer3
};
