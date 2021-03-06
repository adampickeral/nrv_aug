nrvaug.views.View = function (scrollIntoView) {
  this.scrollIntoView = scrollIntoView || false;
};

nrvaug.views.View.prototype.render = function () {
  var blurbs;

  blurbs = $('.blurbs');
  if (blurbs.length === 0) {
    $('.content').append(this.getTemplate());
  } else {
    blurbs.replaceWith(this.getTemplate());
  }
  this.setNavigation_();
  analytics.track(this.getPageName());
  $('.content')[0].scrollIntoView(this.scrollIntoView);
};

nrvaug.views.View.prototype.setNavigation_ = function () {
	$('.nav-selected').removeClass('nav-selected');
	if (this.getNavigationItem()) {
		$('.' + this.getNavigationItem()).addClass('nav-selected');
	}
};

nrvaug.views.View.prototype.getTemplate = null;
nrvaug.views.View.prototype.getPageName = null;
nrvaug.views.View.prototype.getNavigationItem = function () {
	return false;
};
