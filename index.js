//
// Start the server (module)
//
var server = require("./server");
var router = require("./router");
server.start(router.route)