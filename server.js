const http = require('http');
const server = http.createServer((req, resp) => {
    resp.writeHead(200, {'Content-Type': 'text/plain'});
    resp.end('server build successfully');
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
