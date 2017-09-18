var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var HomeContainer = require('./components/homeContainer.jsx').HomeContainer;
var ProjectDetailContainer = require('./components/projectDetail.jsx').ProjectDetailContainer;

var projectDescriptions = require('./projectDescriptions.js');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    ':projectId/': 'projectDetail'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(HomeContainer),
      document.getElementById('app')
    );
  },
  projectDetail: function(projectId){
    var project = projectDescriptions[projectId];

    ReactDOM.render(
      React.createElement(ProjectDetailContainer, { project: project }),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = router;
