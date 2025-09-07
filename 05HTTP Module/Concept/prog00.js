const http = require('http');
const server =  http.createServer((req, res) => {
    // console.log(`Incomming Request: ${Date.now()}`);
    // console.log(req.headers['accept-language']);
    res.writeHead(200);
    res.end(`${req.headers['accept-language']}`);
})

server.listen(8000, () => {
    console.log('Server is running.... :)');
});
