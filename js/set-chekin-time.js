'use strict';

(function () {
  var checkInTime = document.querySelector('#timein');
  var checkOutTime = document.querySelector('#timeout');

  checkInTime.addEventListener('change', function (evt) {
    checkOutTime.value = evt.target.value;
  });

  checkOutTime.addEventListener('change', function (evt) {
    checkInTime.value = evt.target.value;
  });
})();
