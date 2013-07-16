describe('nrvaug.views.RsvpForm', function () {
  var form;

  beforeEach(function () {
    setFixtures(
      '<div class="form">' +
        '<input id="rsvp-name" type="text">' +
        '<input id="rsvp-email" type="email">' +
        '<input id="rsvp-attending-yes" name="rsvp-attending" type="radio" value="yes">' +
        '<input id="rsvp-attending-no" name="rsvp-attending" type="radio" value="no">' +
        '<input id="security-challenge-question" name="security-challenge-question">' +
        '<div class="info-message">' +
          '<div id="rsvp-message"></div>' +
        '</div>' +
        '<div class="form-field save-link">' +
          '<a class="button" id="rsvp-submit">Submit</a>' +
        '</div>' +
      '</div>'
    );
    form = new nrvaug.views.RsvpForm();
    form.render($('.form'));
  });

  it('submits the name, email address, reply, and picture answer on submit', function () {
    var post;

    post = {
      done: function (callback) {
        return this;
      },
      fail: function (callback) {}
    };
    spyOn($, 'post').andReturn(post);

    submitForm();

    expect($.post).toHaveBeenCalledWith(
      'rsvp',
      { 'name': 'Strongbad', 'email': 'hello@world.com', 'reply': 'yes', 'picture': 'squid' }
    );
  });

  it('adds a success message on successful request', function () {
    var post;

    post = {
      done: function (callback) {
        callback();
        return this;
      },
      fail: function (callback) {}
    };
    spyOn($, 'post').andReturn(post);

    submitForm();

    expect($('#rsvp-message')[0].innerHTML).toBe('Thanks for your RSVP');
    expect($('.info-message').attr('class')).toContain('success');
    expect($('.info-message').attr('class')).not.toContain('error');
  });

  it('adds a loading class to the message and button on request submission', function () {
    var post;

    post = {
      done: function (callback) {
        return this;
      },
      fail: function (callback) {}
    };
    spyOn($, 'post').andReturn(post);

    $('#rsvp-message').text('hi there');
    submitForm();

    expect($('.info-message').attr('class')).toContain('loading');
    expect($('.save-link').attr('class')).toContain('loading');
    expect($('#rsvp-message')[0].innerHTML).toBe('');
  });

  it('removes the loading class from the message and button on request submission', function () {
    var post;

    post = {
      done: function (callback) {
        callback();
        return this;
      },
      fail: function (callback) {}
    };
    spyOn($, 'post').andReturn(post);

    submitForm()

    expect($('.info-message').attr('class')).not.toContain('loading');
    expect($('.save-link').attr('class')).not.toContain('loading');
  });

  it('adds a challenge failed message on a 403 response', function () {
    var post;

    post = {
      done: function (callback) {
        return this;
      },
      fail: function (callback) {
        var response;

        response = { status: 403 };
        callback(response);
      }
    };
    spyOn($, 'post').andReturn(post);

    submitForm();

    expect($('#rsvp-message')[0].innerHTML).toBe('That is not what this is a picture of. Try again or refresh the page for a new picture.');
    expect($('.info-message').attr('class')).toContain('error');
    expect($('.info-message').attr('class')).not.toContain('success');
  });

  it('adds a failure message for all other bad requests', function () {
    var post;

    post = {
      done: function (callback) {
        return this;
      },
      fail: function (callback) {
        var response;

        response = { status: 400 };
        callback(response);
      }
    };
    spyOn($, 'post').andReturn(post);

    submitForm();

    expect($('#rsvp-message')[0].innerHTML).toBe('Sorry, the request failed, please try again later.');
    expect($('.info-message').attr('class')).toContain('error');
    expect($('.info-message').attr('class')).not.toContain('success');
  });

  it('adds a required class when name is missing', function () {
    spyOn($, 'post');

    clickSubmit();

    expect($.post).not.toHaveBeenCalled();
    expect($('#rsvp-name').attr('class')).toContain('missing');
  });

  it('adds a required class when email is missing', function () {
    spyOn($, 'post');

    clickSubmit();

    expect($.post).not.toHaveBeenCalled();
    expect($('#rsvp-email').attr('class')).toContain('missing');
  });

  it('adds a required class when reply is missing', function () {
    spyOn($, 'post');

    clickSubmit();

    expect($.post).not.toHaveBeenCalled();
    expect($('#rsvp-attending-yes').attr('class')).toContain('missing');
    expect($('#rsvp-attending-no').attr('class')).toContain('missing');
  });

  it('adds a required class when picture answer is missing', function () {
    spyOn($, 'post');

    clickSubmit();

    expect($.post).not.toHaveBeenCalled();
    expect($('#security-challenge-question').attr('class')).toContain('missing');
  });

  function clickSubmit() {
    var submitButton;

    submitButton = $('#rsvp-submit')[0];
    submitButton.click();
  }

  function submitForm() {
    $('#rsvp-name').val('Strongbad');
    $('#rsvp-email').val('hello@world.com');
    $('input[name=rsvp-attending][value=yes]').prop('checked', true);
    $('#security-challenge-question').val('squid');

    clickSubmit();
  }
});
