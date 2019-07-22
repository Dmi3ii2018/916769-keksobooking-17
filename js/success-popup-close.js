'use strict';

(function () {
  var hidePopup = function () {
    window.main.removeChild(window.successPopup);
    document.removeEventListener('keydown', escHidePopup);
    window.successPopup.removeEventListener('click', hidePopup);
  };

  var escHidePopup = function (evt) {
    if (evt.keyCode === window.ESC_KEYCODE) {
      hidePopup();
    }
  };

  var closeSuccessPopup = function () {
    window.successPopup.addEventListener('click', hidePopup);

    document.addEventListener('keydown', escHidePopup);

  };

  window.closeSuccessPopup = closeSuccessPopup;
})();
