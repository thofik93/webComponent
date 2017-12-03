var Map = (function(){
	'use strict'
	
	/*
		Public property 
	 */
	var lat = -25.363, 
			lng = 131.044, 
			zoom = 8, 
			styles = [], 
			el
	/*
		end public property 
	 */

	function config(element, settings) {
		
		if (typeof element === 'undefined') throw new Error('Element required')

		el = element
		
		if(!!settings) {
			lat = settings.lat
			lng = settings.lng
			styles = settings.styles
			zoom = settings.zoom
		}

	}
	
	function initMap() {
	  var position = {lat: lat, lng: lng}
	 	var map = new google.maps.Map(el, {
      zoom: zoom,
      center: position,
      styles: styles
	  });

	 var marker = new google.maps.Marker({
	    position: position,
	    map: map
	  });

	 	return {
	 		map: map,
	 		marker: marker,
	 		zoom: zoom,
	 		lat: lat,
	 		lng: lng
	 	}
	}

	return {
		config: function(el, settings) {
			return config(el, settings)
		},
		initMap: function() {
			return initMap()
		}
	}
})();