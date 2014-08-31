nrvaug.views.Meetings = function (scrollIntoView, optMap, optRsvpForm) {
  nrvaug.views.View.call(this, scrollIntoView);
  this.map_ = optMap || new nrvaug.views.Map();
  this.rsvpForm_ = optRsvpForm || new nrvaug.views.RsvpForm();
};
nrvaug.views.Meetings.prototype = new nrvaug.views.View();

nrvaug.views.Meetings.prototype.render = function () {
  nrvaug.views.View.prototype.render.call(this, arguments);
  this.map_.render();
  this.rsvpForm_.render();
};

nrvaug.views.Meetings.prototype.getTemplate = function () {
  return nrvaug.templates.meetingsTmpl({challenge: challenge});
};

nrvaug.views.Meetings.prototype.getPageName = function () {
  return 'Meetings';
};

nrvaug.views.Meetings.prototype.getNavigationItem = function () {
	return 'nav-meetings';
};

nrvaug.views.Meetings.prototype.map_ = null;
nrvaug.views.Meetings.prototype.rsvpForm_ = null;

nrvaug.views.createMeetingsView = function (scrollIntoView, optMap, optRsvpForm) {
  return new nrvaug.views.Meetings(scrollIntoView, optMap, optRsvpForm);
};
