'use strict';

(function () {
  var main = document.querySelector('main');
  var form = document.querySelector('.ad-form');
  // var submitButton = document.querySelector('.ad-form__submit');

  var onMainPinClick = function () {
    window.updatePins();
    window.mapPinMain.removeEventListener('mouseup', onMainPinClick);
  };

  var successHandler = function () {
    var successTemplate = document.querySelector('#success').content.querySelector('.success');
    var successPopup = successTemplate.cloneNode(true);
    main.appendChild(successPopup);

    form.reset();
    window.mapPinsContainer.innerHTML = '';
    window.mapPinsContainer.appendChild(window.mapPinMain);

    window.mapPinMain.style.top = window.mapPinRestriction.pinStartCoordY + 'px';
    window.mapPinMain.style.left = window.mapPinRestriction.pinStartCoordX + 'px';
    window.setAddressInputValue(window.mapPinRestriction.pinStartCoordX, window.mapPinRestriction.pinStartCoordY);

    try { // Допустимо?
      window.checkItemPresent(window.advertItems);
    } catch (err) {
      console.log('There is no any advert opened'); // что здесь прописать?
    }

    window.mapPinMain.addEventListener('mouseup', onMainPinClick);

    window.closeSuccessPopup();
  };

  var errorHandler = function () {
    var errorTemplate = document.querySelector('#error').content.querySelector('.error');
    var errorPopup = errorTemplate.cloneNode(true);
    main.appendChild(errorPopup);
  };

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    window.getLoad(new FormData(form), successHandler, errorHandler);

    console.log('to reset');
  });
})();
