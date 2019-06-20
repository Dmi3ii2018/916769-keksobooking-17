'use strict';
var apartmentTypes = ['palace', 'flat', 'house', 'bungalo'];

var MIN_RANGE = 0;
var MAX_RANGE = apartmentTypes.length;
var PIN_MIN_RANGE = 130;
var PIN_X_MAX_RANGE = 1140;
var PIN_Y_MAX_RANGE = 630;
var NEIGHBORS_NUMBER = 8;

// блок для вставки пинов
var mapPinsContainer = document.querySelector('.map__pins');
// шаблон пина
var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

// генератор случайных чисел
var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

// создать данные для профилей соседей
var createNeighborPin = function () {
  var neighborsList = [];
  for (var i = 0; i < NEIGHBORS_NUMBER; i++) {
    neighborsList[i] = {
      author: {
        avatar: 'img/avatars/user0' + (i + 1) + '.png'
      },

      offer: {
        type: getRandomNumber(MIN_RANGE, MAX_RANGE)
      },

      location: {
        x: getRandomNumber(PIN_MIN_RANGE, PIN_X_MAX_RANGE),
        y: getRandomNumber(PIN_MIN_RANGE, PIN_Y_MAX_RANGE)
      }
    };
  }
  return neighborsList;
};

// новый элемент
var getPin = function (neighbor) {
  var mapPin = pinTemplate.cloneNode(true);

  mapPin.style.left = neighbor.location.x + 'px';
  mapPin.style.top = neighbor.location.y + 'px';

  mapPin.querySelector('img').src = neighbor.author.avatar;
  mapPin.querySelector('img').alt = neighbor.offer.type;

  return mapPin;
};

// добавление элемента на страницу
var addPin = function () {
  var neighbors = createNeighborPin();
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < NEIGHBORS_NUMBER; i++) {
    fragment.appendChild(getPin(neighbors[i]));
  }
  mapPinsContainer.appendChild(fragment);
};

// =================================
// добавление обработчиков события

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

// добавим атрибут disabled для полей форм
putAttribute(adFormInput, 'disabled', 'disabled');
putAttribute(adFormSelector, 'disabled', 'disabled');
putAttribute(adFormTextarea, 'disabled', 'disabled');
putAttribute(mapFiltersSelector, 'disabled', 'disabled');
putAttribute(mapFiltersInput, 'disabled', 'disabled');

mapPinMain.addEventListener('click', function () {
  mapContainer.classList.remove('map--faded');
  adForm.classList.remove('ad-form--disabled');
  deleteAttribute(adFormInput, 'disabled');
  deleteAttribute(adFormSelector, 'disabled');
  deleteAttribute(adFormTextarea, 'disabled');
  deleteAttribute(mapFiltersSelector, 'disabled');
  deleteAttribute(mapFiltersInput, 'disabled');
  addressInput.setAttribute('value', 'x:' + mapPinMain.offsetLeft + ', ' + 'y:' + mapPinMain.offsetTop);
  addPin();
});
