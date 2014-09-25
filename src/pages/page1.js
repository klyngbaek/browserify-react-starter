/** @jsx React.DOM */

var React = require('react');

var Table = require('../components/table.js');
var HelloWorld = require('../components/helloworld.js');
var NavBar = require('../components/navbar.js');
var TitleBar = require('../components/titlebar.js');

var navigate = require('../../js/navigate.js');

var TablePage = React.createClass({
    render: function() {
        return (
            <div>
                Page1
                <NavBar />
                <TitleBar />
                <HelloWorld/>
                <Table/>

                <span onClick={navigate('/dashboard')}>
                    You this. Click to toggle.
                </span>

            </div>
        );
    },

    componentDidMount: function () {
        console.log('Table Mounting!');
    },
    componentWillUnmount: function () {
        console.log('Table unmounting');
    }
});

module.exports = TablePage;