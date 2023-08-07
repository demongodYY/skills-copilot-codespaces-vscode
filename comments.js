// Create web server
Path: server.js
const http = require('http');
const server = http.createServer((request, response) => {
    response.end("Hello NodeJS!");
});
server.listen(3000,'');