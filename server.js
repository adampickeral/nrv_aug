var express = require('express');
var request = require('request');
var qs = require('querystring');
var config = require('./config');
var mongoose = require('mongoose');

var server = express();

server.set('title', 'New River Valley Agile Users Group');

server.use(express.static(__dirname + '/public'));
server.set('views', __dirname + '/views');
var MemoryStore = express.session.MemoryStore;
// server.use(express.bodyParser());
server.use(express.cookieParser());
server.use(express.session({ 
  key: 'nrvaug',
  secret: 'NRv@ug$3cr3ts!#',
  store: new MemoryStore({ reapInterval: 60000 * 10 }) 
}));

// Main route to the app
server.get('/', function (req, res) {
  req.session.cq = Math.floor((Math.random()*3)+1);
  res.render('index.ejs', {locals: {segmentKey: config.segmentKey, challenge: req.session.cq}});
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

// rsvp to meeting; sends confirmation email and email to organizers list
server.post('/rsvp', function (req, res) {
  var name, email, reply;

  data = '';
  req.on('data', function (chunk) {
    data += chunk;
  });

  req.on('end', function () {
    var options;
    
    requestBody = qs.parse(data);

    if (challengeAccepted(req.session.cq, requestBody.picture)) {
      options = {
        url: config.sendMessage,
        auth: {
          user: config.user,
          pass: config.key
        },
        form: {
          from: 'donotreply@agilenrv.org',
          to: requestBody.email,
          subject: 'AUG Meeting RSVP',
          text: 'Thanks for RSVP\'ing to the meeting on July 9th, 2013, at 6:00pm. Your reply: ' + requestBody.reply + '. To change your reply, simply resubmit the form on the site.'
        }
      };

      request.post(options, function (error, response, body) {
        if (response.statusCode < 200 || response.statusCode >= 300) {
          res.status(response.statusCode).send(body);
        } else {
          options.form.from = 'rsvp@agilenrv.org';
          options.form.to = 'organizers@agilenrv.org';
          options.form.subject += ' - ' + requestBody.name;
          options.form.text = 'RSVP for ' + requestBody.name + ' ' + requestBody.email + ': ' + requestBody.reply;
          request.post(options, function (err, resp, bod) {
            res.status(resp.statusCode).send(bod);
          });
        }
      });
    } else {
      res.status(403).send('Bad challenge answer');
    }
  });
});

// comment on a blog post
server.post('/comment', function (req, res) {
  var name, comment, db;

  data = '';
  req.on('data', function (chunk) {
    data += chunk;
  });

  req.on('end', function () {
    var options;
    
    requestBody = qs.parse(data);

    if (challengeAccepted(req.session.cq, requestBody.picture)) {
      db = mongoose.connection;

      if (!db.readyState) {
        mongoose.connect('mongodb://127.0.0.1:27017/nrvaug');
        db.once('open', function () {
          postComment(requestBody, res);
        });
      } else {
        postComment(requestBody, res);
      }
    } else {
      res.status(403).send('Bad challenge answer');
    }
  });
});

function postComment(request, response) {
  var blog, name, email, comment;

  blog = request.blog;
  name = request.name;
  email = request.email;
  comment = request.comment;
  Comment.save(
    {
      blog: request.blog,
      name: request.name,
      email: request.email,
      comment: request.comment
    },
    this.logError_
  );
  res.status(202).send('Comment posted');
}

function challengeAccepted(cq, answer) {
  var lowerCaseAnswer;

  lowerCaseAnswer = answer.toLowerCase();
  switch (cq) {
    case 1:
      return ['ball', 'basketball', 'basket ball', 'bball'].indexOf(lowerCaseAnswer) > -1;
    case 2:
      return ['robot'].indexOf(lowerCaseAnswer) > -1;
    case 3:
      return ['dog', 'doggy', 'puppy', 'wagging dog', 'happy dog', 'happy puppy'].indexOf(lowerCaseAnswer) > -1;
    default:
      return false;
  }
}

server.listen(3000);
console.log('Listening on port 3000');
