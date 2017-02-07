var starWars = {
  name: 'Star Wars Word Game',
  description1: "For one of my first JavaScript assignments I was instructed to "+
  "create a game where a random word was to be drawn from a word bank and the player "+
  "had to guess the word.",
  description2: "Naturally, this soon evolved into a Star Wars themed "+
  "word game complete with the Star Wars theme song, laser sounds, and guest apperances "+
  "from Darth Vader and the Emperor!",
  tech: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub"]
};

var gitHub = {
  name: "GitHub Replica",
  description1: "Developers far and wide are familiar with GitHub. This project showcases " +
  "my abilities to replicate another person's design (i.e. working with a designer's comp) and also" +
  "my ability to make API request and handle the response JSON data.",
  description2: "In this project I also used Handlebars.js to make stamps of repeating elements " +
  "and Git/GitHub for source control.",
  tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Handlebars.js", "GitHub API", "Git", "GitHub"]
};

var theStandings = {
  name: "The Standings",
  description1: "For my final project I called on my experiences while running the " +
  "Clemson Club Soccer team. We hosted one of the largest club soccer in the South East " +
  "every semester. We registered teams through snail mail, kept teams updated with the standings " +
  "displayed on a piece of poster board on a single field, and didn't really have a way " +
  "of calculating the points other than by hand.",
  description2: "Enter my inspiration for creating 'The Standings.' It's a web app that makes " +
  "use of what I learned at the Iron Yard. It allows a master admin to create a tournament and " +
  "manage the tournaments from a central dashboard. Additionally, visiting teams can register online " +
  "and keep track of their teams standings within their group as well as the tournament as a whole. " +
  "Guests of the teams can also keep track of their team's progress, scores, and game locations.",
  description3: "Overall, 'The Standings' is my first robust web application that will be tested " +
  "and used by the Clemson Club Soccer Team.",
  tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "React.js", "Backbone.js", "SASS", "Bootstrap", "Git", "GitHub"]
};

module.exports = {
  starWars: starWars,
  gitHub: gitHub,
  theStandings: theStandings
};
