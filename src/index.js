const Avon = require("./structures/avonClient.js");
const client = new Avon();
module.exports = client;
const http = require("http");
http.createServer((_, res) => res.end("Made By CodeX Development")).listen(8080)   