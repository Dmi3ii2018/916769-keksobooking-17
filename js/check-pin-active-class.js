'use strict';

(function () {
  var checkPinActiveClass = function () {
    var pinCheck = window.allPins.filter(function (it) {
      return it.classList.contains('map__pin--active');
    });

    if (pinCheck.length !== 0) {
      pinCheck.forEach(function (it) {
        it.classList.remove('map__pin--active');
      });
    }
  };
  window.checkPinActiveClass = checkPinActiveClass;
})();
