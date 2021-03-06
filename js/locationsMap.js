var geocoder;
var map;

function initialize() {
  geocoder = new google.maps.Geocoder();

  var myOptions = {
    zoom: 6,
    center: new google.maps.LatLng(52.2267499,20.9996293),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
	scrollwheel: false,
	
	disableDefaultUI: true,
	panControl: false,
	zoomControl: true,
	mapTypeControl: false,
	scaleControl: false,
	streetViewControl: false,
	overviewMapControl: false


  };




    map = new google.maps.Map(
      document.getElementById("locations-map"),
        myOptions);

  
  	var customStyle = [ { featureType: "landscape.natural", stylers: [ { visibility: "off" } ] },{ featureType: "road.arterial", stylers: [ { visibility: "off" } ] },{ featureType: "road.highway", stylers: [ { visibility: "simplified" }, { hue: "#ff002b" }, { saturation: -28 } ] },{ } ];
	//map.setOptions({styles: customStyle});
  	
    var marker1 = new google.maps.Marker({
        position: new google.maps.LatLng(52.2267499,20.9996293),
        map: map,
        title:"Warszawa - Sages"
    });
    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(51.102976,17.0391063),
        map: map,
        title:"Wrocław - Workband"
    });
	var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(50.0773869,19.8947266),
        map: map,
        title:"Kraków - Creative Coworking"
    });
	var marker4 = new google.maps.Marker({
        position: new google.maps.LatLng(51.7823491,19.4528603),
        map: map,
        title:"Łódź - COWorKING Kościelna 6"
    });
	var marker5 = new google.maps.Marker({
        position: new google.maps.LatLng(54.3699114,18.6300791),
        map: map,
        title:"Gdańsk"
    });
    	var marker6 = new google.maps.Marker({
        position: new google.maps.LatLng(52.4331275,16.7608965),
        map: map,
        title:"Poznań"
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
