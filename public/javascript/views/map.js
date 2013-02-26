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
  var marker, infoWindow;

  if (status === google.maps.GeocoderStatus.OK) {
    this.map_.setCenter(results[0].geometry.location);
    marker = nrvaug.views.Map.createGoogleMapMarker({
      map: this.map_,
      position: results[0].geometry.location,
      title:"TechPad"
    });
    infoWindow = nrvaug.views.Map.createGoogleInfoWindow(
      "<p>TechPad</p><p>Above PK's Restaurant:</p><p>432 North Main Street, Suite 200</p><p>Blacksburg, Virginia 24060</p>"
    );
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(this.map_, marker);
    }.bind(this));
    infoWindow.open(this.map_, marker);
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

nrvaug.views.Map.createGoogleInfoWindow = function (content) {
  return new google.maps.InfoWindow({ content: content });
};
