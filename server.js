// server.js
const http = require('http');

//create a server object
http.createServer((request, response) => {
  response.end('Hello from Node.js server!')
}).listen(3000)

