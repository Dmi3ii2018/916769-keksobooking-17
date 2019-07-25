'use strict';

(function () {
  var main = document.querySelector('main');
  window.main = main;
  var form = document.querySelector('.ad-form');
  var submitButton = document.querySelector('.ad-form__submit');

  var onMainPinClick = function () {
    window.updatePins();
    window.mapPinMain.removeEventListener('mouseup', onMainPinClick);
  };

  window.onMainPinClick = onMainPinClick;

  var successHandler = function () {
    var successTemplate = document.querySelector('#success').content.querySelector('.success');
    var successPopup = successTemplate.cloneNode(true);
    main.appendChild(successPopup);

    form.reset();
    window.resetForm();
    window.closeSuccessPopup();
  };

  var errorHandler = function () {
    var errorTemplate = document.querySelector('#error').content.querySelector('.error');
    var errorPopup = errorTemplate.cloneNode(true);
    main.appendChild(errorPopup);

    window.errorPopup = document.querySelector('.error');

    window.closeErrorPopup();

  };

  var checkValidity = function (item) {
    item.forEach(function (it) {
      var input = it;
      if (!input.checkValidity()) {
        input.style = 'border: 1px solid #ff6547';
      } else {
        input.style = 'border: 1px solid #d9d9d3';
      }
    });
  };

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    window.getLoad(new FormData(form), successHandler, errorHandler);
  });

  submitButton.addEventListener('click', function () {
    checkValidity(window.adFormInput);
    checkValidity(window.adFormSelector);
  });
})();

