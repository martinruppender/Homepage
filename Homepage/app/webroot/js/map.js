var rendererOptions = {
	draggable : true
};
var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
var directionsService = new google.maps.DirectionsService();
var geocoder = new google.maps.Geocoder();
var center = new google.maps.LatLng(47.6667, 9.18333);
var map;

function initialize() {
	
	var mapOptions = {
		zoom : 8,
		mapTypeId : google.maps.MapTypeId.ROADMAP,
		center : center
	};

	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	directionsDisplay.setMap(map);
	directionsDisplay.setPanel(document.getElementById('directions-panel'));

	var control = document.getElementById('control');
	control.style.display = 'block';
	map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);
	
	google.maps.event.addListener(directionsDisplay, 'directions_changed', function() {
		computeTotalDistance(directionsDisplay.directions);
	});
	
	calcRoute();

}

function calcRoute() {
	var selectedMode = document.getElementById('mode').value;
	var start = document.getElementById('start').value;
	var end = document.getElementById('end').value;
	var waypts = [];
	
	var checkboxArray = document.getElementById('waypoints');
	  for (var i = 0; i < checkboxArray.length; i++) {
	    if (checkboxArray.options[i].selected == true) {
	      waypts.push({
	          location:checkboxArray[i].value,
	          stopover:true});
	    }
	  }
	
	var request = {
		origin : start,
		destination : end,
		waypoints: waypts,
		optimizeWaypoints: true,
		travelMode: google.maps.TravelMode[selectedMode]
	};
	
	directionsService.route(request, function(response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(response);
			 var route = response.routes[0];
		      var summaryPanel = document.getElementById('directions_panel');
		      summaryPanel.innerHTML = '';
		      // For each route, display summary information.
		      for (var i = 0; i < route.legs.length; i++) {
		    	  var routeSegment = i + 1;
		    	  summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment + '</b><br>';
		    	  summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
		    	  summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
		    	  summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
		      }
			}
	});
}

function codeAddress() {
	var address = document.getElementById('address').value;
	geocoder.geocode({
		'address' : address
	}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker({
				map : map,
				position : results[0].geometry.location
			});
		} else {
			alert('Geocode was not successful for the following reason: '
					+ status);
		}
	});
}

function computeTotalDistance(result) {
	  var total = 0;
	  var myroute = result.routes[0];
	  for (var i = 0; i < myroute.legs.length; i++) {
	    total += myroute.legs[i].distance.value;
	  }
	  total = total / 1000.
	  document.getElementById('total').innerHTML = total + ' km';
	}

google.maps.event.addDomListener(window, 'load', initialize);
