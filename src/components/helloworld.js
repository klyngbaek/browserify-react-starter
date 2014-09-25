/** @jsx React.DOM */
var React = require('react');

HelloWorld = React.createClass({
    render: function() {
        return (
            <div>Hello world!</div>
        );
    },
    componentDidMount: function () {
        console.log('HelloWorld Mounting!');
    },
    componentWillUnmount: function () {
        console.log('HelloWorld unmounting');
    }
});

module.exports = HelloWorld;