"use strict";

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.parse-int.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.array.map.js");

import { parseUrl } from '../../utils/utils.js';
(function () {
  function ScoreComponent() {
    var params = parseUrl();
    this.name = params.name;
    this.size = parseInt(params.size);
    this.time = parseInt(params.time);
  }
  ScoreComponent.prototype.init = function init() {
    document.getElementById('name').innerText = this.name;
    document.getElementById('size').innerText = this.size;
    document.getElementById('time').innerText = this.time;
  }; 
 window.ScoreComponent = ScoreComponent;
})();