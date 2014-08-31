nrvaug.views.Resources = function (scrollIntoView) {
  nrvaug.views.View.call(this, scrollIntoView);
};
nrvaug.views.Resources.prototype = new nrvaug.views.View();

nrvaug.views.Resources.prototype.getTemplate = function () {
  return nrvaug.templates.resourcesTmpl();
};

nrvaug.views.Resources.prototype.getPageName = function () {
  return 'Resources';
};

nrvaug.views.Resources.prototype.getNavigationItem = function () {
	return 'nav-resources';
};

nrvaug.views.createResourcesView = function (scrollIntoView) {
  return new nrvaug.views.Resources(scrollIntoView);
};
