nrvaug.views.ContactForm = function () {};

nrvaug.views.ContactForm.prototype.render = function () {
  this.handleFormSubmission_();
};

nrvaug.views.ContactForm.prototype.handleFormSubmission_ = function () {
  $('#contact-submit').click(function () {
    var data;

    data = {
      'name': $('#contact-name').val(),
      'email': $('#contact-email').val(),
      'subject': $('#contact-subject').val(),
      'message': $('#contact-message').val(),
      'picture': $('#contact-security-challenge-question').val()
    };
    if (this.isValidInput(data)) {
      $('#contact-message').text('');
      $('.info-message').addClass('loading');
      $('.save-link').addClass('loading');
      $.post('contact', data)
        .done(function () {
          $('.info-message').removeClass('loading');
          $('.save-link').removeClass('loading');
          $('#contact-response-message').text('Thanks for the note. We\'ll get back to you shortly.');
          $('.info-message').addClass('success');
          $('.info-message').removeClass('error');
        })
        .fail(function (response) {
          $('.info-message').removeClass('loading');
          $('.save-link').removeClass('loading');
          if (response.status === 403) {
            $('#contact-response-message').text('That is not what this is a picture of. Try again or refresh the page for a new picture.');
          } else {
            $('#contact-response-message').text('Sorry, the request failed, please try again later.');
          }
          
          $('.info-message').addClass('error');
          $('.info-message').removeClass('success');
        });
      }
  }.bind(this));
};

nrvaug.views.ContactForm.prototype.isValidInput = function (data) {
  var requiredDataPresent;

  requiredDataPresent = true;
  if (this.isEmptyString(data['name'])) {
    $('#contact-name').addClass('missing');
    requiredDataPresent = false;
  }
  if (this.isEmptyString(data['email'])) {
    $('#contact-email').addClass('missing');
    requiredDataPresent = false;
  }
  if (this.isEmptyString(data['subject'])) {
    $('#contact-subject').addClass('missing');
    requiredDataPresent = false;
  }
  if (this.isEmptyString(data['message'])) {
    $('#contact-message').addClass('missing');
    requiredDataPresent = false;
  }
  if (this.isEmptyString(data['picture'])) {
    $('#contact-security-challenge-question').addClass('missing');
    requiredDataPresent = false;
  }
  return requiredDataPresent;
};

nrvaug.views.ContactForm.prototype.isEmptyString = function (str) {
  return !str || /^\s*$/.test(str);
};
