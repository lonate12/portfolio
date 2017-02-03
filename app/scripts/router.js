var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var HomeContainer = require('./components/homeContainer.jsx').HomeContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
  },
  index: function(){
    ReactDOM.render(
      React.createElement(HomeContainer),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = router;
