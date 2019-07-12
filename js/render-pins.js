'use strict';

(function () {
  var SHOW_NEIGHBORS_NUMBER = 5;
  var mapPinsContainer = document.querySelector('.map__pins');
  var allPins = mapPinsContainer.children;
  var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

  window.sortNeighbors = [];

  var renderPin = function (neighbor) {
    var mapPin = pinTemplate.cloneNode(true);
    var mapPinImage = mapPin.querySelector('img');

    mapPin.style.left = neighbor.location.x + 'px';
    mapPin.style.top = neighbor.location.y + 'px';

    mapPinImage.src = neighbor.author.avatar;
    mapPinImage.alt = neighbor.offer.type;

    mapPin.addEventListener('click', function (evt) {
      evt.preventDefault();
      var advertItems = window.mapContainer.querySelector('.map__card');

      if (advertItems !== null) {
        window.mapContainer.removeChild(advertItems);
      }

      window.checkPinActiveClass();
      mapPin.classList.add('map__pin--active');
      window.createAdvertPopup(neighbor);

    });

    return mapPin;
  };

  // новый элемент
  window.getPin = function (data) {
    mapPinsContainer.innerHTML = '';
    var fragment = document.createDocumentFragment();
    var dataArray = data.slice(0, SHOW_NEIGHBORS_NUMBER).map(function (it) {
      return new window.Neighbor(it);
    });
    dataArray.forEach(function (neighbor) {
      fragment.appendChild(renderPin(neighbor));
    });

    mapPinsContainer.appendChild(window.mapPinMain);
    mapPinsContainer.appendChild(fragment);

    allPins = Array.prototype.slice.call(allPins);// данный массив меток будет использоваться для поиска класса 'map__pin--active';

    window.allPins = allPins;
    window.dataArray = dataArray;
  };

  window.onSuccess = function (neighbor) {
    window.sortNeighbors = neighbor;
    window.updatePins();
    //window.createAdvertPopup(window.sortNeighbors);
  };
})();
