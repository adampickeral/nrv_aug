nrvaug.views.Meetings = function (optMap) {
  this.map_ = optMap || new nrvaug.views.Map();
};

nrvaug.views.Meetings.prototype.render = function () {
  var blurbs, template;

  blurbs = $('.blurbs');
  template = nrvaug.templates.meetingsTmpl();
  if (blurbs.length === 0) {
    $(".content").append(template);
  } else {
    blurbs.replaceWith(template);
  }

  this.map_.render();
};

nrvaug.views.Meetings.prototype.map_ = null;

nrvaug.views.createMeetingsView = function (optMap) {
  return new nrvaug.views.Meetings(optMap);
};
