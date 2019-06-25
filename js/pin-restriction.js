'use strict';
(function () {
  window.mapPinWidth = window.mapPinMain.offsetWidth;
  window.mapPinHeight = window.mapPinMain.offsetHeight + 22;

  var limits = {
    top: 130 + window.mapContainer.offsetTop,
    right: window.mapContainer.offsetWidth - window.mapPinWidth,
    bottom: 630 + window.mapContainer.offsetTop,
    left: 0
  };

  window.mapPinRestriction = {
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

// var restrict = [131, 630];
// //console.log(window.mapPinMain.offsetTop);
// switch (window.mapPinMain.offsetTop) {
//   case restrict[0]:
//     document.removeEventListener('mousemove', window.onMouseMove);
//     window.mapPinMain.style.top = restrict[0] + 'px';
//     break;
// }