(function () {
    var divMapa = document.getElementById('divMapa');
    var divCoordenadas = document.getElementById('divCoordenadas');
    var Prueba = 'hola';

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (objPosicion) {
            var iLongitud = objPosicion.coords.longitude, iLatitud = objPosicion.coords.latitude;
            divCoordenadas.innerHTML = 'Latitud: ' + iLatitud + '- Longitud: ' + iLongitud;
            var objCoordenadas = new google.maps.LatLng(iLatitud, iLongitud);

            var objOpciones = {
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                zoom: 13,
                mapTypeControl: true,
                center: objCoordenadas,
            };
            var objMapa = new google.maps.Map(divMapa, obj.objPosiciones);
            var objPunto = new google.maps.Marker({
                title: 'prueba 01',
                position: objCoordenadas,
                map: objMapa
            });
        }, function (objError) {
            switch (objError.code) {
                case objError.POSITION_UNAVAILABLE:
                    divMapa.innerHTML = 'La información de su posición no está disponible';
                    break;
                case objError.TIMEOUT:
                    divMapa.innerHTML = 'El tiempo de espera ha sido agotado, intentalo otra vez';
                    break;
                case objError.PERMISSION_DENIED:
                    divMapa.innerHTML = 'Por favor permita a la pagina acceder a su ubicación';
                    break;
                case objError.UNKNOWN_ERROR:
                    divMapa.innerHTML = 'Ha ocurrido un error desconocido por favor vuelva cargar la pagina';
                    break;
            }
        });
    } else {
        divCoordenadas.innerHTML = 'Su navegador no soporta Geolocalition API de HTML5';
    }
})();