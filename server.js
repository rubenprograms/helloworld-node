// Import http module:
var http = require('http');

// Port on which the server will be listening for request:
var port = 3000;

// Function that handles any request:
var requestHandler = function(request, response){
   console.log("New request to: " + request.url);
   response.end("Hello, World!");
}

var server = http.createServer(requestHandler);
// Add a port on which the server listens:
server.listen(port, function () {
   console.log(`Listening on port ${port}`);
})