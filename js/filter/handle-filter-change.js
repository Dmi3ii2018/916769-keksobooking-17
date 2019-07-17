'use strict';

(function () {
  var mapFilter = document.querySelector('.map__filters');
  var roomsFilter = mapFilter.querySelector('#housing-rooms');
  var guestsFilter = mapFilter.querySelector('#housing-guests');

  var checkFilterChange = function () {
    window.setTypeFilter();
    window.setPriceFilter();
    window.getPin(window.filteredPins);
  };

  window.priceFilter.addEventListener('change', function () {
    checkFilterChange();
  });

  window.typeFilter.addEventListener('change', function () {
    checkFilterChange();
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
