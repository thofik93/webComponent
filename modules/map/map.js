var qdh = (function(qdh){
	'use strict'
	 
  var Map = qdh.map = qdh.map || {}
	/*
		Default property 
	 */
	var marker,
      map,
			el,
      position = { lat: -25.363, lng: 131.044 };
	/*
		End Default property 
	 */

	Map.init = function (element, settings) {

    if (typeof element === 'undefined') throw new Error('Element required')
    
    el = element
    
    if(!!settings) {

      var DEFAULTS = {
        center: position,
        zoom: 8
      }

      var options = Object.assign(DEFAULTS, settings || {})

    } 
    else {
      throw new Error('You must defined settings as second argument')
    }

	 	map = new google.maps.Map(el, options)

	 	return {
	 		map: map,
	 		zoom: map.getZoom(),
      setMarker: function(settings) {
        
        var DEFAULTS = {
          map: map,
          position: position
        }

        var options = Object.assign(DEFAULTS, settings || {})

        marker = new google.maps.Marker(options)

        return marker;
      }
	 	}
	}

	return qdh
})(qdh || {});