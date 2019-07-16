'use strict';

(function () {
  var roomsInput = window.adForm.querySelector('#room_number');
  var guestsInput = window.adForm.querySelector('#capacity');

  var compareRoomsAndGuests = function (event) {

    if (+roomsInput.value === 100 && +guestsInput.value !== 0) {
      event.target.setCustomValidity('Эти апартаменты не для гостей');

    } else if (+guestsInput.value > +roomsInput.value) {
      event.target.setCustomValidity('Количество гостей не должно превышать количества комнат');

    } else {
      event.target.setCustomValidity('');
    }
  };

  guestsInput.addEventListener('change', function (evt) {
    roomsInput.setCustomValidity('');
    compareRoomsAndGuests(evt);
  });

  roomsInput.addEventListener('change', function (evt) {
    guestsInput.setCustomValidity('');
    compareRoomsAndGuests(evt);
  });
})();
