var React = require('react');
var Router = require('react-router');
var RouteHandler    = Router.RouteHandler;

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                This is app!
                <RouteHandler />
            </div>
        );
    }
});
