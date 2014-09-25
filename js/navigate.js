var page = require('page');

var navigate = function (url) {
    return function () {
        console.log('navigate to ' + url );
        page(url);
    };
};

module.exports = navigate;