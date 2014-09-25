/** @jsx React.DOM */

var React = require('react');

var TodoApp = require('../components/todo.js');
var HelloWorld = require('../components/helloworld.js');
var NavBar = require('../components/navbar.js');

var Component = React.createClass({
    render: function() {
        return (
            <div class="pagebanner">
                <img src="/images/section_icons/volume.png" class="section-image" />
                <div class="title">All volumes</div>

                <div class="right">
                    <form>
                        <button type="submit" class="button logout" formmethod="post" formaction="/log-out">Logout</button>
                    </form>

                    <div class="userinfo">
                        Logged in as admin
                    </div>
                </div>
            </div>
        );
    },
    componentDidMount: function () {
        console.log('TitleBar Mounting!');
    },
    componentWillUnmount: function () {
        console.log('TitleBar unmounting');
    }
});

module.exports = Component;