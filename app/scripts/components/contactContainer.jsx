var React = require('react');

var ContactContainer = React.createClass({
  render: function(){
    return (
      <div id="contact" className = "fs-container">
        <div className="col-md-6">
          <h1 className="text-center white">Contact</h1>
          <h4 className="text-center white">
            <a href="mailto:">luisreneonate@gmail.com</a>
          </h4>
        </div>
        <div className="col-md-6 contact-picture"></div>
      </div>
    );
  }
});

module.exports = {
  ContactContainer: ContactContainer
};
