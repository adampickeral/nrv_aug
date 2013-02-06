var express = require('express');

var server = express();

server.set('title', 'New River Valley Agile Users Group');

server.use(express.static(__dirname + '/public'));
server.set('views', __dirname + '/views');

server.get('/', function (req, res) {
  res.render('index.ejs');
});

server.listen(3000);
console.log('Listening on port 3000');
