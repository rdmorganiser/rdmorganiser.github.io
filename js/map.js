$(document).ready(function() {
    var map = L.map('map');
    map.setView([51.165, 10.455278], 5);

    L.tileLayer('https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        'attribution': 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> | Contributors <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a> | Tiles © <a href="http://cartodb.com/attributions">CartoDB</a>',
        'minZoom': 0,
        'maxZoom': 10
    }).addTo(map);

    var source   = document.getElementById('marker-template').innerHTML;
    var template = Handlebars.compile(source);

    $.each(_locations, function (key, location) {
        var html = template(location);
        var marker = L.marker([location.lon, location.lat]).addTo(map);
        marker.bindPopup(html);
    });
});
