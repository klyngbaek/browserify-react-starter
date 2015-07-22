var React = require('react');
var Router          = require('react-router');

module.exports = React.createClass({
    render: function() {

        var divStyle = {
            borderColor: 'black',
            borderWidth: '1px',
            borderStyle: 'solid',
            backgroundColor: '#EEEEEE',
            margin: '10px'
        };

        return (
            <div style={divStyle}>
                <div>Item A</div>
                <p>Notice nothing else reloaded when clicking the link from the home page or page b</p>
            </div>
        );
    }
});
