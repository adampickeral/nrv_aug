var main = 
  '<div class="blurbs">' +
  '<div class="blurb">' +
      '<h2>Our Mission</h2>' +
      '<p class="blurb-content">Encourage better software development through agile practices</p>' +
    '</div>' +
    '<div class="blurb">' +
      '<h2>Principles</h2>' +
      '<ul class="blurb-content">' +
        '<li class="icon-right-dir"><b>Discussions are open to all things agile</b></li>' +
        '<li class="icon-right-dir"><b>Allow the group to determine discussion topics</b></li>' +
        '<li class="icon-right-dir"><b>Include people from all aspects of software development</b></li>' +
        '<li class="icon-right-dir"><b>Meet on a monthly basis</b></li>' +
      '</ul>' +
    '</div>' +
  '</div>' +
  '</div>';

  var mainTempl = Mustache.compile(main);
