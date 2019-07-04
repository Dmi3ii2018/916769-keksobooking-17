'use strict';

(function () {
  var mapPinsContainer = document.querySelector('.map__pins');
  var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

  window.sortNeighbors = [];

  // новый элемент
  window.getPin = function (neighbor) {
    var takeNumber = neighbor.length > 5 ? 5 : neighbor.length;
    mapPinsContainer.innerHTML = '';
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < takeNumber; i++) {
      var mapPin = pinTemplate.cloneNode(true);

      mapPin.style.left = neighbor[i].location.x + 'px';
      mapPin.style.top = neighbor[i].location.y + 'px';

      mapPin.querySelector('img').src = neighbor[i].author.avatar;
      mapPin.querySelector('img').alt = neighbor[i].offer.type;

      fragment.appendChild(mapPin);
    }
    mapPinsContainer.appendChild(window.mapPinMain);
    mapPinsContainer.appendChild(fragment);
  };

  window.onSuccess = function (neighbor) {
    window.sortNeighbors = neighbor;
    window.updatePins();
  };
})();
