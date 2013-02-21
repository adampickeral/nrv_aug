describe('nrvaug.Controller', function () {
  var controller, location, mainView;

  beforeEach(function () {
    spyOn(nrvaug.templates, 'mainTmpl');
    spyOn(nrvaug.templates, 'meetingsTmpl');

    location = {};
    mainView = {
      'render': jasmine.createSpy('render')
    };
    spyOn(nrvaug.views, 'createMainView').andReturn(mainView);
    controller = new nrvaug.Controller();
    controller.init();
  });

  it('routes to main by default', function () {
    expect(mainView.render).toHaveBeenCalled();
    expect(nrvaug.templates.mainTmpl).toHaveBeenCalled();
  });

  it('routes to meetings if location is meetings', function () {
    controller.route();    
    expect(nrvaug.templates.meetingsTmpl).toHaveBeenCalled();
  });

  it('routes to main if location is main', function () {
    controller.route();    
    expect(nrvaug.templates.mainTmpl).toHaveBeenCalled();
  });
});
