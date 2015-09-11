var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

module.exports = React.createClass({
    render: function() {
        return (
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link className="navbar-brand" to='/'>Knownow</Link>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/">Dashboard</Link></li>
                  <li><Link to="/a">Settings</Link></li>
                  <li><Link to="/b">Profile</Link></li>
                  <li><a href="#">Help</a></li>
                </ul>
                <div id="search-form"/>
              </div>
            </div>
            <RouteHandler />
          </nav>
        );
    }
});
