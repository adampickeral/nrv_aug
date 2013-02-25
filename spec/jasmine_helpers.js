var setFixtures = function (html) {
  jasmine.getFixtures().set(html);
}

jasmine.getFixtures = function() {
  return jasmine.currentFixtures_ = jasmine.currentFixtures_ || new jasmine.Fixtures();
};

jasmine.Fixtures = function() {
  this.containerId = 'jasmine-fixtures';
};

jasmine.Fixtures.prototype.set = function(html) {
  this.cleanUp();
  this.createContainer_(html);
};

jasmine.Fixtures.prototype.cleanUp = function() {
  var ele = document.getElementById(this.containerId);
  if (ele) {
    ele.parentNode.removeChild(ele);
  }
};

jasmine.Fixtures.prototype.createContainer_ = function(html) {
  var container, body;

  container = document.createElement('div');
  container.setAttribute('id', this.containerId);

  container.innerHTML = html;

  body = document.getElementsByTagName("body")[0];
  body.appendChild(container);
};

jasmine.currentFixtures_ = null;

afterEach(function () {
  jasmine.getFixtures().cleanUp();
});