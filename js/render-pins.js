'use strict';

(function () {
  var SHOW_NEIGHBORS_NUMBER = 5;
  var mapPinsContainer = document.querySelector('.map__pins');
  var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

  window.sortNeighbors = [];

  var renderPin = function (neighbor) {
    var mapPin = pinTemplate.cloneNode(true);
    var mapPinImage = mapPin.querySelector('img');

    mapPin.style.left = neighbor.location.x + 'px';
    mapPin.style.top = neighbor.location.y + 'px';

    mapPinImage.src = neighbor.author.avatar;
    mapPinImage.alt = neighbor.offer.type;

    return mapPin;
  };

  // новый элемент
  window.getPin = function (data) {
    mapPinsContainer.innerHTML = '';
    var fragment = document.createDocumentFragment();

    data.slice(0, SHOW_NEIGHBORS_NUMBER).map(function (it) {
      return new window.Neighbor(it);
    }).forEach(function (neighbor) {
      fragment.appendChild(renderPin(neighbor));
    });

    mapPinsContainer.appendChild(window.mapPinMain);
    mapPinsContainer.appendChild(fragment);

    return fragment;
  };

  window.onSuccess = function (neighbor) {
    window.sortNeighbors = neighbor;
    window.updatePins();
  };
})();
