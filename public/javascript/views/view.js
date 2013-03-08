nrvaug.views.View = function () {

};

nrvaug.views.View.prototype.render = function () {
  var blurbs;

  blurbs = $('.blurbs');
  if (blurbs.length === 0) {
    $('.content').append(this.getTemplate());
  } else {
    blurbs.replaceWith(this.getTemplate());
  }
};

nrvaug.views.View.prototype.getTemplate = null;
