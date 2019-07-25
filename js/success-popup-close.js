'use strict';

(function () {
  var onSuccessPopupClick = function () {
    window.main.removeChild(window.successPopup);
    document.removeEventListener('keydown', onEscClick);
    window.successPopup.removeEventListener('click', onSuccessPopupClick);
  };

  var onEscClick = function (evt) {
    if (evt.keyCode === window.ESC_KEYCODE) {
      onSuccessPopupClick();
    }
  };

  var closeSuccessPopup = function () {
    window.successPopup.addEventListener('click', onSuccessPopupClick);

    document.addEventListener('keydown', onEscClick);

  };

  window.closeSuccessPopup = closeSuccessPopup;
})();
