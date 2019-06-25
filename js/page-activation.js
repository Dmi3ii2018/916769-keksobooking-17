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

  // добавим атрибут disabled для полей форм
  putAttribute(adFormInput, 'disabled', 'disabled');
  putAttribute(adFormSelector, 'disabled', 'disabled');
  putAttribute(adFormTextarea, 'disabled', 'disabled');
  putAttribute(mapFiltersSelector, 'disabled', 'disabled');
  putAttribute(mapFiltersInput, 'disabled', 'disabled');

  window.onPinActivate = function () {
    window.mapContainer.classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');
    deleteAttribute(adFormInput, 'disabled');
    deleteAttribute(adFormSelector, 'disabled');
    deleteAttribute(adFormTextarea, 'disabled');
    deleteAttribute(mapFiltersSelector, 'disabled');
    deleteAttribute(mapFiltersInput, 'disabled');
    addressInput.setAttribute('disabled', 'disabled');
    window.addPin();

    window.setAddressInputValue(window.mapPinMain.offsetLeft, window.mapPinMain.offsetTop);
    window.mapPinMain.removeEventListener('mouseup', window.onPinActivate);
  };
  window.mapPinMain.addEventListener('mouseup', window.onPinActivate); // правильно ли так добавлять?

})();
