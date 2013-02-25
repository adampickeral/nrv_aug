describe('nrvaug.Controller', function () {
  var controller, location, mainView, meetingsView, globals;

  beforeEach(function () {
    spyOn(nrvaug.templates, 'mainTmpl');
    spyOn(nrvaug.templates, 'meetingsTmpl');

    location = {};
    mainView = {
      'render': jasmine.createSpy('render')
    };
    meetingsView = {
      'render': jasmine.createSpy('render')
    };
    spyOn(nrvaug.views, 'createMainView').andReturn(mainView);
    spyOn(nrvaug.views, 'createMeetingsView').andReturn(meetingsView);
    globals = {
      location: {
        hash: ''
      }
    };
    controller = new nrvaug.Controller(globals);
  });

  describe('routes', function () {
    it('to main by default', function () {
      controller.route();

      expect(mainView.render).toHaveBeenCalled();
      expect(meetingsView.render).not.toHaveBeenCalled();
    });

    it('to meetings if location is meetings', function () {
      globals.location.hash = '#meetings';
      
      controller.route();    
      
      expect(meetingsView.render).toHaveBeenCalled();
      expect(mainView.render).not.toHaveBeenCalled();
    });

    it('to main if location is main', function () {
      globals.location.hash = '#main';

      controller.route();    
      
      expect(mainView.render).toHaveBeenCalled();
    });
  });

  describe('init', function () {
    it('routes when initialized', function () {
      controller.init();

      expect(mainView.render).toHaveBeenCalled();
    });

    it('routes when the location hash changes', function () {
      controller.init();

      globals.location.hash = '#main';
      $(window).trigger('hashchange');

      expect(mainView.render.callCount).toBe(2);
    });
  });
});
