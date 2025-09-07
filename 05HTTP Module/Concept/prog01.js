const http = require('node:http');
const server = http.createServer((req, res) => {

    switch(req.url){
        case '/' || '/home':
            res.writeHead(200);
            return res.end('Home Page');
        case '/about':
            res.writeHead(350);
            return res.end("About Page");
        case '/contact':
            res.writeHead(299);
            return res.end('Contact Us');
        default:
            res.writeHead(400);
            return res.end("Page Not Found!");
    }
})

server.listen(5555, () =>{
    console.log("server is running... ");
})
