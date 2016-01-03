// my_server.js
var http = require('http');
http.createServer(function handler(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World\n <h1>Node.js!</h1>');
}).listen(5000, '127.0.0.1');
 
console.log('Server running at http://127.0.0.1:5000/');