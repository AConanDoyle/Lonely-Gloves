// initialize our map
var map = L.map('map', {
    center:[52.5200066, 13.404954],
    zoom:12
});

//add openstreet baselayer to the map 
var MapBox = L.tileLayer("https://api.mapbox.com/styles/v1/androidpiti/ck2j9fns70ul51cpn8rqnmqb1.html?fresh=true&title=true&access_token=pk.eyJ1IjoiYW5kcm9pZHBpdGkiLCJhIjoiY2lvd3VwamhmMDA4MHZ0a2p0OGJnYnRhNSJ9.fITbznDvS6FhARaYxrW_Pw#10.0/42.362400/-71.020000/0", {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// define a blank geoJSON Layer
var gloves = L.geoJSON(null);

//get the geojson data with ajax, and add it to the blank layer we created
$.getJSON('data/gloves.geojson',function(data){
	gloves.addData(data);
	map.fitBounds(gloves.getBounds());
});

// finally add the layer to the map
gloves.addTo(map);