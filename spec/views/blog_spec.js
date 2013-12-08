describe('nrvaug.views.Blog', function () {
  var view;

  beforeEach(function () {
    setFixtures('<section class="content"></section>');
    view = nrvaug.views.createBlogView();
    view.render();
  });

  it('appends the resources view to the content if there is no content', function () {
    var content;

    content = $('.content')[0];
    expect(content.innerHTML).toBe(nrvaug.templates.blogTmpl());
  });

  it('replaces the content with the main view if there is content', function () {
    var content;

    setFixtures('<section class="content"><div class="blurbs"></div></section>');

    view.render();

    content = $('.content')[0];
    expect(content.innerHTML).toBe(nrvaug.templates.blogTmpl());
  });

  it('sets the name of the page for tracking', function () {
    expect(view.getPageName()).toBe('Blog');
  });

  describe('read more click', function () {
    beforeEach(function () {
      spyOn($.prototype, 'height').andReturn(500);
      spyOn($.prototype, 'css').andCallThrough();
      spyOn($.prototype, 'animate').andCallThrough();
      spyOn($.prototype, 'show').andCallThrough();
      spyOn($.prototype, 'hide').andCallThrough();
      spyOn($.prototype, 'text').andCallThrough();
    });

    function expectToBeContracted(contentId, readMoreId) {
      var $content, $readMore, $readMoreBlur;

      $content = $(contentId);
      $readMore = $(readMoreId);
      $readMoreBlur = $content.find('.read-more');
      $content.height.andReturn(500);

      $readMore.click();

      expect($content.css).toHaveBeenCalledWith({
        'height': $content.height(),
        'max-height': 9999
      });
      expect($content.animate).toHaveBeenCalledWith({
        'height': 345,
        'max-height': 345
      });
      expect($readMoreBlur.show).toHaveBeenCalled();
      expect($readMore.text).toHaveBeenCalledWith('read more...');
    }

    function expectToBeExpanded(contentId, readMoreId) {
      var $content, $readMore, $readMoreBlur, blogHeight;

      $content = $(contentId);
      $readMore = $(readMoreId);
      $readMoreBlur = $content.find('.read-more');
      $content.height.andReturn(300);

      $readMore.click();

      expect($content.css).toHaveBeenCalledWith({
        'height': $content.height(),
        'max-height': 9999
      });
      blogHeight = 0;
      $content.find('blog').children().each(function () {
        blogHeight += $(this).outerHeight();
      });
      expect($content.animate).toHaveBeenCalledWith({
        'height': blogHeight + $readMoreBlur.outerHeight()
      });
      expect($readMoreBlur.hide).toHaveBeenCalled();
      expect($readMore.text).toHaveBeenCalledWith('read less...');
    }

    function expectReadMoreToggle(contentId, readMoreId) {
      expectToBeContracted(contentId, readMoreId);
      expectToBeExpanded(contentId, readMoreId);
    }

    it('adds read more toggle to november content', function () {
      expectReadMoreToggle('#november-content', '#november-read-more');
    });

    it('adds read more toggle to september content', function () {
      expectReadMoreToggle('#september-content', '#september-read-more');
    });

    it('adds read more toggle to august content', function () {
      expectReadMoreToggle('#august-content', '#august-read-more');
    });

    it('adds read more toggle to july content', function () {
      expectReadMoreToggle('#july-content', '#july-read-more');
    });

    it('adds read more toggle to june content', function () {
      expectReadMoreToggle('#june-content', '#june-read-more');
    });
  });
});
