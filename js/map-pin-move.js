'use strict';

(function () {
  var mapPinMain = document.querySelector('.map__pin--main');
  window.mapPinMain = mapPinMain;

  window.mapPinMain.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    window.onMouseMove = function (moveEvt) {
      evt.preventDefault();

      window.mapPinRestriction.setRestrictionY(mapPinMain.offsetTop);
      window.mapPinRestriction.setRestrictionX(mapPinMain.offset);

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      var diffCoord = {
        x: mapPinMain.offsetLeft - shift.x,
        y: mapPinMain.offsetTop - shift.y
      };

      mapPinMain.style.top = diffCoord.y + 'px';
      mapPinMain.style.left = diffCoord.x + 'px';

      window.setAddressInputValue(diffCoord.x, diffCoord.y);
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', window.onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', window.onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();


