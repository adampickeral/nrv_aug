nrvaug.Controller = function (globals) {
  this.globals_ = globals;
};

nrvaug.Controller.prototype.init = function () {
  window.onhashchange = this.route.bind(this);
  this.route();
};

nrvaug.Controller.prototype.route = function () {
  var view, hash;

  hash = this.getLocationHash_();
  if (hash === "main") {
    view = nrvaug.views.createMainView();
  } else if (hash === "meetings") {
    view = nrvaug.views.createMeetingsView();
  } else if (hash === "mailingList") {
    view = nrvaug.views.createMailingListView();
  } else if (hash === "resources") {
    view = nrvaug.views.createResourcesView();
  } else if (hash === "blog") {
    view = nrvaug.views.createBlogView();
  } else {
    view = nrvaug.views.createMainView();
  }
  view.render();
};

nrvaug.Controller.prototype.getLocationHash_ = function () {
  return this.globals_.location.hash.substr(this.globals_.location.hash.indexOf('#') + 1);
};

nrvaug.Controller.prototype.globals_ = null;
