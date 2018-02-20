$(document).ready(function() {
    var map = L.map('map');
    map.setView([51.165, 10.455278], 6);

    L.tileLayer('https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        'attribution': 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> | Contributors <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a> | Tiles © <a href="http://cartodb.com/attributions">CartoDB</a>',
        'minZoom': 0,
        'maxZoom': 10
    }).addTo(map);

    var popup_source   = document.getElementById('popup-template').innerHTML;
    var popup_template = Handlebars.compile(popup_source);

    var legend_source   = document.getElementById('legend-template').innerHTML;
    var legend_template = Handlebars.compile(legend_source);

    var icons = {
        'green': new L.Icon({
           iconUrl: '/img/icons/marker-icon-green.png',
           shadowUrl: '/img/icons/marker-shadow.png',
           iconSize: [25, 41],
           iconAnchor: [12, 41],
           popupAnchor: [1, -34],
           shadowSize: [41, 41]
        }),
        'blue': new L.Icon({
           iconUrl: '/img/icons/marker-icon-blue.png',
           shadowUrl: '/img/icons/marker-shadow.png',
           iconSize: [25, 41],
           iconAnchor: [12, 41],
           popupAnchor: [1, -34],
           shadowSize: [41, 41]
        }),
        'gray': new L.Icon({
           iconUrl: '/img/icons/marker-icon-grey.png',
           shadowUrl: '/img/icons/marker-shadow.png',
           iconSize: [25, 41],
           iconAnchor: [12, 41],
           popupAnchor: [1, -34],
           shadowSize: [41, 41]
        })
    }

    var legend = L.control({position: 'bottomright'});
    legend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'info legend leaflet-bar');
        div.innerHTML = legend_template();

        return div;
    };
    legend.addTo(map);

    $.each(_locations, function (key, location) {
        if (typeof(location.lon) != 'undefined' && typeof(location.lat) != 'undefined') {
            if (location.color !== 'undefined') {
                var icon = icons[location.color];
            } else {
                var icon = icons['gray'];
            }

            var marker = L.marker([location.lon, location.lat], {icon: icon}).addTo(map);
            marker.bindPopup(popup_template(location));
        }
    });
});
