'use strict';

(function () {
  var ESC_KEYCODE = 32;
  var ENTER_KEYCODE = 13;

  var hidePopup = function () {
    var successPopup = document.querySelector('.success');
    successPopup.style = 'display: none';
  };

  var escHidePopup = function() {
    if (evt.keyCode === ESC_KEYCODE) {
      hidePopup(successPopup);
    }
  };

  var closeSuccessPopup = function () {

    successPopup.addEventListener('click', function () {
      hidePopup(successPopup);
    });

    document.addEventListener('keydown', function (evt) {

    });

    successPopup.removeEventListener('click', hidePopup); // как удалить обработчик событий?
  };

  window.closeSuccessPopup = closeSuccessPopup;

  var closeAdvert = function () {
    window.advertItems.style = 'display: none';
    window.checkPinActiveClass();
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
