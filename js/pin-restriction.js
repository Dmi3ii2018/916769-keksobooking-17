'use strict';

(function () {
  var MAINPIN_TOP_RESTRICTION = 130;
  var MAINPIN_BOTTOM_RESTRICTION = 630;

  var mapPinWidth = window.mapPinMain.offsetWidth;
  var mapPinHeight = window.mapPinMain.offsetHeight;
  window.mapPinWidth = mapPinWidth;
  window.mapPinHeight = mapPinHeight;

  var limits = {
    top: MAINPIN_TOP_RESTRICTION,
    right: window.mapContainer.offsetWidth - window.mapPinWidth,
    bottom: MAINPIN_BOTTOM_RESTRICTION,
    left: 0
  };

  window.mapPinRestriction = {
    pinStartCoordX: window.mapPinMain.offsetLeft,
    pinStartCoordY: window.mapPinMain.offsetTop,

    setRestrictionY: function (coord) {
      if (coord < limits.top) {
        document.removeEventListener('mousemove', window.onMouseMove);
        window.mapPinMain.style.top = limits.top + 'px';
      } else if (coord > limits.bottom) {
        document.removeEventListener('mousemove', window.onMouseMove);
        window.mapPinMain.style.top = limits.bottom + 'px';
      }
    },
    setRestrictionX: function (coord) {
      if (coord < limits.left) {
        document.removeEventListener('mousemove', window.onMouseMove);
        window.mapPinMain.style.left = limits.left + 'px';
      } else if (coord > limits.right) {
        document.removeEventListener('mousemove', window.onMouseMove);
        window.mapPinMain.style.left = limits.right + 'px';
      }
    }
  };
})();
