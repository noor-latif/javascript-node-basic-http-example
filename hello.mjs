// Load HTTP module
import { createServer } from "http";

const hostname = "127.0.0.1";
const port = 8000;

// Create HTTP server
const server = createServer((req, res) => {

   // Set the response HTTP header with HTTP status and Content type
   res.setHeader('Content-Type', 'text/html');

   // Send the response body "Hello World"
   res.end('Hello World\n');
});

// Prints a log once the server starts listening
server.listen(port, hostname, function() {
   console.log(`Server running at http://${hostname}:${port}/`);
})
