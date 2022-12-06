const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 3000;
const HOST = "127.0.0.1";



const server = http.createServer((req, res) => {

    if (req.url === "/") {
      fs.readFile("./public/index.html", "UTF-8", (err, html) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
      });
    }         
    else if (req.url.match("../public/raw.html")) {
      fs.readFile("./public/raw.html", "UTF-8", (err, html) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
      });
      
    }
    else if (req.url.match("./data.json")) {
      fs.readFile("./data.json", "UTF-8", (err, json) => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(json);
      });
    }
  });
  
  server.listen(PORT, HOST, () => {
    console.log("Im listening on port " + PORT);
  });
  
