var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var HomeContainer = require('./components/homeContainer.jsx').HomeContainer;
var AboutContainer = require('./components/aboutContainer.jsx').AboutContainer;
var DevelopmentContainer = require('./components/developmentContainer.jsx').DevelopmentContainer;
var GraphicDesignContainer = require('./components/graphicDesignContainer.jsx').GraphicDesignContainer;
var ContactContainer = require('./components/contactContainer.jsx').ContactContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'about/': 'about',
    'development/': 'development',
    'graphic-design/': 'graphicDesign',
    'contact/': 'contact'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(HomeContainer),
      document.getElementById('app')
    );
  },
  about: function(){
    ReactDOM.render(
      React.createElement(AboutContainer),
      document.getElementById('app')
    );
  },
  development: function(){
    ReactDOM.render(
      React.createElement(DevelopmentContainer),
      document.getElementById('app')
    );
  },
  graphicDesign: function(){
    ReactDOM.render(
      React.createElement(GraphicDesignContainer),
      document.getElementById('app')
    );
  },
  contact: function(){
    ReactDOM.render(
      React.createElement(ContactContainer),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = router;
