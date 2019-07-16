'use strict';

(function () {
  var URL = 'https://js.dump.academy/keksobooking';

  var getLoad = function (data, onSuccess, onError) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
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

