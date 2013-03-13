var express = require('express');
var request = require('request');
var qs = require('querystring');
var config = require('./config');

var server = express();

server.set('title', 'New River Valley Agile Users Group');

server.use(express.static(__dirname + '/public'));
server.set('views', __dirname + '/views');

server.get('/', function (req, res) {
  res.render('index.ejs');
});

server.post('/mailingList', function (req, res) {
  var name, email, options, data, body;

  data = '';
  req.on('data', function(chunk) {
    data += chunk;
  });

  req.on('end', function() {
    body = qs.parse(data);
    options = {
      url: config.membersList,
      auth: {
        user: 'api',
        pass: config.key
      },
      form: {
        subscribed: true,
        address: body.email,
        name: body.name
      }
    };

    request.post(options, function (error, response, body) {
      res.status(response.statusCode).send(body);
    });
  });
});

server.listen(3000);
console.log('Listening on port 3000');
