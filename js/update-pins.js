'use strict';

(function () {
  var updatePins = function () {
    window.getPin(window.sortNeighbors);
  };
  window.updatePins = updatePins;

  // typeFilterName.addEventListener('change', function () {
  //   window.debounce(updatePins);
  // });
})();
