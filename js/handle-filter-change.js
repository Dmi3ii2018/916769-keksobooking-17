'use strict';

(function () {
  var mapFilter = document.querySelector('.map__filters');
  var typeFilter = mapFilter.querySelector('#housing-type');
  var roomsFilter = mapFilter.querySelector('#housing-rooms');
  var guestsFilter = mapFilter.querySelector('#housing-guests');

  var filteredPins = [];
  window.filteredPins = filteredPins;

  window.priceFilter.addEventListener('change', function () {
    window.filteredPins = window.sortNeighbors.slice();
    window.setPriceFilter();

    window.getPin(window.filteredPins);
  });
})();

// var it = it.offer.price > 0;

// var comparePrice = function (it) {
//   return it;
// }

// switch (priceFilter.value) {
//   case 'middle':
//     it = it.offer.price > FILTER_MIDDLE_PRICE_ONE && it.offer.price < FILTER_MIDDLE_PRICE_TWO;
// }
