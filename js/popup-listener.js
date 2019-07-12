'use strict';

(function () {
  var ESC_KEYCODE = 13;

  var closeAdvert = function () {
    window.advertItems.style = 'display: none';
  };

  var onPinEnterPress = function () {

  };

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closeAdvert();
    }
  };

  var closePopup = function () {
    if (window.advertItems !== null) {
      window.closeButton.addEventListener('click', function (event) {
        event.preventDefault();
        closeAdvert();
      });
    }
    window.closeButton.addEventListener('keydown', function (evt) {
      onPopupEscPress(evt);
    });
  };
  window.closePopup = closePopup;
})();
