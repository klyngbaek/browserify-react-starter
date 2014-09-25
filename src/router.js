/** @jsx React.DOM */
window.React = require('react');
var React = require('react');
var page = require('page');

/* Component */

var Router = React.createClass({
    render: function () {
        return this.state.component;
    },
    getInitialState: function () {
        return { component: <div />};
    },
    componentDidMount: function () {
        var self = this;
        this.props.routes.forEach(function (route) {

            var url = route[0];
            var Component = route[1];

            page(url, function (ctx) {
                self.setState({ 
                    component: Component({params:ctx.params, querystring:ctx.querystring})
                });
            });

        });
        page.start();
    }
});

module.exports = Router;