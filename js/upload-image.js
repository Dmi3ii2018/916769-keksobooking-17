'use strict';

(function () {
  var uploadImage = function (files, photo) {
    var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

    var file = files.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        photo.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  };

  window.uploadImage = uploadImage;
})();
