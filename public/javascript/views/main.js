nrvaug.views.Main = function () {

};

nrvaug.views.Main.prototype.render = function () {
  var blurbs, template;

  blurbs = $('.blurbs');
  template = nrvaug.templates.mainTmpl();
  if (blurbs.length === 0) {
    $(".content").append(template);
  } else {
    blurbs.replaceWith(template);
  }
};

nrvaug.views.createMainView = function () {
  return new nrvaug.views.Main();
};
