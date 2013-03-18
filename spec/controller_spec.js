describe('nrvaug.Controller', function () {
  var controller, location, mainView, meetingsView, mailingListView, globals;

  beforeEach(function () {
    location = {};
    mainView = {
      'render': jasmine.createSpy('render')
    };
    meetingsView = {
      'render': jasmine.createSpy('render')
    };
    mailingListView = {
      'render': jasmine.createSpy('render')
    };
    spyOn(nrvaug.views, 'createMainView').andReturn(mainView);
    spyOn(nrvaug.views, 'createMeetingsView').andReturn(meetingsView);
    spyOn(nrvaug.views, 'createMailingListView').andReturn(mailingListView);
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

    it('to mailing list if location is mailing list', function () {
      globals.location.hash = '#mailingList';

      controller.route();

      expect(mailingListView.render).toHaveBeenCalled();
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
