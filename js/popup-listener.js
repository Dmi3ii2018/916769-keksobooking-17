'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var closeAdvert = function () {
    window.advertItems.style = 'display: none';
  };

  var onPopupEnterClose = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closeAdvert();
    }
  };

  var onPopupEscClose = function (evt) {
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

      document.addEventListener('keydown', onPopupEscClose);

      window.closeButton.addEventListener('keydown', function (evt) {
        onPopupEnterClose(evt);
      });
    }
  };

  window.closePopup = closePopup;
})();
