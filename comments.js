// Create web server
// Run: node comments.js
// Browser: http://localhost:3000/
// Browser: http://localhost:3000/comments

// Load dependencies
var http = require('http');
var fs = require('fs');

// Create server
http.createServer(function (request, response) {
    // Set content type
    response.writeHead(200, { 'Content-Type': 'text/html' });
    // Read file
    fs.readFile('index.html', function (error, data) {
        // Check for errors
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        }
        else {
            // Write content
            response.write(data);
        }
        // Send response
        response.end();
    });
}).listen(3000);

// Console message
console.log('Server running at http://localhost:3000/');