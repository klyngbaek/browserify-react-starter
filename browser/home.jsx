var React = require('react');
var Router = require('react-router');
var NavBar = require('./navbar.jsx');
var Link = Router.Link;

module.exports = React.createClass({
    render: function() {
        return (
            <NavBar />
        );
    }
});
