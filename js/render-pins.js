'use strict';

(function () {
  var SHOW_NEIGHBORS_NUMBER = 5;

  var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
  var mapPinsContainer = document.querySelector('.map__pins');
  window.mapPinsContainer = mapPinsContainer;

  window.sortNeighbors = [];

  window.checkItemPresent = function (item) {
    if (item !== null && item !== undefined) {
      window.mapContainer.removeChild(item);
    }
  };

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

      window.checkItemPresent(advertItems);

      window.checkPinActiveClass();
      mapPin.classList.add('map__pin--active');
      window.createAdvertPopup(neighbor);

      advertItems = window.mapContainer.querySelector('.map__card');
      var closeButton = advertItems.querySelector('.popup__close');

      advertItems.style = 'display: block';

      window.closeButton = closeButton;
      window.advertItems = advertItems;

      window.closePopup();
    });

    return mapPin;
  };

  window.getPin = function (data) {
    var fragment = document.createDocumentFragment();
    var allPins = mapPinsContainer.children;

    mapPinsContainer.innerHTML = '';

    var dataArray = data.slice(0, SHOW_NEIGHBORS_NUMBER).map(function (it) {
      return new window.Neighbor(it);
    });
    dataArray.forEach(function (neighbor) {
      fragment.appendChild(renderPin(neighbor));
    });

    mapPinsContainer.appendChild(window.mapPinMain);
    mapPinsContainer.appendChild(fragment);


    allPins = Array.prototype.slice.call(allPins);// данный массив с пинами будет использоваться для поиска класса 'map__pin--active';
    window.allPins = allPins;
  };

  window.onSuccess = function (neighbor) {
    window.sortNeighbors = neighbor;
    window.updatePins();
    console.log(neighbor);
    window.filteredPins = window.sortNeighbors.slice(); // массив будет использоваться для фильтра
  };
})();
