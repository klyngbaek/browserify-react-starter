var React = require('react');
var Router = require('react-router').Router;
var Link = require('react-router').Link;

module.exports = React.createClass({
    render: function() {

        var linkStyle = {
            color: 'blue',
            fontWeight: '600'
        };

        return (
            <div>
                <div>Oh no! PageNotFound</div>
                <Link to='/'><div style={linkStyle}>Take me Home!</div></Link>
            </div>

        );
    }
});
