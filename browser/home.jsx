var React = require('react');
var Router = require('react-router');
var NavBar = require('./navbar.jsx');
var Link = Router.Link;

module.exports = React.createClass({
    render: function() {

        var divStyle = {
            borderColor: 'black',
            borderWidth: '1px',
            borderStyle: 'solid',
            backgroundColor: '#lightGreen',
            margin: '10px'
        };

        var linkStyle = {
            color: 'blue',
            fontWeight: '600'
        };

        return (
            <div style={divStyle}>
                This is component to contain everything
                <Link to='/'><div style={linkStyle}>Take me Home!</div></Link>
                <NavBar />
            </div>
        );
    }
});
