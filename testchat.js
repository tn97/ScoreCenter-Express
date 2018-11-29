var express = require("express");
var app = express();

var path = require("path");
// var htmlRoutes = require("../../routes/htmlRoutes");

// app.use(htmlRoutes);
users = [];
connections = [];

app.use(express.static("public"));

app.get('/fanchat', function(req,res) {
  res.sendFile(path.join(__dirname, './public/fanchat.html'));
});
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);
io.sockets.on('connection', function(socket){
  connections.push(socket);
  console.log('Connected: %s sockets connected', connections.length);

  // Disconnect
  socket.on('disconnect', function(data) {
    users.splice(users.indexOf(socket.username), 1);
    updateUsernames();
    connections.splice(connections.indexOf(socket), 1);
    console.log('Disconnected: %s sockets connected', connections.length);
  });

  // Send message
  socket.on('send message', function(data) {
    io.sockets.emit('new message', {msg: data, user: socket.username});
  });

  // New User
  socket.on('new user', function(data, callback) {
    callback(true);
    socket.username = data;
    users.push(socket.username);
    updateUsernames();
  });

  function updateUsernames() {
    io.sockets.emit('get users', users);
  }
});
server.listen(process.env.PORT || 3000);
console.log("server running");
