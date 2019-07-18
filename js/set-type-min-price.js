'use strict';

(function () {
  var appartmentType = document.querySelector('#type');
  var appartmentPrice = document.querySelector('#price');

  var appartTypeToMinPrice = {
    'bungalo': 0,
    'flat': 1000,
    'house': 5000,
    'palace': 10000
  };

  appartmentType.addEventListener('change', function (evt) {
    appartmentPrice.min = appartTypeToMinPrice[evt.target.value];
    appartmentPrice.placeholder = appartTypeToMinPrice[evt.target.value];
  });

})();
