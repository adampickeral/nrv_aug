nrvaug.views.RsvpForm = function () {};

nrvaug.views.RsvpForm.prototype.render = function (element) {
  this.handleFormSubmission_();
};

nrvaug.views.RsvpForm.prototype.handleFormSubmission_ = function () {
  $('#rsvp-submit').click(function () {
    var data;

    data = {
      'name': $('#rsvp-name').val(),
      'email': $('#rsvp-email').val(),
      'reply': $('input[name=rsvp-attending]').val(),
      'picture': $('#security-challenge-question').val()
    };
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
  });
};
