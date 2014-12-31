nrvaug.views.Contact = function (scrollIntoView, optContactForm) {
  nrvaug.views.View.call(this, scrollIntoView);
  this.contactForm_ = optContactForm || new nrvaug.views.ContactForm();
};
nrvaug.views.Contact.prototype = new nrvaug.views.View();

nrvaug.views.Contact.prototype.render = function () {
  nrvaug.views.View.prototype.render.call(this, arguments);
  this.contactForm_.render();
};

nrvaug.views.Contact.prototype.getTemplate = function () {
  return nrvaug.templates.contactTmpl({challenge: challenge});
};

nrvaug.views.Contact.prototype.getPageName = function () {
  return 'Contact';
};

nrvaug.views.Contact.prototype.getNavigationItem = function () {
  return 'nav-contact';
};

nrvaug.views.Contact.prototype.contactForm_ = null;

nrvaug.views.createContactView = function (scrollIntoView, optContactForm) {
  return new nrvaug.views.Contact(scrollIntoView, optContactForm);
};
