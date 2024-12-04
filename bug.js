const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);

//The issue is that the server will not stop gracefully if you use ctrl+c to terminate it. 
//This can lead to resource leaks and other problems.

//The solution is to use the server.close() method. This method will gracefully close the server, 
//allowing all existing connections to complete before terminating the server. 