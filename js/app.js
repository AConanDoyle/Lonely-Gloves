// initialize our map
var access_token = 'access_token=pk.eyJ1IjoiYW5kcm9pZHBpdGkiLCJhIjoiY2lvd3VwamhmMDA4MHZ0a2p0OGJnYnRhNSJ9.fITbznDvS6FhARaYxrW_Pw#10';
var map = L.map('map', {
    'center': [52.5200066, 13.404954],
    'zoom': 12,
    'layers': [
        L.tileLayer('https://api.mapbox.com/styles/v1/androidpiti/ck2j9fns70ul51cpn8rqnmqb1/tiles/256/{z}/{x}/{y}?' + access_token, {
            'attribution': '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        })
    ]
});

// custom icon
var gloveIcon = L.icon({
    iconSize: [28, 45],
    iconAnchor: [12, 41],
    popupAnchor: [-6, -41],
    iconUrl: 'https://magnesia-berlin.de/extra/lonely-gloves/icon/marker-violet.png',
    shadowUrl: 'https://magnesia-berlin.de/extra/lonely-gloves/icon/marker-shadow.png'
});

// set pop up windows
function onEachFeature(feature, layer) {
    layer.bindPopup("<img alt='image glove' text-align='justify' width='100px' src='" +
        layer.feature.properties.imageurl + "'/> <br>" + layer.feature.properties.name + "<br>" + layer.feature.properties.description, { 'className': 'custom' });
}

// add data to map
var layerGloves = new L.geoJson(gloves, {
    pointToLayer: function(feature, latlng) {
        return L.marker(latlng, {
            icon: gloveIcon
        });
    },
    onEachFeature: onEachFeature
}).addTo(map);
map.fitBounds(layerGloves.getBounds());