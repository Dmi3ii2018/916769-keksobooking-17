'use strict';

(function () {
  var typeFilterName = document.querySelector('#housing-type');

  var updatePins = function () {
    if (typeFilterName.value === 'any') {
      window.getPin(window.sortNeighbors);
    } else {
      window.getPin(window.sortNeighbors.filter(function (it) {
        return it.offer.type === typeFilterName.value;
      }));
    }
  };
  window.updatePins = updatePins;

  typeFilterName.addEventListener('change', function () {
    updatePins();
  });
})();
