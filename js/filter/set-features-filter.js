// 1) клик по чекбокс
// 2) фильтруем в новый массив все отмеченные преим-ва
// преимуществы вычленить из кнопок в отдельный массив.
// 3) Оставить только те объявления которые соответствуют всем пар-м.
//     window.filteredPins
// 4) Нужно брать выбранные элементы преим-ва и сравнвать со всеми имею-ся у обявления.
//    Все должны присутствовать в объявлении.

'use strict';

(function () {
  var featuresContainer = document.querySelector('#housing-features');
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

