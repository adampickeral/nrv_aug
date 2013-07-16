var analytics = {};

describe('nrvaug.views.View', function () {
  var view;

  beforeEach(function () {
    setFixtures(
      '<section class="content">' +
        '<div class="navigation">' +
          '<ul>' +
            '<li class="button home"><a href="#main">Home</a></li>' +
            '<li class="button nav-meetings nav-selected"><a href="#meetings">Meetings</a></li>' +
          '</ul>' +
        '</div>' +
      '</section>'
    );
    analytics.track = jasmine.createSpy('track');
    view = new nrvaug.views.View();
    view.getTemplate = function () {
      return '<div class="blurbs">Hello there</div>';
    };
    view.getPageName = function () {
      return 'Page Name';
    };
    view.getNavigationItem = function () {
      return 'home';
    };
  });

  it('appends the template to the content if there is no content', function () {
    var content;

    view.render();

    content = $('.content')[0];
    expect(content.innerHTML).toBe('<div class="navigation"><ul><li class="button home nav-selected"><a href="#main">Home</a></li><li class="button nav-meetings"><a href="#meetings">Meetings</a></li></ul></div><div class="blurbs">Hello there</div>');
  });

  it('replaces the content with the template if there is content already there', function () {
    var content;

    setFixtures('<section class="content"><div class="blurbs>We already have some content></div></section>');

    view.render();

    content = $('.content')[0];
    expect(content.innerHTML).toBe('<div class="blurbs">Hello there</div>');
  });

  it('tracks the page view', function () {
    view.render();
    
    expect(analytics.track).toHaveBeenCalledWith(view.getPageName());
  });

  it('sets the selected navigation item if the view is associated with a nav button', function () {
    view.render();

    expect($('.home').attr('class')).toContain('nav-selected');
  });

  it('deselects any navigation item on view rendering', function () {
    view.render();

    expect($('.nav-meetings').attr('class')).not.toContain('nav-selected');
  });
});
