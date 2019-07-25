'use strict';

(function () {
  var roomsFilter = document.querySelector('#housing-rooms');
  window.roomsFilter = roomsFilter;

  var setFilterRooms = function () {
    if (roomsFilter.value !== 'any') {
      window.filteredPins = window.filteredPins.filter(function (it) {
        return it.offer.rooms === +roomsFilter.value;
      });
    }
    return window.filteredPins;
  };
  window.setFilterRooms = setFilterRooms;
})();
