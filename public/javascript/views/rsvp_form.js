nrvaug.views.RsvpForm = function () {};

nrvaug.views.RsvpForm.prototype.render = function () {
  this.handleFormSubmission_();
};

nrvaug.views.RsvpForm.prototype.handleFormSubmission_ = function () {
  $('#rsvp-submit').click(function () {
    var data;

    data = {
      'name': $('#rsvp-name').val(),
      'email': $('#rsvp-email').val(),
      'reply': $('input[name=rsvp-attending]:checked').val(),
      'picture': $('#security-challenge-question').val()
    };
    if (this.isValidInput(data)) {
      $.post('rsvp', data)
        .done(function () {
          $('#rsvp-message').text('Thanks for your RSVP');
          $('.info-message').addClass('success');
          $('.info-message').removeClass('error');
        })
        .fail(function (response) {
          if (response.status === 403) {
            $('#rsvp-message').text('That is not what this is a picture of. Try again or refresh the page for a new picture.');
          } else {
            $('#rsvp-message').text('Sorry, the request failed, please try again later.');
          }
          
          $('.info-message').addClass('error');
          $('.info-message').removeClass('success');
        });
      }
  }.bind(this));
};

nrvaug.views.RsvpForm.prototype.isValidInput = function (data) {
  var requiredDataPresent;

  requiredDataPresent = true;
  if (this.isEmptyString(data['name'])) {
    $('#rsvp-name').addClass('missing');
    requiredDataPresent = false;
  }
  if (this.isEmptyString(data['email'])) {
    $('#rsvp-email').addClass('missing');
    requiredDataPresent = false;
  }
  if (this.isEmptyString(data['reply'])) {
    $('#rsvp-attending-yes').addClass('missing');
    $('#rsvp-attending-no').addClass('missing');
    requiredDataPresent = false;
  }
  if (this.isEmptyString(data['picture'])) {
    $('#security-challenge-question').addClass('missing');
    requiredDataPresent = false;
  }
  return requiredDataPresent;
};

nrvaug.views.RsvpForm.prototype.isEmptyString = function (str) {
  return !str || /^\s*$/.test(str);
};
