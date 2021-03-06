var url = require("url")
var http = require('http');

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname
        console.log('Request for ' + pathname + ' received.')

        route(pathname)

        response.writeHead(200, { 'Content-Type' : 'text/plain' })
        response.write('Hello world')
        response.end()
    }
    http.createServer(onRequest).listen(8090);
    console.log("Server has started on port 8090")
}

exports.start = start;

