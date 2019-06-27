'use strict';

(function () {
  window.mapContainer = document.querySelector('.map');
  var mapFilters = window.mapContainer.querySelector('.map__filters');
  var mapFiltersInput = mapFilters.querySelectorAll('input');
  var mapFiltersSelector = mapFilters.querySelectorAll('select');
  var adForm = document.querySelector('.ad-form');
  var adFormInput = adForm.querySelectorAll('input');
  var adFormSelector = adForm.querySelectorAll('select');
  var adFormTextarea = adForm.querySelectorAll('textarea');
  var addressInput = adForm.querySelector('#address');

  window.mapPinMain = document.querySelector('.map__pin--main');

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
    var addressX = Math.floor(coordX + (window.mapPinWidth / 2));
    var addressY = Math.floor(coordY + window.mapPinHeight);
    addressInput.setAttribute('value', addressX + ', ' + addressY);
  };

  // добавим атрибут disabled для полей форм
  putAttribute(adFormInput, 'disabled', 'disabled');
  putAttribute(adFormSelector, 'disabled', 'disabled');
  putAttribute(adFormTextarea, 'disabled', 'disabled');
  putAttribute(mapFiltersSelector, 'disabled', 'disabled');
  putAttribute(mapFiltersInput, 'disabled', 'disabled');

  var onPinActivate = function () {
    window.mapContainer.classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');
    deleteAttribute(adFormInput, 'disabled');
    deleteAttribute(adFormSelector, 'disabled');
    deleteAttribute(adFormTextarea, 'disabled');
    deleteAttribute(mapFiltersSelector, 'disabled');
    deleteAttribute(mapFiltersInput, 'disabled');
    addressInput.setAttribute('disabled', 'disabled');
    window.addPin();

    setAddressInputValue(window.mapPinMain.offsetLeft, window.mapPinMain.offsetTop);
    window.mapPinMain.removeEventListener('mouseup', onPinActivate);
  };

  window.mapPinMain.addEventListener('mouseup', onPinActivate); // правильно ли так добавлять?

  window.mapPinMain.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    window.onMouseMove = function (moveEvt) {
      evt.preventDefault();

      window.mapPinRestriction.setRestrictionY(window.mapPinMain.offsetTop);
      window.mapPinRestriction.setRestrictionX(window.mapPinMain.offsetLeft);

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      var diffCoord = {
        x: window.mapPinMain.offsetLeft - shift.x,
        y: window.mapPinMain.offsetTop - shift.y
      };

      window.mapPinMain.style.top = diffCoord.y + 'px';
      window.mapPinMain.style.left = diffCoord.x + 'px';

      setAddressInputValue(diffCoord.x, diffCoord.y);
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', window.onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', window.onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

  });
})();


