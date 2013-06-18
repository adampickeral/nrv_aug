nrvaug.views.Meetings = function (optMap, optRsvpForm) {
  this.map_ = optMap || new nrvaug.views.Map();
  this.rsvpForm_ = optRsvpForm || new nrvaug.views.RsvpForm();
};
nrvaug.views.Meetings.prototype = new nrvaug.views.View();

nrvaug.views.Meetings.prototype.render = function () {
  nrvaug.views.View.prototype.render.call(this, arguments);
  this.map_.render();
  this.rsvpForm_.render($('.form'));
};

nrvaug.views.Meetings.prototype.getTemplate = function () {
  return nrvaug.templates.meetingsTmpl();
};

nrvaug.views.Meetings.prototype.getPageName = function () {
  return 'Meetings';
};

nrvaug.views.Meetings.prototype.map_ = null;
nrvaug.views.Meetings.prototype.rsvpForm_ = null;

nrvaug.views.createMeetingsView = function (optMap, optRsvpForm) {
  return new nrvaug.views.Meetings(optMap, optRsvpForm);
};
