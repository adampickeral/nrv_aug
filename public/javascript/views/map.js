nrvaug.views.Map = function () {

};

nrvaug.views.Map.prototype.render = function () {
  var mapOptions, geocoder;

  mapOptions = {
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  this.map_ = nrvaug.views.Map.createGoogleMap($('#map-canvas')[0], mapOptions)
  geocoder = nrvaug.views.Map.createGoogleGeocoder();
  geocoder.geocode(
    {'address': '432 North Main St # 200, Blacksburg, VA 24060'},
    this.setLocation.bind(this)
  );
};

nrvaug.views.Map.prototype.setLocation = function (results, status) {
  if (status === google.maps.GeocoderStatus.OK) {
    this.map_.setCenter(results[0].geometry.location);
    nrvaug.views.Map.createGoogleMapMarker({
      map: this.map_,
      position: results[0].geometry.location
    });
  } else {
    alert('Geocode was not successful for the following reason: ' + status);
  }
};

nrvaug.views.Map.prototype.map_ = null;

nrvaug.views.Map.createGoogleMap = function (mapElement, options) {
  return new google.maps.Map(mapElement, options);
};

nrvaug.views.Map.createGoogleGeocoder = function () {
  return new google.maps.Geocoder();
};

nrvaug.views.Map.createGoogleMapMarker = function (markerOptions) {
  return new google.maps.Marker(markerOptions);
};
