var rendererOptions = {
	draggable : true
};
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var geocoder;
var map;

function initialize() {
	geocoder = new google.maps.Geocoder();
	directionsDisplay = new google.maps.DirectionsRenderer();
	var mapOptions = {
		zoom : 8,
		mapTypeId : google.maps.MapTypeId.ROADMAP,
		center : new google.maps.LatLng(47.6667, 9.18333)
	};

	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	directionsDisplay.setMap(map);
	directionsDisplay.setPanel(document.getElementById('directions-panel'));

	var control = document.getElementById('control');
	control.style.display = 'block';
	map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

}

function calcRoute() {
	var start = document.getElementById('start').value;
	var end = document.getElementById('end').value;
	var request = {
		origin : start,
		destination : end,
		travelMode : google.maps.TravelMode.DRIVING
	};
	directionsService.route(request, function(response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(response);
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

google.maps.event.addDomListener(window, 'load', initialize);
