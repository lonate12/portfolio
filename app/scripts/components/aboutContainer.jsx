var React = require('react');

var AboutContainer = React.createClass({
  render: function(){
    return (
      <div id="about" className="fs-container row">
        <div className="col-xs-12 col-md-6 headshot-div">
          <img className="headshot" src="images/headshot.jpg"></img>
          <div className="tech-skills col-xs-12 col-md-10 col-md-offset-1">
            <h3 className="text-center tech-toolbox-header white">Technical Toolbox</h3>
            <div className=" tech-list col-md-6">
              <div className="tech-tool">JavaScript</div>
              <div className="tech-tool">Python</div>
              <div className="tech-tool">Node.js</div>
              <div className="tech-tool">HTML5</div>
              <div className="tech-tool">CSS3</div>
              <div className="tech-tool">React.js</div>
              <div className="tech-tool">Backbone.js</div>
              <div className="tech-tool">jQuery.js</div>
              <div className="tech-tool">Handlebars.js</div>
              <div className="tech-tool">Underscore.js</div>
              <div className="tech-tool">Bootstrap</div>
              <div className="tech-tool">SASS</div>
              <div className="tech-tool">Git</div>
              <div className="tech-tool">GitHub</div>
              <div className="tech-tool">RESTful APIs</div>
              <div className="tech-tool">Parse</div>
              <div className="tech-tool">Mobile optimization</div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h1 className="white">I have always strived to constantly learn new skills
            and abilities to offer a well rounded person&hellip;
          </h1>
          <p className="about white">
            My previous jobs in the banking, financial and insurance sectors
            taught me the skills necessary to effectively communicate with different stakeholders,
            work productively in a team environment, and achieve organization goals.
          </p>
          <p className="about white">
            This experience coupled with my education helped teach me many of the soft skills that are
            essential to working as part of any organization. However, I was never passionate
            about any of these jobs the way I was passionate about other things in my life.
            This led me to exploring new career paths, and this is when I came across development.
          </p>
          <p className="about white">
            I decided to take a leap and leave a comfortable job situation to complete
            the coding academy at the Iron Yard. This immersive
            program taught me to rapidly problem solve, debug software and use
            multiple coding languages to get the results that were needed.
            I finally find a career path that I can be passionate about!
          </p>
        </div>
      </div>
    );
  }
});

module.exports = {
  AboutContainer: AboutContainer
};
