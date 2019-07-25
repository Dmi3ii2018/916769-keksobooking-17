'use strict';

(function () {
  var typeFilter = document.querySelector('#housing-type');
  window.typeFilter = typeFilter;

  var setTypeFilter = function () {
    window.filteredPins = window.sortNeighbors;
    if (typeFilter.value !== 'any') {
      window.filteredPins = window.filteredPins.filter(function (it) {
        return it.offer.type === typeFilter.value;
      });
    }
    return window.filteredPins;
  };
  window.setTypeFilter = setTypeFilter;
})();

