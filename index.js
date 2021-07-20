// Initialize and add the map
function initMap() {
  if (navigator.geolocation)
  {
      navigator.geolocation.getCurrentPosition(showPos)
  }
  else {
  alert("the user avoided get location")}
  function showPos(position){ 
    latt = position.coords.latitude; 
    long = position.coords.longitude; 
    var lattlong = new google.maps.LatLng(latt, long); 
    console.log(latt);
    console.log(long);
  }
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}