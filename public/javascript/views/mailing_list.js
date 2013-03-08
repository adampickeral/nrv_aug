nrvaug.views.MailingList = function () {

};
nrvaug.views.MailingList.prototype = new nrvaug.views.View();

nrvaug.views.MailingList.prototype.getTemplate = function () {
  return nrvaug.templates.mailingListTmpl();
};

nrvaug.views.createMailingListView = function () {
  return new nrvaug.views.MailingList();
};
