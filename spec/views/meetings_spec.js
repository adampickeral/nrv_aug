describe('nrvaug.views.Meetings', function () {
  var view, map;

  beforeEach(function () {
    setFixtures('<section class="content"></section>');
    map = {
      render: jasmine.createSpy('render')
    };
    view = nrvaug.views.createMeetingsView(map);
    view.render();
  });

  it('appends the meetings view to the content if there is no content', function () {
    var content;

    content = $(".content")[0];
    expect(content.innerHTML).toBe(nrvaug.templates.meetingsTmpl());
  });

  it('replaces the content with the meetings view if there is content there already', function () {
    var content;

    setFixtures('<section class="content"><div class="blurbs">We already got some content</div></section>');
    
    view.render();

    content = $(".content")[0];
    expect(content.innerHTML).toBe(nrvaug.templates.meetingsTmpl());
  });

  it('renders the map', function () {
    view.render();

    expect(map.render).toHaveBeenCalled();
  });

  it('sets the page name for tracking', function () {
    view.render();

    expect(view.getPageName()).toBe('Meetings');
  });
});
