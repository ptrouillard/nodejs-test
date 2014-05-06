var http = require('http');
server = http.createServer(
 function(request,response) {
 response.writeHead(200, {
  'Content-Type' : 'text/plain'
 });
 response.end('Hello world'); 
});
server.listen(8090);
