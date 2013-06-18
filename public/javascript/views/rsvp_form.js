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
      'reply': $('input[name=rsvp-attending]').val()
    };
    $.post('rsvp', data)
      .done(function () {

      })
      .fail(function () {

      });
  });
};
