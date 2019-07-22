'use strict';

(function () {
  var featuresContainer = document.querySelector('.map__features');
  var featuresList = Array.from(featuresContainer.querySelectorAll('.map__checkbox'));

  var checkFeaturesFilter = function () {
    for (var i = 0; i < featuresList.length; i++) {
      if (featuresList[i].checked) {
        window.filteredPins = window.filteredPins.filter(function (it) {
          return it.offer.features.includes(featuresList[i].value);
        });
      }
    }
  };

  window.checkFeaturesFilter = checkFeaturesFilter;

  window.render = function () {
    window.getPin(window.filteredPins);
  };

  var setFeaturesFilter = function (evt) {
    evt.preventDefault();

    window.checkFilterChange();
    checkFeaturesFilter();

    window.checkItemPresent(window.advertItems);

    window.debounce(window.render);
    return window.filteredPins;

  };

  featuresList.forEach(function (it) {
    it.addEventListener('change', setFeaturesFilter);
  });
})();

