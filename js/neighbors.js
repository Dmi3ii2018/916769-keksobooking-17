'use strict';

(function () {
  var Neighbor = function (data) {
    this.author = {
      avatar: data.author.avatar
    };

    this.offer = {
      title: data.offer.title,
      address: data.offer.address,
      price: data.offer.price,
      type: data.offer.type,
      rooms: data.offer.rooms,
      guests: data.offer.guests,
      checkin: data.offer.checkin,
      checkout: data.offer.checkout,
      features: data.offer.features,
      description: data.offer.description,
      photos: data.offer.photos,
    };

    this.location = {
      x: data.location.x,
      y: data.location.y
    };
  };
  // вопрос для созвона почему работает?
  Neighbor.prototype = {
    setFeatures: function (data) {
      window.popupFeatures.innerHTML = '';
      // console.log(window.popupFeatures);
      var featuresList = data.offer.features;
      // console.log(featuresList);

      featuresList.forEach(function (it) {
        var featureItem = document.createElement('li');
        featureItem.classList.add('popup__feature');
        featureItem.classList.add('popup__feature--' + it);
        window.popupFeatures.appendChild(featureItem);
      });
      // console.log(window.popupFeatures);
    },

    getPhotoSet: function (data) {
      window.popupPhotos.innerHTML = '';
      var fragment = document.createDocumentFragment();
      var photoList = data.offer.photos;

      photoList.forEach(function (it) {
        var photo = document.createElement('img');
        photo.classList.add('popup__photo');
        photo.width = 45;
        photo.height = 40;
        photo.src = it;
        fragment.appendChild(photo);
      });
      window.popupPhotos.appendChild(fragment);
    }
  };

  window.Neighbor = Neighbor;
})();
