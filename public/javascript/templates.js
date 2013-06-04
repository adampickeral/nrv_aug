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
      '<p class="blurb-content">Our next meeting will be on Tuesday June 11th, from 6:00pm - 8:00pm at <a class="info-link" href="http://www.techpad.org/" target="blank">TechPad</a> in downtown Blacksburg.</p>' +
      '<p class="blurb-content">Please <a class="info-link" href="http://www.signupgenius.com/go/60B0C4CA9AD2FA64-augjune" target="blank">click here</a> to RSVP.</p>' +
      '<p class="blurb-content">Our next meeting will follow a <a class="info-link" href="http://leancoffee.org/" target="blank">Lean Coffee</a> format. Everyone will brainstorm topics as they arrive, give a brief description of their topic, and then vote on what to discuss.</p>' +
    '</div>' +
    '<div class="blurb">' +
      '<div id="map-canvas"></div>' +
    '</div>' +
  '</div>';

var mailingList = 
  '<div class="blurbs">' +
    '<div class="blurb">' +
      '<h2>Mailing List</h2>' +
      '<p class="blurb-content">Fill out the form below to keep up to date with Agile NRV.</p>' +
      '<div class="form-field">' +
        '<label for="mailing-list-name">Name</label>' +
        '<input id="mailing-list-name" type="text">' +
      '</div>' +
      '<div class="form-field">' +
        '<label for="mailing-list-email">Email</label>' +
        '<input id="mailing-list-email" type="email">' +
      '</div>' +
      '<div class="form-field save-link">' +
        '<a class="button" id="mailing-list-submit">Submit</a>' +
      '</div>' +
      '<div class="form-field info-message">' +
        '<div id="mailing-list-request-message"></div>' +
      '</div>' +
    '</div>' +
  '</div>';

var resources = 
  '<div class="blurbs">' +
    '<div class="blurb">' +
      '<h2>Books</h2>' +
      '<resources>' +
        '<resource class="first">' +
          '<div class="image"><img src="/images/art_of_agile_development.gif"></div>' +
          '<h3>The Art of Agile Development</h3>' +
          '<author>James Shore, Shane Warden</author>' +
          '<synopsis>Shore provides a detailed look at eXtreme Programming, explaining topics such as team roles, practices, work environment, and even why one would choose to be agile and utilize XP within their development process. An excellent resource for new and experienced agile practitioners.</synopsis>' +
        '</resource>' +
        '<resource>' +
          '<div class="image"><img src="/images/user_stories_applied.jpg"></div>' +
          '<h3>User Stories Applied</h3>' +
          '<author>Mike Cohn</author>' +
          '<synopsis>Cohn covers the ins and outs of user stories, discussing what they are, what makes a good user story, and also what makes a bad user story. He also explains how to use user stories when you don\'t have access to a user, as well as how to prioritize and estimate user stories.</synopsis>' +
        '</resource>' +
        '<resource>' +
          '<div class="image"><img src="/images/agile_testing.jpg"></div>' +
          '<h3>Agile Testing: A Practical Guide for Testers and Agile Teams</h3>' +
          '<author>Lisa Crispin, Janet Gregory</author>' +
          '<synopsis>This books explains the differences between testing in a traditional development process and testing in an agile process. The role of the tester changes from a reactive to a proactive one, and the approach to testing shifts from developing a test plan to a test strategy. The agile testing matrix is used to explain all the different types of testing needed on an agile project.</synopsis>' +
        '</resource>' +
        '<resource>' +
          '<div class="image"><img src="/images/agile_retrospectives.jpg"></div>' +
          '<h3>Agile Retrospectives: Making Good Teams Great</h3>' +
          '<author>Esther Derby, Janet Larsen</author>' +
          '<synopsis>An excellent resource for teams needing to improve their retrospective. This book explains the basic format of a retrospective as well as how to lead a retrospective and manage the activities and people involved. A multitude of activities are provided to help teams actively engage in mining information about their process and deciding what improvements need to be made.</synopsis>' +
        '</resource>' +
      '</resources>' +
    '</div>' +
    '<div class="blurb">' +
      '<h2>Blogs</h2>' +
      '<resources>' +
        '<resource class="first">' +
          '<h3 class="info-link"><a href="http://xprogramming.com/index.php" target="_blank">XProgramming.com</a></h3>' +
          '<author>Ron Jeffries</author>' +
          '<synopsis>A collection of articles, both opinion based and anecdotal, on the values and practices of eXtreme Programming from the mind of Ron Jeffries, one of the three founders of XP.</synopsis>' +
        '</resource>' +
      '</resources>' +
    '</div>' +
  '</div>';

nrvaug.templates.mainTmpl = Mustache.compile(main);
nrvaug.templates.meetingsTmpl = Mustache.compile(meetings);
nrvaug.templates.mailingListTmpl = Mustache.compile(mailingList);
nrvaug.templates.resourcesTmpl = Mustache.compile(resources);
