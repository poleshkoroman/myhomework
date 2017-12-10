var div = document.getElementsByClassName("map")[0];
var coords = {lat: 50.0595854, lng: 14.3255411};
var settings = {
			zoom: 4,
			center: coords,
			mapTypeId: google.maps.MapTypeId.ROADMAP 
		}
var map = new google.maps.Map(div, settings);

var xhr = new XMLHttpRequest; 
xhr.open("GET","text.json", true);
xhr.onload = function(){
	var data = JSON.parse(this.responseText);
	var start = {lat: +data[0].lat, lng: +data[0].lng};
	data.forEach(function(item){
		var coords = {lat: +item.lat, lng: +item.lng}
		var flightPlanCoordinates = [
        	{lat: start.lat, lng: start.lng},
        	{lat: coords.lat, lng: coords.lng}
        ];
		var drawLine = new google.maps.Polyline({
			path: flightPlanCoordinates,
        	geodesic: true,
        	strokeColor: "blue",
        	strokeOpacity: 1.0,
        	strokeWeight: 2
        });
        drawLine.setMap(map);
		var marker = new google.maps.Marker({
			position: coords,
			map: map,
			title: item.title
		})
		marker.addListener("click", function(e){
			var infowindow = new google.maps.InfoWindow({
				content: item.content
			})
			infowindow.open(map, this);
			setTimeout(function(){
				infowindow.close();
			}, 3000);
		})
		start = coords;
	})
}
xhr.send();