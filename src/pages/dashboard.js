/** @jsx React.DOM */

var React = require('react');

var TodoApp = require('../components/todo.js');
var HelloWorld = require('../components/helloworld.js');
var NavBar = require('../components/navbar.js');

var Dashboard = React.createClass({
    render: function() {
        return (
            <div>
                Dashboard
                <NavBar />
            </div>
        );
    }
});

module.exports = Dashboard;