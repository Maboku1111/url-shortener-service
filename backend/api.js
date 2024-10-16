const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World')
        res.end();
    }
    if (req.url === '/api/urls') {
        res.writeHead(200, {
            'Content-Type': 'application/json',
        })
        .end(url);
    }
});

server.listen(3000);
console.log('Listening on port 3000');