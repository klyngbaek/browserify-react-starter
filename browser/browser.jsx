var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;
var IndexRoute = require('react-router').IndexRoute;
var NotFoundRoute = require('react-router').NotFoundRoute;
var Redirect = require('react-router').Redirect;
var browserHistory = require('react-router').browserHistory;
var render = require('react-dom').render;

var App = require('./app.jsx');
var Home = require('./home.jsx');
var A = require('./item-a.jsx');
var B = require('./item-b.jsx');
var PageNotFound = require('./pagenotfound.jsx');

var routes = (
	<Router history={browserHistory}>
	    <Route path="/" component={App}>
	    	<IndexRoute component={Home} />
	    	<Route component={Home}>
	            <Route path="/a" component={A} />
	            <Route path="/b" component={B} />
	        </Route>
	        <Route path="*" component={PageNotFound} />
	    </Route>
	</Router>
);

render(routes, document.body);
