'use strict';

(function () {
  var mapFilter = document.querySelector('.map__filters');
  var selectFilter = mapFilter.querySelectorAll('select');

  var checkFilterChange = function () {
    window.setTypeFilter();
    window.setPriceFilter();
    window.setFilterRooms();
    window.setGuestFilter();
    window.getPin(window.filteredPins);
    window.checkItemPresent(window.advertItems);
  };

  selectFilter.forEach(function (it) {
    it.addEventListener('change', function () {
      checkFilterChange();
    });
  });
})();
