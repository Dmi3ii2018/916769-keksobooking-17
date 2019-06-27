'use strict';

(function () {
  var errorTemplate = document.querySelector('#error').content.querySelector('.error');

  window.onError = function (errorNumber) {
    var errorWindow = errorTemplate.cloneNode(true);

    var message = errorWindow.querySelector('.error__message');
    message.textContent += ' ' + errorNumber;

    var button = errorWindow.querySelector('.error__button');
    button.addEventListener('click', function (evt) {
      evt.preventDefault();
      document.querySelector('main').removeChild(errorWindow);
      window.onLoad(window.onSuccess, window.onError);
    });

    document.querySelector('main').appendChild(errorWindow);
  };
})();
