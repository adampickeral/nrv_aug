var express = require('express');
var request = require('request');
var qs = require('querystring');
var config = require('./config');

var server = express();

server.set('title', 'New River Valley Agile Users Group');

server.use(express.static(__dirname + '/public'));
server.set('views', __dirname + '/views');

// Main route to the app
server.get('/', function (req, res) {
  res.render('index.ejs', {locals: {segmentKey: config.segmentKey}});
});

// Confirm mailing list subscription and add user to the list
server.get('/confirmSubscription', function (req, res) {
  var options;

  options = {
    url: config.membersList,
    auth: {
      user: config.user,
      pass: config.key
    },
    form: {
      subscribed: true,
      address: req.query.email,
      name: req.query.name
    }
  };

  request.post(options, function (error, response, body) {
    res.status(response.statusCode).send('Subscription confirmed');
  });
});

// Request to be added to the mailing list; sends confirmation email
server.post('/mailingList', function (req, res) {
  var name, email, data, requestBody, message;

  data = '';
  req.on('data', function (chunk) {
    data += chunk;
  });

  req.on('end', function () {
    requestBody = qs.parse(data);
    message = 'This message is being sent to you because you requested to be added to the New River Valley Agile Users Group mailing list.\n\n' +
      'To confirm your subscription click the following link: ' + config.confirmSubscription + qs.stringify({name: requestBody.name, email: requestBody.email}) + ' \n\n' +
      'If you do not wish to be subscribed to the mailing list, simply delete this message.';
    options = {
      url: config.sendMessage,
      auth: {
        user: config.user,
        pass: config.key
      },
      form: {
        from: 'donotreply@agilenrv.org',
        to: requestBody.email,
        subject: 'Confirm Mailing List Subscription',
        text: message
      }
    };

    request.post(options, function (error, response, body) {
      res.status(response.statusCode).send(body);
    });
  });
});

server.listen(3000);
console.log('Listening on port 3000');
