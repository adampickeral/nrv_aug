describe('nrvaug.views.MailingList', function () {
  var view;

  beforeEach(function () {
    setFixtures('<section class="content"></section>');
    view = nrvaug.views.createMailingListView();
  });

  it('appends the mailing list view to the content if there is no content', function () {
    var content;
    
    view.render();

    content = $(".content")[0];
    expect(content.innerHTML).toBe(nrvaug.templates.mailingListTmpl());
  });

  it('replaces the content with the mailing list view if there is content there already', function () {
    var content;

    setFixtures('<section class="content"><div class="blurbs">We already have some content</div></section>');

    view.render();

    content = $('.content')[0];
    expect(content.innerHTML).toBe(nrvaug.templates.mailingListTmpl());
  });
});
