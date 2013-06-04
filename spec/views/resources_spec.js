describe('nrvaug.views.Resources', function () {
  var view;

  beforeEach(function () {
    setFixtures('<section class="content"></section>');
    view = nrvaug.views.createResourcesView();
    view.render();
  });

  it('appends the resources view to the content if there is no content', function () {
    var content;

    content = $('.content')[0];
    expect(content.innerHTML).toBe(nrvaug.templates.resourcesTmpl());
  });

  it('replaces the content with the main view if there is content', function () {
    var content;

    setFixtures('<section class="content"><div class="blurbs"></div></section>');

    view.render();

    content = $('.content')[0];
    expect(content.innerHTML).toBe(nrvaug.templates.resourcesTmpl());
  });

  it('sets the name of the page for tracking', function () {
    expect(view.getPageName()).toBe('Resources');
  });
});
