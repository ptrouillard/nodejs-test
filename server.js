var http = require('http');

function start() {
    function onRequest(request, response) {
        console.log('Received call from ' + request.toString());
        response.writeHead(200, { 'Content-Type' : 'text/plain' });
        response.end('Hello world');
    }
    http.createServer(onRequest).listen(8090);
    console.log("Server has started on port 8090");
}

exports.start = start;

