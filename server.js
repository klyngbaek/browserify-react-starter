// node modules
var http = require('http');
var fs = require('fs');

// npm modules
var ecstatic = require('ecstatic')(__dirname);

module.exports = WebServer;

function WebServer(opts) {
    if (!(this instanceof WebServer)) return new WebServer(opts);

    if (!opts) opts = {};
    this.port = opts.port;

    console.log('Starting HTTP server');
    var server = http.createServer(requestListener);
    console.log('Listening on port ' + this.port);
    server.listen(this.port);

    function requestListener(req, res) {
        console.log(req.url);
        console.log(req.url.indexOf('/static'));
        if (req.url.indexOf('/static') === 0) {
            ecstatic(req, res);
        } 
        else if (req.url === '/bundle.js') {
            res.setHeader("Content-Type", "application/javascript");
            fs.createReadStream(__dirname + '/static/bundle.js').pipe(res);
        } else if (req.url === '/style.css') {
            res.setHeader("Content-Type", "text/css");
            fs.createReadStream(__dirname + '/static/style.css').pipe(res);
        } else {
            fs.createReadStream(__dirname + '/static/index.html').pipe(res);
        }
    }
}
