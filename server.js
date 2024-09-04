// Import the built-in 'http' module
const http = require('http');

// Define the hostname and port for the server
const hostname = '127.0.0.1';
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with the status and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Send the response body "Hello, World!"
  res.end('Hello, World!\n');
});

// Make the server listen on the specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
