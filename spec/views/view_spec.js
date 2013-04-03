var analytics = {};

describe('nrvaug.views.View', function () {
  var view;

  beforeEach(function () {
    setFixtures('<section class="content"></section>');
    analytics.track = jasmine.createSpy('track');
    view = new nrvaug.views.View();
    view.getTemplate = function () {
      return 'Hello there';
    };
    view.getPageName = function () {
      return 'Page Name';
    };
  });

  it('appends the template to the content if there is no content', function () {
    var content;

    view.render();

    content = $('.content')[0];
    expect(content.innerHTML).toBe('Hello there');
  });

  it('replaces the content with the template if there is content already there', function () {
    var content;

    setFixtures('<section class="content"><div class="blurbs>We already have some content></div></section>');

    view.render();

    content = $('.content')[0];
    expect(content.innerHTML).toBe('Hello there');
  });

  it('tracks the page view', function () {
    view.render();
    
    expect(analytics.track).toHaveBeenCalledWith(view.getPageName());
  });
});
