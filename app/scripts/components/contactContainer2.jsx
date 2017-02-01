var React = require('react');

var ContactContainer2 = React.createClass({
  render: function(){
    return (
      <div id="contact" className = "fs-container">
        <div className="col-md-6 col-md-offset-3 contact-picture-2">
          <h1 className="white text-center">Contact</h1>
          <img className="contact-picture-2" src="images/contact-2.jpg"></img>
          <h2 className="white text-center">
            <a href="mailto:luisreneonate@gmail.com">luisreneonate@gmail.com</a>
          </h2>
        </div>
      </div>
    );
  }
});

module.exports = {
  ContactContainer2: ContactContainer2
};
