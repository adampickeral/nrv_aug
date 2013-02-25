describe('nrvaug.views.Map', function () {
  var map, googleMap, googleMapMarker, googleGeocoder;

  beforeEach(function () {
    setFixtures('<div id="map-canvas"></div>');
    googleMap = {
      setCenter: jasmine.createSpy('setCenter')
    };
    googleGeocoder = {
      geocode: jasmine.createSpy('geocode').andCallFake(geocodeCallback)
    };
    googleMapMarker = {};
    spyOn(nrvaug.views.Map, 'createGoogleMap').andReturn(googleMap);
    spyOn(nrvaug.views.Map, 'createGoogleMapMarker').andReturn(googleMapMarker);
    spyOn(nrvaug.views.Map, 'createGoogleGeocoder').andReturn(googleGeocoder);

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
      .toHaveBeenCalledWith({map: googleMap, position: 'the location'});
  });

  function geocodeCallback(address, callback) {
    var results;

    results = [{
      geometry: {
        location: 'the location'
      }
    }];
    callback(results, google.maps.GeocoderStatus.OK);
  }
});
