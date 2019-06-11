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

var neighbors = [];

// случайный тип квартиры
var getApartmentTypes = function (min, max) {
  return apartmentTypes[Math.floor(Math.random() * (max - min) + min)];
};

// случайные координаты для пина
var getPinCoordinate = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

// создать данные для профилей соседей
var createNeighborPin = function (x) {
  neighbors[x] = [
    {
      author: {
        avatar: 'img/avatars/user0' + (x + 1) + '.png'
      },

      offer: {
        type: getApartmentTypes(MIN_RANGE, MAX_RANGE)
      },

      location: {
        x: getPinCoordinate(PIN_MIN_RANGE, PIN_X_MAX_RANGE),
        y: getPinCoordinate(PIN_MIN_RANGE, PIN_Y_MAX_RANGE)
      }
    }
  ];
};

// генерация похожих объявлений
var makeRandomNeighbors = function () {
  for (var i = 0; i < NEIGHBORS_NUMBER; i++) {
    createNeighborPin(i);
  }
};

// собрать массив соседей
makeRandomNeighbors();

// Временно у блока .map уберем класс .map--faded
document.querySelector('.map').classList.remove('map--faded');

// новый элемент
var getPin = function (neighbor) {
  var mapPin = pinTemplate.cloneNode(true);

  mapPin.style.left = neighbor[0].location.x + 'px';
  mapPin.style.top = neighbor[0].location.y + 'px';

  mapPin.querySelector('img').src = neighbor[0].author.avatar;
  mapPin.querySelector('img').alt = neighbor[0].offer.type;

  return mapPin;
};

// добавление элемента на страницу
var addPin = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < NEIGHBORS_NUMBER; i++) {
    fragment.appendChild(getPin(neighbors[i]));
  }
  mapPinsContainer.appendChild(fragment);
};

addPin();
