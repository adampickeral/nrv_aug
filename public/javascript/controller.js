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
    view = nrvaug.views.createMainView(true);
  } else if (hash === "contact") {
    view = nrvaug.views.createContactView(true);
  } else if (hash === "meetings") {
    view = nrvaug.views.createMeetingsView(true);
  } else if (hash === "mailingList") {
    view = nrvaug.views.createMailingListView(true);
  } else if (hash === "resources") {
    view = nrvaug.views.createResourcesView(true);
  } else if (hash === "blog") {
    view = nrvaug.views.createBlogView(true);
  } else {
    view = nrvaug.views.createMainView();
  }
  view.render();
};

nrvaug.Controller.prototype.getLocationHash_ = function () {
  return this.globals_.location.hash.substr(this.globals_.location.hash.indexOf('#') + 1);
};

nrvaug.Controller.prototype.globals_ = null;
