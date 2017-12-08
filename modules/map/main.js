var arrPosition = [
  {lat: -6.175110, lng: 106.865039},
  {lat: -6.175326, lng: 106.866406},
  {lat: -6.174497, lng: 106.856203}
]

window.onload = function() {

  var googMap = qdh.map.init(document.getElementById('map'), {
    center: arrPosition[0],
    zoom: 14,
    scrollwheel: false,
    styles: [
      {
          "featureType": "administrative",
          "elementType": "all",
          "stylers": [
              {
                  "hue": "#0060ff"
              },
              {
                  "lightness": -100
              },
              {
                  "visibility": "off"
              },
              {
                  "saturation": "-77"
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#848ea4"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
              {
                  "hue": "#0060ff"
              },
              {
                  "saturation": "-70"
              },
              {
                  "lightness": "0"
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "hue": "#0050ff"
              },
              {
                  "saturation": "0"
              },
              {
                  "lightness": "0"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "labels",
          "stylers": [
              {
                  "hue": "#0060ff"
              },
              {
                  "saturation": "-80"
              },
              {
                  "lightness": "-90"
              },
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "landscape.natural.landcover",
          "elementType": "geometry",
          "stylers": [
              {
                  "saturation": "0"
              },
              {
                  "lightness": "0"
              },
              {
                  "weight": "1.00"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
              {
                  "hue": "#0060ff"
              },
              {
                  "saturation": "-80"
              },
              {
                  "lightness": "-70"
              },
              {
                  "visibility": "off"
              },
              {
                  "gamma": "1"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
              {
                  "hue": "#0060ff"
              },
              {
                  "saturation": "-85"
              },
              {
                  "lightness": "60"
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [
              {
                  "hue": "#0060ff"
              },
              {
                  "saturation": "-70"
              },
              {
                  "lightness": "50"
              },
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "all",
          "stylers": [
              {
                  "hue": "#0060ff"
              },
              {
                  "saturation": "0"
              },
              {
                  "lightness": "-11"
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "simplified"
              },
              {
                  "hue": "#0060ff"
              },
              {
                  "lightness": "0"
              },
              {
                  "saturation": "0"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "labels",
          "stylers": [
              {
                  "hue": "#0060ff"
              },
              {
                  "lightness": -100
              },
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
              {
                  "hue": "#0066ff"
              },
              {
                  "saturation": "0"
              },
              {
                  "lightness": "90"
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "labels",
          "stylers": [
              {
                  "hue": "#000000"
              },
              {
                  "saturation": -100
              },
              {
                  "lightness": -100
              },
              {
                  "visibility": "off"
              }
          ]
      }
    ]
  })

  var map = googMap.map
  var zoom = googMap.zoom
  var image = 'https://cdn0.iconfinder.com/data/icons/elasto-online-store/26/00-ELASTOFONT-STORE-READY_map-maker-48.png';

  var marker = googMap.setMarker({
    position: arrPosition[0],
    icon: image,
    draggable:true
  })

  marker.addListener('click', function(e){
    alert('marker click, zoom: ' + zoom + 'marker2:' + googMap2.zoom)
  })

  document.getElementById('ZoomIn').addEventListener('click', function(){
    map.setZoom(++zoom)
  })

  document.getElementById('ZoomOut').addEventListener('click', function(){
    map.setZoom(--zoom)
  })

  var googMap2 = qdh.map.init(document.getElementById('map2'), {
    zoom: 14,
    center: arrPosition[2]
  })

  var marker2 = googMap2.setMarker({
    position: arrPosition[2]
  })
}