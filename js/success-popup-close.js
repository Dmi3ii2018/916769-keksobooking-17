'use strict';

(function () {
  // var successPopup = window.onSuccessPopup;

  // window.successPopup = successPopup; // нежен?

  var hidePopup = function () {
    window.main.removeChild(window.successPopup);
    document.removeEventListener('keydown', escHidePopup);
    window.successPopup.removeEventListener('click', hidePopup); // как удалить обработчик событий?
  };

  var escHidePopup = function (evt) {
    if (evt.keyCode === window.ESC_KEYCODE) {
      hidePopup(window.successPopup);
    }
  };

  var closeSuccessPopup = function () {
    window.successPopup.addEventListener('click', hidePopup);

    document.addEventListener('keydown', escHidePopup);

  };

  window.closeSuccessPopup = closeSuccessPopup;
})();
