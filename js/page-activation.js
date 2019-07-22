'use strict';

(function () {
  var mapContainer = document.querySelector('.map');
  window.mapContainer = mapContainer;
  var mapFilters = mapContainer.querySelector('.map__filters');
  var mapFiltersInput = mapFilters.querySelectorAll('input');
  var mapFiltersSelector = mapFilters.querySelectorAll('select');
  var adForm = document.querySelector('.ad-form');
  var adFormInput = adForm.querySelectorAll('input');
  var adFormSelector = adForm.querySelectorAll('select');
  var adFormTextarea = adForm.querySelectorAll('textarea');
  var addressInput = document.getElementById('address');
  window.adForm = adForm;
  window.adFormInput = adFormInput;
  window.adFormSelector = adFormSelector;

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

  window.setAddressInputValue = function (coordX, coordY) {
    var addressX = Math.floor(coordX + (window.mapPinWidth / 2));
    var addressY = Math.floor(coordY + window.mapPinHeight);
    addressInput.setAttribute('value', addressX + ', ' + addressY);
  };

  var deactPage = function () {
    putAttribute(adFormInput, 'disabled', 'disabled');
    putAttribute(adFormSelector, 'disabled', 'disabled');
    putAttribute(adFormTextarea, 'disabled', 'disabled');
    putAttribute(mapFiltersSelector, 'disabled', 'disabled');
    putAttribute(mapFiltersInput, 'disabled', 'disabled');
  };

  deactPage();

  var onPinActivate = function () {
    mapContainer.classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');
    deleteAttribute(adFormInput, 'disabled');
    addressInput.setAttribute('readonly', 'readonly');
    deleteAttribute(adFormSelector, 'disabled');
    deleteAttribute(adFormTextarea, 'disabled');
    deleteAttribute(mapFiltersSelector, 'disabled');
    deleteAttribute(mapFiltersInput, 'disabled');

    window.onLoad(window.onSuccess, window.onError);

    window.setAddressInputValue(window.mapPinRestriction.pinStartCoordX, window.mapPinRestriction.pinStartCoordY);

    window.mapPinMain.removeEventListener('mouseup', onPinActivate);

  };

  window.mapPinMain.addEventListener('mouseup', onPinActivate);

})();
