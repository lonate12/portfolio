var data = [
  {
    name: 'Word Game',
    description: ["For one of my first JavaScript assignments I was instructed to "+
    "create a game where a random word was to be drawn from a word bank and the player "+
    "had to guess the word. Naturally, this soon evolved into a Star Wars themed "+
    "word game complete with the Star Wars theme song, laser sounds, and guest apperances "+
    "from Darth Vader and the Emperor!"],
    tech: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub", "API"],
    thumbnail: "star-wars-wg",
    liveLink: "https://lonate12.github.io/3.4-js-word-game/",
    sourceLink: "https://github.com/lonate12/3.4-js-word-game"
  },{
    name: "GitHub Replica",
    description: ["Developers far and wide are familiar with GitHub. This project showcases " +
    "my abilities to replicate another person's design (i.e. working with a designer's comp) and also " +
    "my ability to make API requests and handle the response JSON data.","In this project I also used Handlebars.js to make stamps of repeating elements " +
    "and Git/GitHub for source control."],
    tech: ["HTML5", "CSS3", "JavaScript", "JQuery", "Handlebars", "API", "Git", "GitHub"],
    thumbnail: "github-replica",
    liveLink: "https://lonate12.github.io/4.4-github-knockoff/",
    sourceLink: "https://github.com/lonate12/4.4-github-knockoff"
  },{
    name: "The Standings",
    description: ["For my final project I called on my experiences while running the " +
    "Clemson Club Soccer team. We hosted one of the largest club soccer in the South East " +
    "every semester. We registered teams through snail mail, kept teams updated with the standings " +
    "displayed on a piece of poster board on a single field, and didn't really have a way " +
    "of calculating the points other than by hand.","Enter my inspiration for creating 'The Standings.' It's a web app that makes " +
    "use of what I learned at the Iron Yard. It allows a master admin to create a tournament and " +
    "manage the tournaments from a central dashboard. Additionally, visiting teams can register online " +
    "and keep track of their teams standings within their group as well as the tournament as a whole. " +
    "Guests of the teams can also keep track of their team's progress, scores, and game locations.","Overall, 'The Standings' is my first robust web application that will be tested " +
    "and used by the Clemson Club Soccer Team."],
    tech: ["HTML5", "CSS3", "JavaScript", "JQuery", "React", "Backbone", "SASS", "Bootstrap", "Git", "GitHub", "API"],
    thumbnail: "the-standings",
    liveLink: "https://lonate12.github.io/tournament-management-app/",
    sourceLink: "https://github.com/lonate12/tournament-management-app"
  },{
    name: "Los Menu Editor",
    description: ["Los Amigos Mexican Restaurant in Seneca, SC needed a way to update " +
    "the menu items on their website. For this project I decided to build an API with Node " +
    "and Express. The API has routes that allows menu items to be created, deactivated, " +
    "reactivated, and edited. I then built a front-end using React.js which would consume " +
    "the API I built. Now Los Amigos is in the process of creating a new website that will make" +
    "a call to the API to obtain the menu items and display them appropriately. The app sits " +
    "behind a Nginx proxy server, which is set up to use a Let's Encrypt certificate " +
    "for SSL encryption."],
    tech: ["React", "Node", "Express", "Nginx", "LetsEncrypt", "CertBot", "API"],
    thumbnail: "los-editor",
    liveLink: "https://apparentlymysandboxsymphony.com/app/",
    sourceLink: "https://github.com/lonate12/los-menu-item-app"
  }
];

module.exports = data;
