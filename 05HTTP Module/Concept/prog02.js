const http = require('node:http');
const PORT = 8000;

const sever = http.createServer((req, res) => {
    console.log(req.method);
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify({name:"Mridu"}));
    res.end(JSON.stringify({name:"Adima"}));
})

sever.listen(PORT,() => {
    console.log("Server is running...");
    
});
