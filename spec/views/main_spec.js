describe('nrvaug.views.Main', function () {
  var view;

  beforeEach(function () {
    setFixtures('<section class="content"></section>');
    view = nrvaug.views.createMainView();
    view.render();
  });

  it('appends the main view to the content if there is no content', function () {
    var content;

    content = $(".content")[0];
    expect(content.innerHTML).toBe(nrvaug.templates.mainTmpl());
  });

  it('replaces the content with the main view if there is content there already', function () {
    var content;

    setFixtures('<section class="content"><div class="blurbs">We already got some content</div></section>');
    
    view.render();

    content = $(".content")[0];
    expect(content.innerHTML).toBe(nrvaug.templates.mainTmpl());
  });
});
