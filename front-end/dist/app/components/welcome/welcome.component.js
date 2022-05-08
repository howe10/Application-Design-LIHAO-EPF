"use strict";

require("core-js/modules/es.function.bind.js");

require("core-js/modules/es.parse-int.js");

require("core-js/modules/es.array.concat.js");
(function () {
  function WelcomeComponent() {}
  WelcomeComponent.prototype.init = function init() {
    var form = document.querySelector('form.form-signin');
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      if (form.checkValidity() === false) {
        event.stopPropagation();
        form.classList.add('was-validated');
      } else {
        var name = event.srcElement.querySelector('#nickname').value;
        var size = parseInt(event.srcElement.querySelector('#size').value);

        _startGame(name, size);
      }
    }.bind(this), false);
    return this;
  }; 
  function _startGame(name, size) {
    window.location = "../game/game.component.html?name=...".concat(name, "&size=").concat(size);
  }

  window.WelcomeComponent = WelcomeComponent;
})();