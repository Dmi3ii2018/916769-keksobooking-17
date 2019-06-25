'use strict';

(function () {
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
  window.addPin = function () {
    var neighbors = createNeighborPin();
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < NEIGHBORS_NUMBER; i++) {
      fragment.appendChild(getPin(neighbors[i]));
    }
    mapPinsContainer.appendChild(fragment);
  };
})();
