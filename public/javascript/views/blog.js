nrvaug.views.Blog = function (scrollIntoView) {
  nrvaug.views.View.call(this, scrollIntoView);
};
nrvaug.views.Blog.prototype = new nrvaug.views.View();

nrvaug.views.Blog.prototype.render = function () {
  nrvaug.views.View.prototype.render.call(this, arguments);

  this.readMore_('#september-2014-read-more', '#september-content');
  this.readMore_('#november-read-more', '#november-content');
  this.readMore_('#september-read-more', '#september-content');
  this.readMore_('#august-read-more', '#august-content');
  this.readMore_('#july-read-more', '#july-content');
  this.readMore_('#june-read-more', '#june-content');
};

nrvaug.views.Blog.prototype.readMore_ = function (readMoreLinkId, contentId) {
  $(readMoreLinkId).click(function () {
    var $blog, totalHeight, $content, $readMoreBlur;

    $content = $(contentId);
    $readMoreBlur = $content.find('.read-more');

    if ($content.height() > 350) {
      $content.css({
        'height': $content.height(),
        'max-height': 9999
      })
      .animate({
        'height': 345,
        'max-height': 345
      });
      $readMoreBlur.show();
      $(this).text('read more...');
    } else {
      $blog = $content.find('blog');
      totalHeight = 0;
      $blog.children().each(function () {
        totalHeight += $(this).outerHeight();
      });
      
      $content.css({
        'height': $content.height(),
        'max-height': 9999
      })
      .animate({
        'height': totalHeight
      });
      $readMoreBlur.hide();
      $(this).text('read less...');
    }

    return false;
  });
};

nrvaug.views.Blog.prototype.getTemplate = function () {
  return nrvaug.templates.blogTmpl();
};

nrvaug.views.Blog.prototype.getPageName = function () {
  return 'Blog';
};

nrvaug.views.Blog.prototype.getNavigationItem = function () {
	return 'nav-blog';
};

nrvaug.views.createBlogView = function (scrollIntoView) {
  return new nrvaug.views.Blog(scrollIntoView);
};
