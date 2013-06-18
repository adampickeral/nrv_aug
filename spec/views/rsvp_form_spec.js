describe('nrvaug.views.RsvpForm', function () {
  var form;

  beforeEach(function () {
    setFixtures(
      '<div class="form">' +
        '<input id="rsvp-name" type="text">' +
        '<input id="rsvp-email" type="email">' +
        '<input id="rsvp-attending-yes" name="rsvp-attending" type="radio" value="yes">' +
        '<input id="rsvp-attending-no" name="rsvp-attending" type="radio" value="no">' +
        '<div class="form-field save-link">' +
          '<a class="button" id="rsvp-submit">Submit</a>' +
        '</div>' +
      '</div>'
    );
    form = new nrvaug.views.RsvpForm();
    form.render($('.form'));
  });

  it('submits the name, email address, and reply on submit', function () {
    var post, submitButton;

    post = {
      done: function (callback) {
        return this;
      },
      fail: function (callback) {}
    };
    spyOn($, 'post').andReturn(post);

    $('#rsvp-name').val('Strongbad');
    $('#rsvp-email').val('hello@world.com');
    $('input[name=rsvp-attending][value=yes]').prop('checked', true);
    submitButton = $('#rsvp-submit')[0];
    submitButton.click();

    expect($.post).toHaveBeenCalledWith(
      'rsvp',
      { 'name': 'Strongbad', 'email': 'hello@world.com', 'reply': 'yes' }
    );
  });
});
