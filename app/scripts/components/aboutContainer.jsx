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
          <h1 className="white">There was once a guy who wasn't happy with what he was doing...</h1>
          <p className="white">
            One day I was in english class and we were told to download SeaMonkey and use it to
            create a portfolio site. After Googling for help with this I learned that I could customize
            my site by putting symbols and letters together. It was pretty
            amazing to see something happen when I put together the right combination of keystrokes!
            My eyes got wide with wonder...I felt really good about what I had created and I
            wanted to show it off. After that I didn’t code for 11 years.
          </p>
          <p className="white">
            All those years I maintained an itch to learn more about development and I would
            dabble, but it wouldn't pay the bills so it was low on my priority list. I had several jobs
            in the financial sector including banking, financial advisor, and insurance sales.
            While I was good at these jobs and my managers and co-workers praised my work, I was
            never really happy with what I was doing. All the while I had that itch about development,
            so I decided to do something about it.
          </p>
          <p className="white">
            In September 2016 I decided to do something about it and enrolled in the Iron Yard’s
            immersive coding academy. In a span of 3 months I went from minimal coding experience
            to building complex applications using different languages and frameworks. My passion
            for coding erupted and I not only learned those languages but I was taught how to
            learn more coding languages. I know how to check the documentation, how to debug
            my software, and how to ask the better questions that will help me solve programming
            problems. These skills, along with the soft skills I’ve picked up throughout my
            professional career make me diamond in the rough that’s waiting to be polished and I'm
            currently looking for a company that is willing to take a chance on me and help me
            grow and develop so I can help them.
          </p>
        </div>
      </div>
    );
  }
});

module.exports = {
  AboutContainer: AboutContainer
};
