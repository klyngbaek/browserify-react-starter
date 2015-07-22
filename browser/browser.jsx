var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var App = require('./app.jsx');
var Home = require('./home.jsx');
var A = require('./item-a.jsx');
var B = require('./item-b.jsx');
var PageNotFound = require('./pagenotfound.jsx');

var routes = (
    <Route path="/" handler={App}>
    	<Route handler={Home}>
            <Route path="/a" handler={A} />
            <Route path="/b" handler={B} />
        </Route>
        <DefaultRoute handler={Home} />
        <NotFoundRoute handler={PageNotFound} />
    </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.body);
});
