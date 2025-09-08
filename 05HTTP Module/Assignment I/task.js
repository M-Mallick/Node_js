const http = require('node:http');
const fs = require('node:fs');
function log(req) {
    fs.appendFileSync('log.txt',`[${Date.now()}] --> URL: "${req.url}" & Method: ${req.method}\n`,'utf-8');
}
const server = http.createServer((req, res) => {
    if(req.method == 'GET') {
        if(req.url == '/') {
            log(req);
            return res.writeHead(200).end(`Hello, HM: ${req.method}`);
        }
        else if(req.url == '/contact-us') {
            log(req);
            return res.writeHead(300).end("gmail@.com and (+91)123456789");
        }
        else if(req.url == '/tweet') {
            log(req);
            return res.writeHead(300).end("Send all the tweets from fake DB to the user.");
        }
    }
    else if(req.method == 'POST'){
        if(req.url == '/tweet'){
            log(req);
            return res.writeHead(300).end("Do a fake DB operation and send the ack that it is done.");
        }
    }
    else {
        log(req);
        return res.writeHead(404).end("ERROR");
    }

    // switch (req.url) {
    //     case '/':
    //         return res.writeHead(200).end(`Hello, HM: ${req.method}`);
    //     case '/contact-us':
    //         return res.writeHead(300).end("gmail@.com and (+91)123456789");
    // }
})

server.listen(7777, function() {console.log(`server is running at the port 7777`)})
