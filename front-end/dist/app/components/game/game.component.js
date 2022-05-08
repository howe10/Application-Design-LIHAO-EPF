"use strict";

require("regenerator-runtime/runtime.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.parse-int.js");

require("core-js/modules/es.date.now.js");

require("core-js/modules/es.date.to-string.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/web.timers.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/es.object.define-property.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(function () {
  var environment = {
    api: {
      host: "http://localhost:8081"
    }
  };

  var GameComponent = function () {
    function GameComponent(id) {
      _classCallCheck(this, GameComponent);

      this._name = params.name;
      this._size = parseInt(params.size) || 9;
      this._flippedCard = null;
      this._matchedPairs = 0;
    } 

    _createClass(GameComponent, [{
      key: "start",
      value: function start() {
        var _this = this;

        this._startTime = Date.now();
        var seconds = 0;
        document.querySelector("nav .navbar-title").textContent = "Player:".concat(this._name, ". Elapsed time:").concat(seconds++);
        this._timer = setInterval(function () {
          document.querySelector("nav .navbar-title").textContent = "Player:".concat(_this._name, ". Elapsed time:").concat(seconds++);
        }, 1000);
      }
    }, {
      key: "fetchConfig",
      value:
      function () {
        var _fetchConfig = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", fetch("".concat(environment.api.host, "/board?size=").concat(this._size), {
                    method: "GET"
                  }).then(function (response) {
                    return response.json();
                  })["catch"](function (error) {
                    //return console.log("Error while fetching   config: ", error);
                  }));

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function fetchConfig() {
          return _fetchConfig.apply(this, arguments);
        }

        return fetchConfig;
      }()
    }, {
      key: "init",
      value: function () {
        var _init = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          var _this2 = this;

          var config;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.fetchConfig();

                case 2:
                  config = _context2.sent;
                  this._config = config;
                  this._cards = this._config.ids.map(function (element) {
                    return new CardComponent(element);
                  }); 

                  this._boardElement = document.querySelector(".cards"); 

                  this._cards.forEach(function (card) {
                    _this2._boardElement.appendChild(card.getElement());

                    card.getElement().addEventListener("click", function () {
                      _this2._flipCard(card);
                    });
                  });
                  //console.log("on est dans la boucle");
                  this.start();
                  this.start();
                  ;

                case 11:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function init() {
          return _init.apply(this, arguments);
        }

        return init;
      }()

    }, {
      key: "gotoScore",
      value: function gotoScore() {
        var _this3 = this;

        var now = Date.now();
        var timeElapsedInSeconds = Math.floor((Date.now() - this._startTime) / 1000);
        clearInterval(this._timer);
        setTimeout(function () {
          window.location = "../score/score.component.html?name=".concat(_this3._name, "&size=").concat(_this3._size, "&time=").concat(timeElapsedInSeconds);
        }, 750);
      }
    }, {
      key: "_flipCard",
      value:
      function _flipCard(card) {
        var _this4 = this;

        if (this._busy) {
          return;
        }

        if (card.flipped) {
          return;
        }


        card.flip(); 

        if (!this._flippedCard) {

          this._flippedCard = card;
        } else {
          if (card.equals(this._flippedCard)) {
            this._flippedCard.matched = true;
            card.matched = true;
            this._matchedPairs += 1;

            this._flippedCard = null;

            if (this._matchedPairs === this._size) {
              this.gotoScore();
            }
          } else {
            this._busy = true; 

            setTimeout(function () {
              _this4._flippedCard.flip();

              card.flip();
              _this4._busy = false; 

              _this4._flippedCard = null;
            }
            , 500);
          }
        }
      }
    }, {
      key: "parseUrl",
      value: 
      function parseUrl() {
        var url = window.location;
        var query = url.href.split("?")[1] || "";
        var delimiter = "&"; 
        var parts = query.split(delimiter);
        var result = parts.map(function (item) {
          return item.split("=");
        }).reduce(function (before, currenrt) {
          before[currenrt[0]] = currenrt[1];
          return before;
        }, {});
        return result;
      }
    }]);
    return GameComponent;
  }();
   window.GameComponent = GameComponent;
})();