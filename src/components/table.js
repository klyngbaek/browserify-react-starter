/** @jsx React.DOM */

var React = require('react');

var TableRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>
                    {this.props.col1}
                </td>
                <td>
                    {this.props.col2}
                </td>
                <td>
                    {this.props.col3}
                </td>
            </tr>
        );
    }
});

var Table = React.createClass({
    getInitialState: function() {
        return {rows: []};
    },
    onChange: function(e) {
        this.setState({text: e.target.value});
    },
    render: function() {
        var list = [];
        list.push(TableRow({col1:'what', col2: 'this is cool', col3: 'for real'}));
        list.push(TableRow({col1:'wh22', col2: 'this is co22', col3: 'for re22'}));
        return (
            <table>
                <tbody>
                    {list}
                </tbody>
            </table>
        );
    },
    componentDidMount: function () {
        console.log('Table Mounting!');
    },
    componentWillUnmount: function () {
        console.log('Table unmounting');
    }
});

module.exports = Table;
