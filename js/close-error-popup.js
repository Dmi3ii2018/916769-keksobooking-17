'use strict';

(function () {
  var onErrorPopupClick = function () {
    window.main.removeChild(window.errorPopup);
    document.removeEventListener('keydown', onEscClick);
    window.errorPopup.removeEventListener('click', onErrorPopupClick);
  };

  var onEscClick = function (evt) {
    if (evt.keyCode === window.ESC_KEYCODE) {
      onErrorPopupClick();
    }
  };

  var closeErrorPopup = function () {
    window.errorPopup.addEventListener('click', onErrorPopupClick);

    document.addEventListener('keydown', onEscClick);

  };

  window.closeErrorPopup = closeErrorPopup;
})();
