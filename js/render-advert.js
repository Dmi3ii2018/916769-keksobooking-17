'use strict';

var mapCardsContainer = document.querySelector('.map');
var advertTemplate = document.querySelector('#card').content.querySelector('.map__card');
var popupTitle = advertTemplate.querySelector('.popup__title');
var popupAddress = advertTemplate.querySelector('.popup__text--address');
var popupPrice = advertTemplate.querySelector('.popup__text--price ');
var popupType = advertTemplate.querySelector('.popup__type');
var popupCapacity = advertTemplate.querySelector('.popup__text--capacity');
var popupTime = advertTemplate.querySelector('.popup__text--time');
var popupFeatures = advertTemplate.querySelector('.popup__features');
var popupDescription = advertTemplate.querySelector('.popup__description');
var popupPhotos = advertTemplate.querySelector('.popup__photos');
var popupAvatar = advertTemplate.querySelector('.popup__avatar');
window.popupFeatures = popupFeatures;
window.popupPhotos = popupPhotos;

(function () {
  var renderAdvert = function (data) {
    var advertPopup = advertTemplate.cloneNode(true);
    popupAvatar.src = data.author.avatar;
    popupTitle.textContent = data.offer.title;
    popupAddress.textContent = data.offer.address;
    popupPrice.textContent = data.offer.price + ' ₽/ночь';
    popupType.textContent = data.offer.type;
    popupCapacity.textContent = data.offer.rooms + ' комнат(ы) для ' + data.offer.guests + ' гостей';
    popupTime.textContent = 'Заезд после ' + data.offer.checkin + ', выезд до ' + data.offer.checkout;
    window.Neighbor.prototype.setFeatures(data); // почему нужен прототип?
    popupDescription.textContent = data.offer.description;
    window.Neighbor.prototype.getPhotoSet(data);
    advertPopup.style = 'display: none';

    return advertPopup;
  };

  var createAdvertPopup = function (data) {
    data.forEach(function (advert) {
      mapCardsContainer.appendChild(renderAdvert(advert));
    });
  };

  window.createAdvertPopup = createAdvertPopup;
})();