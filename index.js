const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const bodyParser = require("body-parser");

const PORT = 4000; // TODO: accept as ENV

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// configure static assets
app.use('/src', express.static('src'));

server.listen(PORT);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/buildkite', function (request, response) {
  console.log(request.body);
  io.emit('buildEvent', request.body);
  response.json(request.body);
});
