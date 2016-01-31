// set process title to something recognizable
process.title = 'node-starter';

var WebServer = require('./server.js');

var optimist = require('optimist')
    .describe('h', 'Display help')
    .describe('p', 'web server port')
    .alias('h', 'help')
    .alias('p', 'port')
    .default({
        p: '8500'
    });
var argv = optimist.argv;
if (argv.help) {
    optimist.showHelp();
    process.exit(0);
}

var WebServer = require('./server.js');

WebServer({
    port: argv.port,
});
