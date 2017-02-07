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
              <div className="tech-tool">HTML5</div>
              <div className="tech-tool">CSS3</div>
              <div className="tech-tool">JavaScript</div>
              <div className="tech-tool">React.js</div>
              <div className="tech-tool">Backbone.js</div>
              <div className="tech-tool">jQuery.js</div>
              <div className="tech-tool">Handlebars.js</div>
              <div className="tech-tool">Underscore.js</div>
              <div className="tech-tool">Bootstrap</div>
              <div className="tech-tool">SASS</div>
              <div className="tech-tool">Git</div>
              <div className="tech-tool">GitHub</div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h1 className="white">I have always strived to constantly learn new skills
            and pushed forward in my abilities to offer a well rounded person&hellip;
          </h1>
          <p className="about white">
            My previous jobs in the banking, financial and insurance sectors
            taught the skills necessary to provide proper customer service,
            give knowledgable advice and sell not only an product but also an idea.
          </p>
          <p className="about white">
            These jobs coupled with my education, which culminated with a Masters of Marketing
            from Clemson University, only bolstered the inherent abilities that I possess.
            However, this was mediocre to what I could truly do.
          </p>
          <p className="about white">
            I challenged myself further, building on my minimal coding experience,
            by completing the coding academy at the Iron Yard. This immersive
            program taught me to rapidly problem solve, debug software and use
            multiple coding languages to get the result that was needed.
            As I am looking for a job in the development field, I want a company
            that will challenge me as I challenge myself.
          </p>
        </div>
      </div>
    );
  }
});

module.exports = {
  AboutContainer: AboutContainer
};
