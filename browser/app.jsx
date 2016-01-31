var React = require('react');
var Router = require('react-router').Router

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                This is app!
                {this.props.children}
            </div>
        );
    }
});
