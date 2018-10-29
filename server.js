const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);

users = [];
connections = [];
server.listen(process.env.PORT || 3000);

console.log("server running......");

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.sockets.on("connection", function(socket) {
  connections.push(socket);
  console.log("connceted %s sockets conncted", connections.length);
  // Disconect
  connections.splice(connections.indexOf(socket), 1);
  console.log("disconnected %s socket connceted", connections.length);

  // Disconect
  connections.splice(connections.indexOf(socket), 1);
  console.log("Disconnected: %s sockets connected", connections.length);
});
