describe('nrvaug.views.Map', function () {
  var map, googleMap, googleMapMarker, googleGeocoder, googleInfoWindow;

  function geocodeCallback(address, callback) {
    var results;

    results = [{
      geometry: {
        location: 'the location'
      }
    }];
    callback(results, google.maps.GeocoderStatus.OK);
  }

  beforeEach(function () {
    setFixtures('<div id="map-canvas"></div>');
    googleMap = {
      setCenter: jasmine.createSpy('setCenter')
    };
    googleGeocoder = {
      geocode: jasmine.createSpy('geocode').andCallFake(geocodeCallback)
    };
    googleMapMarker = {};
    googleInfoWindow = {
      open: jasmine.createSpy('open')
    };
    spyOn(nrvaug.views.Map, 'createGoogleMap').andReturn(googleMap);
    spyOn(nrvaug.views.Map, 'createGoogleMapMarker').andReturn(googleMapMarker);
    spyOn(nrvaug.views.Map, 'createGoogleGeocoder').andReturn(googleGeocoder);
    spyOn(nrvaug.views.Map, 'createGoogleInfoWindow').andReturn(googleInfoWindow);

    map = new nrvaug.views.Map();
    map.render();
  });

  it('creates a road map', function () {
    expect(nrvaug.views.Map.createGoogleMap).toHaveBeenCalledWith(
      $('#map-canvas')[0], 
      {zoom: 18, mapTypeId: google.maps.MapTypeId.ROADMAP}
    );
  });

  it('renders the map with an address if the address is found', function () {
    expect(googleGeocoder.geocode).toHaveBeenCalledWith(
      {'address': '432 North Main St # 200, Blacksburg, VA 24060'},
      new jasmine.Matchers.Any(Function)
    );
    expect(googleMap.setCenter).toHaveBeenCalledWith('the location');
    expect(nrvaug.views.Map.createGoogleMapMarker)
      .toHaveBeenCalledWith({map: googleMap, position: 'the location', title: 'TechPad'});
  });

  it('adds an info window to the map marker if the address is found', function () {
    expect(nrvaug.views.Map.createGoogleInfoWindow)
      .toHaveBeenCalledWith("<p>TechPad</p><p>Above PK's Restaurant:</p><p>432 North Main Street, Suite 200</p><p>Blacksburg, Virginia 24060</p>");
    expect(googleInfoWindow.open).toHaveBeenCalledWith(googleMap, googleMapMarker);
  });
});
