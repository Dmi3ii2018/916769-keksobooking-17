'use strict';

(function () {
  var fileChooser = document.querySelector('.ad-form-header__input');
  var preview = document.querySelector('.ad-form-header__preview').querySelector('img');

  fileChooser.addEventListener('change', function () {
    window.uploadImage(fileChooser, preview);
  });

  var fotoChooser = document.querySelector('.ad-form__input');
  var photoContainer = document.querySelector('.ad-form__photo');

  fotoChooser.addEventListener('change', function () {

    var image = document.createElement('img');
    image.width = 40;
    image.height = 44;
    image.alt = 'Фото апартаментов';
    image.setAttribute('draggable', 'true');

    window.uploadImage(fotoChooser, image);

    photoContainer.appendChild(image);
  });
})();
