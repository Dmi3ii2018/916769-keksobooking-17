'use strict';

(function () {
  var resetButton = document.querySelector('.ad-form__reset');

  var resetForm = function () {
    window.mapPinsContainer.innerHTML = '';
    window.mapPinsContainer.appendChild(window.mapPinMain);

    window.mapPinMain.style.top = window.mapPinRestriction.pinStartCoordY + 'px';
    window.mapPinMain.style.left = window.mapPinRestriction.pinStartCoordX + 'px';
    window.setAddressInputValue(window.mapPinRestriction.pinStartCoordX, window.mapPinRestriction.pinStartCoordY);

    window.checkItemPresent(window.advertItems);

    window.mapPinMain.addEventListener('mouseup', window.onMainPinClick);

    window.successPopup = document.querySelector('.success');
  };

  resetButton.addEventListener('click', resetForm);

  window.resetForm = resetForm;
})();
