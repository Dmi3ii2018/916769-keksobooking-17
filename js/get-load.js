'use strict';

(function () {
  var SUCCESS_STATUS = 200;

  var URL = 'https://js.dump.academy/keksobooking';

  var getLoad = function (data, onSuccess, onError) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function () {
      if (xhr.status === SUCCESS_STATUS) {
        onSuccess();
      } else {
        onError();
      }
    });

    xhr.open('POST', URL);
    xhr.send(data);
  };

  window.getLoad = getLoad;
})();

