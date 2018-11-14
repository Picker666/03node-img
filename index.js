var http = require('http');
var url = require('url');
var router = require('./models/router');
// var optFile = require('./models/optFile');

http.createServer( function (request, response) {
    if (request.url !== '/favicon.ico') {
        pathname = url.parse(request.url).pathname;
        pathname = pathname.replace(/\//, '');
        router[pathname](response);
    };
}).listen(8888);

console.log('Server running at http://localhost:8888');
