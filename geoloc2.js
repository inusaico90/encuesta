var divUbicacion = document.getElementById("ubicacion");
function myUbicacion() {
    navigator.geolocation.getCurrentPosition(showPosition);
}
function showPosition(position) {
    divUbicacion.innerHTML = "Latitud: " + position.coords.latitude +
        "<br>Longitud: " + position.coords.longitude;
}