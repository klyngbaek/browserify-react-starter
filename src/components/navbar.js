/** @jsx React.DOM */
var React = require('react');

var navigate = require('../../js/navigate.js');

var NavItem = React.createClass({
    render: function() {
        return (
            <div className="navitem">
                <img src={this.props.imgsrc} />
                <div className="label">{this.props.label}</div>
            </div>
        );
    }
});


var NavBar = React.createClass({
    render: function() {
        return (
            <div className="navbar">
                <NavItem label="Dashboard" imgsrc="/static/sample_icon.png" onClick={navigate('/dashboard')} />
                <NavItem label="Volumes" imgsrc="/static/sample_icon.png" onClick={navigate('/dashboard')} />
                <NavItem label="Exports" imgsrc="/static/sample_icon.png" onClick={navigate('/dashboard')} />
                <NavItem label="Initiators" imgsrc="/static/sample_icon.png" onClick={navigate('/dashboard')} />
                <NavItem label="Hardware" imgsrc="/static/sample_icon.png" onClick={navigate('/dashboard')} />
            </div>
        );
    },
    componentDidMount: function () {
        console.log('NavBar Mounting!');
    },
    componentWillUnmount: function () {
        console.log('NavBar unmounting');
    }
});

module.exports = NavBar;
