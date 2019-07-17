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

  var setFeaturesFilter = function () {
    var checkedItems = featuresList.filter(function (it) {
      return it.checked;
    });
    var features = checkedItems.map(function (it) {
      return it.value;
    });
    console.log(features);

    // window.filteredPins = window.sortNeighbors.filter(function (it) {
    //   features.forEach(function (element) {
    //     element.some(it);
    //   });
    // });

    for (var i = 0; i < features.length; i++) {
      for (var q = 0; q < window.sortNeighbors; q++) {
        if (features[i] === window.sortNeighbors[q].offer.features) {
          continue;
        } else {
          break;
        }
      }
    }

    console.log(window.filteredPins);

    return window.filteredPins;
  };

  featuresList.forEach(function (it) {
    it.addEventListener('change', setFeaturesFilter);
  });
})();
