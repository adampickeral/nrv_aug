var challenge = 2;
describe('nrvaug.views.Meetings', function () {
  var view, map, rsvpForm;

  beforeEach(function () {
    setFixtures('<section class="content"></section>');
    map = {
      render: jasmine.createSpy('render')
    };
    rsvpForm = {
      render: jasmine.createSpy('render')
    };
    view = nrvaug.views.createMeetingsView(map, rsvpForm);
    view.render();
  });

  it('appends the meetings view to the content if there is no content', function () {
    var content;

    content = $(".content")[0];
    expect(content.innerHTML).toBe(nrvaug.templates.meetingsTmpl({challenge: challenge}));
  });

  it('replaces the content with the meetings view if there is content there already', function () {
    var content;

    setFixtures('<section class="content"><div class="blurbs">We already got some content</div></section>');
    
    view.render();

    content = $(".content")[0];
    expect(content.innerHTML).toBe(nrvaug.templates.meetingsTmpl({challenge: challenge}));
  });

  it('renders the rsvp form', function () {
    expect(rsvpForm.render).toHaveBeenCalled();
  });

  it('sets the page name for tracking', function () {
    expect(view.getPageName()).toBe('Meetings');
  });
});
