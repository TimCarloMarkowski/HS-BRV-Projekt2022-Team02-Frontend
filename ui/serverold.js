/* const express = require("express")
const cors = require("cors")

const server = express()

server.use(cors())
server.use("/data", express.static(__dirname + "/data/"))

server.listen(3003)  */

const http = require("http");

const host = 'localhost';
const port = 3003;

var url = require('url');
var adr = 'http://localhost:1339/products';
var q = url.parse(adr, true);
var qdata = q.query; 
var url2 = require('url');
var adr2 = 'http://localhost:1339/sales';
var q2 = url2.parse(adr2, true);
var qdata2 = q2.query; 

const sales = "http://localhost:1339/sales";

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/sales":
            res.writeHead(200);
            res.end(qdata2);
            break
        case "/products":
            res.writeHead(200);
            res.end(qdata);
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error:"Resource not found"}));
    }
} 

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on 
http://$
{host}:${port}`);
}); 

