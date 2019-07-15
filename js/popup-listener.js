'use strict';

(function () {
  window.ESC_KEYCODE = 27;
  window.ENTER_KEYCODE = 13;
  // var successPopup = window.onSuccessPopup;

  // window.successPopup = successPopup;

  var hidePopup = function () {
    window.successPopup.style = 'display: none';
    document.removeEventListener('keydown', escHidePopup);
  };

  var escHidePopup = function (evt) {
    if (evt.keyCode === window.ESC_KEYCODE) {
      hidePopup(window.successPopup);
    }
  };

  var closeSuccessPopup = function () {
    window.successPopup.addEventListener('click', hidePopup);

    document.addEventListener('keydown', escHidePopup);

    window.successPopup.removeEventListener('click', hidePopup);
  };

  window.closeSuccessPopup = closeSuccessPopup;

  var closeAdvert = function () {
    window.advertItems.style = 'display: none';
    window.checkPinActiveClass();
  };

  var onPopupEnterClose = function (evt) {
    if (evt.keyCode === window.ENTER_KEYCODE) {
      closeAdvert();
    }
  };

  var onPopupEscClose = function (evt) {
    if (evt.keyCode === window.ESC_KEYCODE) {
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
