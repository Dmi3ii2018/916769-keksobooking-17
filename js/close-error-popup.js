'use strict';

(function () {
  var hidePopup = function () {
    window.main.removeChild(window.errorPopup);
    document.removeEventListener('keydown', escHidePopup);
    window.errorPopup.removeEventListener('click', hidePopup);
  };

  var escHidePopup = function (evt) {
    if (evt.keyCode === window.ESC_KEYCODE) {
      hidePopup(window.errorPopup);
    }
  };

  var closeErrorPopup = function () {
    window.errorPopup.addEventListener('click', hidePopup);

    document.addEventListener('keydown', escHidePopup);

  };

  window.closeErrorPopup = closeErrorPopup;
})();
