nrvaug.views.Main = function () {

};
nrvaug.views.Main.prototype = new nrvaug.views.View();

nrvaug.views.Main.prototype.getTemplate = function () {
  return nrvaug.templates.mainTmpl();
};

nrvaug.views.Main.prototype.getPageName = function () {
  return 'Main';
};

nrvaug.views.createMainView = function () {
  return new nrvaug.views.Main();
};
