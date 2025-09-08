// Import built-in http module
const http = require("http");

// Create the server
const server = http.createServer((req, res) => {
  // Log each request
  console.log(`Request: ${req.method} ${req.url}`);

  // Set response headers
  res.setHeader("Content-Type", "text/plain");

  // Handle routes
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200); // status code OK
    res.end("Welcome to Home Page");
  } 
  else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200);
    res.end("This is About Page");
  } 
  else if (req.url === "/data" && req.method === "POST") {
    // Collect body data
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString(); // convert buffer to string
    });
    req.on("end", () => {
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Data received", body }));
    });
  }
  else {
    res.writeHead(404);
    res.end("404 Not Found");
  }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
