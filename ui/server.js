const express = require("express")
const cors = require("cors")

const server = express()

server.use(cors())
server.use("/data", express.static(__dirname + "/data/"))

server.listen(3003)