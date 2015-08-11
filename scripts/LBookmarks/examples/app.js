var L = global.L || require('leaflet');
require('../index');
require('../bower_components/Leaflet.contextmenu/dist/leaflet.contextmenu.js');

L.Icon.Default.imagePath = "http://cdn.leafletjs.com/leaflet-0.7/images";

var map = global.map = new L.Map('map', {
  contextmenu: true,
  contextmenuItems: [{
    text: 'Bookmark this position',
    callback: function(evt) {
      this.fire('bookmark:new', {
        latlng: evt.latlng
      });
    }
  }]
}).setView([22.2670, 114.188], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; ' +
    '<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// var bookmarksControl = global.bookmarksControlRight = new L.Control.Bookmarks({
//   position: 'topright'
// });
// map.addControl(bookmarksControl);

bookmarksControl = global.bookmarksControlLeft = new L.Control.Bookmarks({
  position: 'topleft'
});
map.addControl(bookmarksControl);
