nrvaug.views.MailingList = function () {

};

nrvaug.views.MailingList.prototype.render = function () {
  var blurbs, template;

  blurbs = $('.blurbs');
  template = nrvaug.templates.mailingListTmpl();
  if (blurbs.length === 0) {
    $('.content').append(template);
  } else {
    blurbs.replaceWith(template);
  }
};

nrvaug.views.createMailingListView = function () {
  return new nrvaug.views.MailingList();
};
