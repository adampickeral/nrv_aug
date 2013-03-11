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
    $.post('mailingList', data);
  });
};

nrvaug.views.MailingList.prototype.getTemplate = function () {
  return nrvaug.templates.mailingListTmpl();
};

nrvaug.views.createMailingListView = function () {
  return new nrvaug.views.MailingList();
};
