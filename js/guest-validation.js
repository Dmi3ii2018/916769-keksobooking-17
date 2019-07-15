'use strict';
// нужна одна функция которая бутет использ-ся в обоих инпутах. Для кол-ва гостей она
// будет добавлена в обработчик change. В количестве комнат так же, как обработчик событий.
// Структура данных.
// rooms = {
//  1_room: 1 guest;
//  2_rooms: 1 guest || 2 guests;
// }

(function () {
  var roomsInput = window.adForm.querySelector('#room_number');
  var guestsInput = window.adForm.querySelector('#capacity');

  var compareRoomsAndGuests = function (event) {

    if (+roomsInput.value === 100 && +guestsInput.value !== 0) { // нормально ли так приводить к числу?
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
