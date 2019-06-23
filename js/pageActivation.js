'use strict';

(function () {
  var mapContainer = document.querySelector('.map');
  var mapFilters = mapContainer.querySelector('.map__filters');
  var mapFiltersInput = mapFilters.querySelectorAll('input');
  var mapFiltersSelector = mapFilters.querySelectorAll('select');
  var adForm = document.querySelector('.ad-form');
  var adFormInput = adForm.querySelectorAll('input');
  var adFormSelector = adForm.querySelectorAll('select');
  var adFormTextarea = adForm.querySelectorAll('textarea');
  var addressInput = adForm.querySelector('#address');

  var mapPinMain = document.querySelector('.map__pin--main');

  var putAttribute = function (elementsList, attributeName, attributeValue) {
    for (var i = 0; i < elementsList.length; i++) {
      elementsList[i].setAttribute(attributeName, attributeValue);
    }
  };

  var deleteAttribute = function (elementsList, attributeName) {
    for (var i = 0; i < elementsList.length; i++) {
      elementsList[i].removeAttribute(attributeName);
    }
  };


  var setAddressInputValue = function (coordX, coordY) {
    addressInput.setAttribute('value', coordX + ', ' + coordY);
  };

  // добавим атрибут disabled для полей форм
  putAttribute(adFormInput, 'disabled', 'disabled');
  putAttribute(adFormSelector, 'disabled', 'disabled');
  putAttribute(adFormTextarea, 'disabled', 'disabled');
  putAttribute(mapFiltersSelector, 'disabled', 'disabled');
  putAttribute(mapFiltersInput, 'disabled', 'disabled');

  var onPinActivate = function () {
    mapContainer.classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');
    deleteAttribute(adFormInput, 'disabled');
    deleteAttribute(adFormSelector, 'disabled');
    deleteAttribute(adFormTextarea, 'disabled');
    deleteAttribute(mapFiltersSelector, 'disabled');
    deleteAttribute(mapFiltersInput, 'disabled');
    addressInput.setAttribute('disabled', 'disabled');
    window.addPin();

    setAddressInputValue(mapPinMain.offsetLeft, mapPinMain.offsetTop);
    mapPinMain.removeEventListener('mouseup', onPinActivate);
  };

  mapPinMain.addEventListener('mouseup', onPinActivate); // правильно ли так добавлять?

  mapPinMain.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      evt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      var diffCoord = {
        x: mapPinMain.offsetLeft - shift.x,
        y: mapPinMain.offsetTop - shift.y
      };

      mapPinMain.style.top = diffCoord.y + 'px';
      mapPinMain.style.left = diffCoord.x + 'px';

      // как лучше ограничить перемещение пина?
      if (mapPinMain.offsetTop < 130) {
        document.removeEventListener('mousemove', onMouseMove);
        mapPinMain.style.top = 130 + 'px';
      } else if (mapPinMain.offsetTop > 630) {
        document.removeEventListener('mousemove', onMouseMove);
        mapPinMain.style.top = 630 + 'px';
      }

      setAddressInputValue(diffCoord.x, diffCoord.y);
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

  });
})();
