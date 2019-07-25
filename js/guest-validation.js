'use strict';

(function () {
  var MAX_ROOMS_AMOUNT = 100;

  var roomsInput = window.adForm.querySelector('#room_number');
  var guestsInput = window.adForm.querySelector('#capacity');

  var onGuestFormClick = function (event) {

    if (+roomsInput.value === MAX_ROOMS_AMOUNT && +guestsInput.value !== 0) {
      event.target.setCustomValidity('Эти апартаменты не для гостей');

    } if (+roomsInput.value !== MAX_ROOMS_AMOUNT && +guestsInput.value === 0) {
      guestsInput.setCustomValidity('Укажите количество гостей');

    } else if (+guestsInput.value > +roomsInput.value) {
      event.target.setCustomValidity('Количество гостей не должно превышать количества комнат');

    } else {
      event.target.setCustomValidity('');
    }
  };

  guestsInput.addEventListener('change', function (evt) {
    roomsInput.setCustomValidity('');
    onGuestFormClick(evt);
  });

  roomsInput.addEventListener('change', function (evt) {
    guestsInput.setCustomValidity('');
    onGuestFormClick(evt);
  });
})();
