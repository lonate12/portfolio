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
          <h1 className="white">There was once a guy who wasn't happy with what he was doing&hellip;</h1>
          <p className="white">
            The beginning&hellip; One day in my college English class I downloaded
            SeaMonkey to create a portfolio site. After using Google to help
            learn this application, I learned that I could customize my site by
            simply putting a combination of symbols and letters together. It was
            amazing to see something appear on my screen when I put together the
            right combination of keystrokes! My eyes got wide with wonder&hellip; I felt
            proud of what I had designed and created making me want to show it off.
            After this experience I did not pursue development for 11 years.
          </p>
          <p className="white">
            Through those years, I maintained the itch to learn more about development,
            but unfortunately it did not pay the bills putting it low on the priority
            list. I have had several jobs in the financial sector including banking,
            financial advisor, and insurance sales. While I was very good at these jobs
            and my managers and co-workers praised my work, I was never really
            happy with what I was doing. All the while I had been dabbling in
            online workshops for coding, and finally I decided to do something about
            my inner desire and professional happiness.
          </p>
          <p className="white">
            In September 2016, I decided to take the plunge and enrolled in the
            Iron Yard’s immersive coding academy. In a span of 3 months I went
            from minimal coding experience to building complex applications using
            multiple languages and frameworks. My passion for coding erupted and I
            not only learned multiple languages but I was taught the process of
            learning more coding languages. I know how to check documentation, how
            to debug software, and how to ask better questions that will help me
            solve programming problems. These skills, along with the soft skills
            I’ve picked up throughout my professional career make me a diamond in
            the rough that’s waiting to be polished.  I am currently looking for a
            company that needs a rounded programmer with both soft and hard skills
            that they can grow and develop in order to help the company grow in the
            greatest possible way.
          </p>
        </div>
      </div>
    );
  }
});

module.exports = {
  AboutContainer: AboutContainer
};
