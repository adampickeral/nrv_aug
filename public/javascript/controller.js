nrvaug.Controller = function () {

};

nrvaug.Controller.prototype.init = function () {
  this.route();
};

nrvaug.Controller.prototype.route = function () {
  var view;

  view = nrvaug.views.createMainView();
  view.render();
  nrvaug.templates.mainTmpl();
  nrvaug.templates.meetingsTmpl();
};
