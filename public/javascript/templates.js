nrvaug.templates = {};

var main = 
  '<div class="blurbs">' +
    '<div class="blurb">' +
      '<h2>Our Mission</h2>' +
      '<p class="blurb-content">Encourage better software development through agile practices.</p>' +
    '</div>' +
    '<div class="blurb">' +
      '<h2>Principles</h2>' +
      '<ul class="blurb-content">' +
        '<li class="icon-right-dir"><b>Discussions are open to all things agile</b></li>' +
        '<li class="icon-right-dir"><b>Allow the group to determine discussion topics</b></li>' +
        '<li class="icon-right-dir"><b>Include people from all aspects of software development</b></li>' +
        '<li class="icon-right-dir"><b>Meet on a monthly basis</b></li>' +
      '</ul>' +
    '</div>' +
  '</div>';

var meetings = 
  '<div class="blurbs">' +
    '<div class="blurb">' +
      '<h2>Meetings</h2>' +
      '<p class="blurb-content">We hold monthly meetings, generally the second Tuesday of every month from 6:00pm - 8:00pm.</p>' +
      '<p class="blurb-content">Our next meeting will be on Tuesday March 12th, from 6:00pm - 8:00pm at <a href="http://www.techpad.org/" target="blank">TechPad</a> in downtown Blacksburg.</p>' +
      '<p class="blurb-content">Please <a href="http://www.signupgenius.com/go/60B0C4CA9AD2FA64-march" target="blank">click here</a> to RSVP.</p>' +
      '<p class="blurb-content">Fill out <a href="http://www.surveymonkey.com/s/FX9HF28" target="blank">this survey</a> to vote on topics.</p>' +
    '</div>' +
    '<div class="blurb">' +
      '<div id="map-canvas"></div>' +
    '</div>' +
  '</div>';

var mainTmpl = Mustache.compile(main);
var meetingsTmpl = Mustache.compile(meetings);

nrvaug.templates.mainTmpl = Mustache.compile(main);
nrvaug.templates.meetingsTmpl = Mustache.compile(meetings);
