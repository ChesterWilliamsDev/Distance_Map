// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Add a radius layer
var circleCenter = [36.1684, -86.8259];
var circleOptions = {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0
}
var circle = L.circle(circleCenter, 403422, circleOptions);
circle.addTo(myMap);

// City markers
var cities = [{
  location: [38.627003, -90.199402],
  name: "Kipp High School",
  distance: "252.155",
},
{
  location: [38.662730, -90.221650],
  name: "Beaumont High School Central",
  distance: "253.76",
},
{
  location: [38.604519, -90.271141],
  name: "Visual/Perf. Arts High School",
  distance: "253.07",
},
{
  location: [38.621720, -90.269410],
  name: "Gateway High School",
  distance: "253.77",
},
{
  location: [38.640881, -90.243057],
  name: "Metro High School",
  distance: "253.61",
},
{
  location: [38.732050, -90.303800],
  name: "MSB High School",
  distance: "260.29",
},
{
  location: [38.6000799, -90.2369533],
  name: "Roosevelt High School",
  distance: "251.52",
},
{
  location: [38.6597913, -90.2386078],
  name: "Sumner High School",
  distance: "254.30",
},
{
  location: [38.6478312, -90.2208496],
  name: "Vashon High School",
  distance: "253.04",
},
{
  location: [36.1684, -86.8259],
  name: "Tenessee State University",
  distance: "0",
},
];
// Add code to create a marker for each city below and add it to the map

// newyork;
// chicago;
// houston;
// la;
// omaha;
cities.forEach(city =>   L.marker(city.location)
.bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Distance to TSU " + city.distance + " miles </h3>")
.addTo(myMap));

// var kippIcon = helper.getIcon(
//   {icon: 'leaf',
// markerColor: 'red'}
// );

// L.marker(["38.627003", "-90.199402"], {icon: kippIcon})
// .bindPopup("<h1>" + "Kipp" + "</h1> <hr> <h3>Distance to TSU " + "252.155" + " miles </h3>")
// .addTo(myMap)

