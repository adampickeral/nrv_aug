nrvaug.views.Resources = function () {};
nrvaug.views.Resources.prototype = new nrvaug.views.View();

nrvaug.views.Resources.prototype.getTemplate = function () {
  return nrvaug.templates.resourcesTmpl();
};

nrvaug.views.Resources.prototype.getPageName = function () {
  return 'Resources';
};

nrvaug.views.createResourcesView = function () {
  return new nrvaug.views.Resources();
};
