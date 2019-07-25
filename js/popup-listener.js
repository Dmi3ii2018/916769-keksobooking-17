'use strict';

(function () {
  window.ESC_KEYCODE = 27;
  window.ENTER_KEYCODE = 13;

  var onSuccessPopupClick = function () {
    window.successPopup.style = 'display: none';
    document.removeEventListener('keydown', onPopupEscClose);
  };

  var onPopupEnterClose = function (evt, cb) {
    if (evt.keyCode === window.ENTER_KEYCODE) {
      cb();
    }
  };

  var onPopupEscClose = function (evt, cb) {
    if (evt.keyCode === window.ESC_KEYCODE) {
      cb();
    }
    document.removeEventListener('keydown', onPopupEscClose);
  };

  window.popupListenerUtil = {
    closeSuccessPopup: function () {
      window.successPopup.addEventListener('click', onSuccessPopupClick);

      document.addEventListener('keydown', function (evt) {
        onPopupEscClose(evt, onSuccessPopupClick);
      });

      window.successPopup.removeEventListener('click', onSuccessPopupClick);
    },

    onCloseButtonClick: function () {
      window.advertItems.style = 'display: none';
      window.checkPinActiveClass();
    },

    closePopup: function () {
      if (window.advertItems !== null) {
        window.closeButton.addEventListener('click', function (event) {
          event.preventDefault();
          window.popupListenerUtil.onCloseButtonClick();
        });

        document.addEventListener('keydown', function (evt) {
          onPopupEscClose(evt, window.popupListenerUtil.onCloseButtonClick);
        });

        window.closeButton.addEventListener('keydown', function (evt) {
          onPopupEnterClose(evt, window.popupListenerUtil.onCloseButtonClick);
        });
      }
    }
  };
})();
