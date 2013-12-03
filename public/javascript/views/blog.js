nrvaug.views.Blog = function () {};
nrvaug.views.Blog.prototype = new nrvaug.views.View();

nrvaug.views.Blog.prototype.render = function () {
  nrvaug.views.View.prototype.render.call(this, arguments);

  $('#november-read-more').click(function () {
    var $blog, totalHeight, $novemberContent, $readMoreBlur;

    $novemberContent = $('#november-content');
    $readMoreBlur = $('#november-content > .read-more');

    if ($novemberContent.height() > 350) {
      $novemberContent.css({
        'height': $novemberContent.height(),
        'max-height': 9999
      })
      .animate({
        'height': 345,
        'max-height': 345
      });
      $readMoreBlur.show();
    } else {
      $blog = $('#november-content blog');
      totalHeight = 0;
      $blog.children().each(function () {
        totalHeight += $(this).outerHeight();
      });
      
      $novemberContent.css({
        'height': $novemberContent.height(),
        'max-height': 9999
      })
      .animate({
        'height': totalHeight + $readMoreBlur.outerHeight()
      });
      $readMoreBlur.hide();
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

nrvaug.views.createBlogView = function () {
  return new nrvaug.views.Blog();
};
