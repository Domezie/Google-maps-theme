function initMap(){
  const location = { lat: 7.334110, lng: -2.326510}; //Sunyani

  const map = new google.maps.Map(document.getElementById("map"),{
    center: location,
    zoom: 12,
    mapId: "YOUR_MAP_ID"
  });

  new google.maps.Marker({
    position: location,
    map: map,
    title: "My Locatiom"
  });
}
