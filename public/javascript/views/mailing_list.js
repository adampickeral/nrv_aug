nrvaug.views.MailingList = function () {

};
nrvaug.views.MailingList.prototype = new nrvaug.views.View();

nrvaug.views.MailingList.prototype.render = function () {
  nrvaug.views.View.prototype.render.call(this, arguments);
  $('#mailing-list-name').focus();
  this.handleFormSubmission_();
};

nrvaug.views.MailingList.prototype.handleFormSubmission_ = function () {
  $('#mailing-list-submit').click(function () {
    var data;

    data = {
      'name': $('#mailing-list-name').val(),
      'email': $('#mailing-list-email').val()
    };
    $.post('mailingList', data)
      .done(function () {
        $('#mailing-list-request-message').text('Request received. A confirmation email will be sent.');
        $('.info-message').addClass('success');
        $('.info-message').removeClass('error');
      })
      .fail(function () {
        $('#mailing-list-request-message').text('The request was unsuccessful. Please try again.');
        $('.info-message').addClass('error');
        $('.info-message').removeClass('success');
      });
  });
};

nrvaug.views.MailingList.prototype.getTemplate = function () {
  return nrvaug.templates.mailingListTmpl();
};

nrvaug.views.createMailingListView = function () {
  return new nrvaug.views.MailingList();
};
