'use strict';

(function () {
  var FILTER_MIDDLE_PRICE_ONE = 10000;
  var FILTER_MIDDLE_PRICE_TWO = 50000;

  var priceFilter = document.querySelector('#housing-price');
  window.priceFilter = priceFilter;


  var setPriceFilter = function () {
    window.filteredPins = window.filteredPins.filter(function (it) {
      if (priceFilter.value === 'middle') {
        return it.offer.price > FILTER_MIDDLE_PRICE_ONE && it.offer.price < FILTER_MIDDLE_PRICE_TWO;

      } else if (priceFilter.value === 'low') {
        return it.offer.price < FILTER_MIDDLE_PRICE_ONE;

      } else if (priceFilter.value === 'high') {
        return it.offer.price > FILTER_MIDDLE_PRICE_TWO;


      } else {
        return window.filteredPins;
      }

    });
  };
  window.setPriceFilter = setPriceFilter;
})();
