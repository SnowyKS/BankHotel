ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map('map', {
    center: [59.219, 39.893], 
    zoom: 12,
    controls: ['zoomControl', 'searchControl']
  }, {
    searchControlProvider: 'yandex#search'
  });


  ymaps.geocode('Вологда, ул. Мира, 82')
    .then(function (res) {
      var firstGeoObject = res.geoObjects.get(0);
      var coords = firstGeoObject.geometry.getCoordinates();


      var myPlacemark = new ymaps.Placemark(coords, {
        hintContent: 'Вологда, ул. Мира, 82',
        balloonContent: 'Здесь находится нужное место!'
      }, {
        preset: 'islands#redIcon'
      });

      myMap.geoObjects.add(myPlacemark);

      myMap.setCenter(coords, 16);
    }, function (err) {
      console.log('Ошибка геокодирования: ' + err.message);
    });
}