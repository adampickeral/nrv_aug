nrvaug.views.Meetings = function (optMap) {
  this.map_ = optMap || new nrvaug.views.Map();
};
nrvaug.views.Meetings.prototype = new nrvaug.views.View();

nrvaug.views.Meetings.prototype.render = function () {
  nrvaug.views.View.prototype.render.call(this, arguments);
  this.map_.render();
};

nrvaug.views.Meetings.prototype.getTemplate = function () {
  return nrvaug.templates.meetingsTmpl();
};

nrvaug.views.Meetings.prototype.map_ = null;

nrvaug.views.createMeetingsView = function (optMap) {
  return new nrvaug.views.Meetings(optMap);
};
