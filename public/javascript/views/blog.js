nrvaug.views.Blog = function () {};
nrvaug.views.Blog.prototype = new nrvaug.views.View();

nrvaug.views.Blog.prototype.render = function () {
  nrvaug.views.View.prototype.render.call(this, arguments);

  $('#november-read-more').click(this.readMore_.bind(this, '#november-content'));

  $('#september-read-more').click(this.readMore_.bind(this, '#september-content'));

  $('#august-read-more').click(this.readMore_.bind(this, '#august-content'));
  $('#july-read-more').click(this.readMore_.bind(this, '#july-content'));
  $('#june-read-more').click(this.readMore_.bind(this, '#june-content'));
};

nrvaug.views.Blog.prototype.readMore_ = function (contentId) {
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
      'height': totalHeight + ($readMoreBlur.outerHeight() * 1.5)
    });
    // 1.5 is a magic number to make the height big enough to see all of the text
    $readMoreBlur.hide();
  }

  return false;
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

nrvaug.views.createBlogView = function () {
  return new nrvaug.views.Blog();
};
