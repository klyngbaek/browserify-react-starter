var React = require('react');
var Router = require('react-router').Router;
var Link = require('react-router').Link;

module.exports = React.createClass({
    render: function() {

        var divStyle = {
            borderColor: 'black',
            borderWidth: '1px',
            borderStyle: 'solid',
            backgroundColor: '#FEFEFE',
            margin: '10px'
        };

        return (
            <div style={divStyle}>
                This is a navbar with links to places!<br /><br />
                <Link to="/a">Link to A</Link><br />
                <Link to="/b">Link to B</Link><br /><br />
                {this.props.children}
            </div>
        );
    }
});
