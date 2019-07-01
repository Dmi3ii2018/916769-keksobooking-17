'use strict';

(function () {
  var NEIGHBORS_NUMBER = 8;

  var mapPinsContainer = document.querySelector('.map__pins');
  var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

  // новый элемент
  var getPin = function (neighbor) {
    var mapPin = pinTemplate.cloneNode(true);

    mapPin.style.left = neighbor.location.x + 'px';
    mapPin.style.top = neighbor.location.y + 'px';

    mapPin.querySelector('img').src = neighbor.author.avatar;
    mapPin.querySelector('img').alt = neighbor.offer.type;

    return mapPin;
  };

  window.onSuccess = function (neighbor) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < NEIGHBORS_NUMBER; i++) {
      fragment.appendChild(getPin(neighbor[i]));
    }
    mapPinsContainer.appendChild(fragment);
  };
})();
