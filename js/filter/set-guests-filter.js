'use strict';

(function () {
  var guestsFilter = document.querySelector('#housing-guests');
  window.guestsFilter = guestsFilter;

  var setGuestFilter = function () {
    if (guestsFilter.value !== 'any') {
      window.filteredPins = window.filteredPins.filter(function (it) {
        return it.offer.guests === +guestsFilter.value;
      });
    }
    return window.filteredPins;
  };
  window.setGuestFilter = setGuestFilter;
})();
