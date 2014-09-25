var React = require('react');

var Router = require('./bld/router.js');

var PageNotFound = require('./bld/pages/pagenotfound.js');
var Dashboard = require('./bld/pages/dashboard.js');
var Page1 = require('./bld/pages/page1.js');
var Page2 = require('./bld/pages/page2.js');
var Page3 = require('./bld/pages/page3.js');

var routes = [
  ['/', Dashboard],
  ['/page1', Page1],
  ['/page2', Page2],
  ['/page3', Page3],
  ['*', PageNotFound ]
];

React.renderComponent(Router({routes:routes}), document.body);