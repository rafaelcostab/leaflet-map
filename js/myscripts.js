window.onload = function loadMap(){
    var mymap = L.map('map').setView([-23.7205091,-46.6152615], 16.90);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(mymap);

    var LeafIcon = L.Icon.extend({
        options: {
            iconSize:     [32, 32],
            iconAnchor:   [5, 21],
            popupAnchor:  [-1, -19]
        }
    });	

    var childIcon = new LeafIcon({iconUrl: 'https://image.flaticon.com/icons/svg/2883/2883968.svg'}),
        littleGirlIcon = new LeafIcon({iconUrl: 'https://image.flaticon.com/icons/svg/2945/2945328.svg'}),
        oldManIcon = new LeafIcon({iconUrl: 'https://image.flaticon.com/icons/svg/2996/2996683.svg'});	
        
    L.icon = function (options) {
        return new L.Icon(options);
    };
        
    var marker = L.marker([-23.7205091,-46.6152615], {icon: childIcon}).addTo(mymap).bindPopup("I am a child.");
    var marker = L.marker([-23.721523, -46.619007], {icon: littleGirlIcon}).addTo(mymap).bindPopup("I am a litle girl.");
    var marker = L.marker([-23.722231, -46.615982], {icon: oldManIcon}).addTo(mymap).bindPopup("I am an old man.");
                
    var popup = L.popup();

    function onMapClick(e) {

        popup
            .setLatLng(e.latlng)
            .setContent("You're in - " + e.latlng.toString())
            .openOn(mymap);
    }

    mymap.on('click', onMapClick);
}