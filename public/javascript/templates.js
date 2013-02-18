var main = 
  '<div class="blurbs">' +
    '<div class="blurb">' +
        '<h2>Our Mission</h2>' +
        '<p class="blurb-content">Encourage better software development through agile practices</p>' +
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
    '</div>' +
  '</div>';

var meetings = 
  '<div class="blurbs">' +
    '<div class="blurb">' +
      '<h2>Meetings</h2>' +
      '<p class="blurb-content">We hold monthly meetings, generally the second Tuesday of every month from 6:00pm - 8:00pm</p>' +
      '<p class="blurb-content">Our next meeting will be on Wednesday March 13th, from 6:00pm - 8:00pm</p>' +
    '</div>' +
  '</div>';

var mainTmpl = Mustache.compile(main);
var meetingsTmpl = Mustache.compile(meetings);
