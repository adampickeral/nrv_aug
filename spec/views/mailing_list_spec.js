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

  it('sets focus on the name input', function () {
    var mailingListName;

    focus = spyOn($.prototype, 'focus');

    view.render();

    expect(focus.mostRecentCall.object.selector).toBe('#mailing-list-name');
  });

  it('submits the name and email address on submit', function () {
    var post, submitButton;

    post = spyOn($, 'post');
    view.render();

    $('#mailing-list-name').val('Strongbad');
    $('#mailing-list-email').val('hello@world.com');
    submitButton = $('#mailing-list-submit')[0];
    submitButton.click();

    expect(post).toHaveBeenCalledWith(
      'mailingList', 
      {'name': 'Strongbad', 'email': 'hello@world.com'}
    );
  });
});
