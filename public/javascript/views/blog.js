nrvaug.views.Blog = function () {};
nrvaug.views.Blog.prototype = new nrvaug.views.View();

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
