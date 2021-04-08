// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/main.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OperateLights = /*#__PURE__*/function () {
  function OperateLights() {
    _classCallCheck(this, OperateLights);

    this.lights = [document.querySelector(".yellowButton"), document.querySelector(".blueButton"), documentn.querySelector(".redButton"), document.querySelector(".greenButton")];
    this.timing = 300;
    this.interval = [];
  }

  _createClass(OperateLights, [{
    key: "powerOnLights",
    value: function powerOnLights() {
      var _this = this;

      this.toggleLights([0, 1, 2, 3], 0);
      var i = setTimeout(function () {
        _this.toggleLights([0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3], 150);
      }, this.timing);
      this.interval.push(i);
    }
  }, {
    key: "powerOffLights",
    value: function powerOffLights() {
      this.interval.forEach(function (e) {
        clearInterval(e);
      });
      this.toggleLights([0, 1, 2, 3], 10, true);
    }
  }, {
    key: "toggleIncorrectLights",
    value: function toggleIncorrectLights() {
      var i;
      this.lights.forEach(function (e) {
        e.classList.add("incorrect-background");
        var i = setTimeout(function () {
          e.classList.remove("incorrect-background");
        }, 200);
      });
      this.interval.push(i);
    }
  }, {
    key: "toggleCorrectLights",
    value: function toggleCorrectLights() {
      var i;
      this.lights.forEach(function (e) {
        e.classList.add("correct-background");
        var i = setTimeout(function () {
          e.classList.remove("correct-background");
        }, 200);
      });
      this.interval.push(i);
    }
  }, {
    key: "toggleLights",
    value: function toggleLights(arr, interval, forceOff) {
      var _this2 = this;

      var delay = 0;

      if (interval === 0) {
        //if interval is 0 default delay setTimeout for adding to 0 and removing to 200ms
        arr.forEach(function (e, i) {
          var curButton = _this2.lights[e];
          var j = setTimeout(function () {
            curButton.classList.add("button-".concat(curButton.dataset.num));
          }, 0);
          var k = setTimeout(function () {
            curButton.classList.remove("button-".concat(curButton.dataset.num));
          }, _this2.timing);

          _this2.interval.push(j);

          _this2.interval.push(k);
        }); //remove color when switch off
      } else if (forceOff === true) {
        arr.forEach(function (e) {
          _this2.lights[e].classList.remove("button-".concat(_this2.lights[e].dataset.num));
        }); //loop through; add/remove color by settimeout
      } else {
        arr.forEach(function (e, i) {
          var curButton = _this2.lights[e];
          console.log(e);
          var j = setTimeout(function () {
            curButton.classList.add("button-".concat(curButton.dataset.num));
          }, delay);
          delay += interval;
          var k = setTimeout(function () {
            curButton.classList.remove("button-".concat(curButton.dataset.num));
          }, delay);
          delay += interval;

          _this2.interval.push(j);

          _this2.interval.push(k);
        });
      }
    }
  }]);

  return OperateLights;
}();

var LightOperator = new OperateLights();

var SimonSaid = /*#__PURE__*/function () {
  function SimonSaid() {
    _classCallCheck(this, SimonSaid);

    this.count = 0;
    this.on = false;
    this.strict = false;
    this.start = false;
    this.level = 1;
    this.win = false;
    this.turn = "ai";
    this.aiPicks = [];
    this.userPicks = []; //elementNode

    this.displayCount = document.querySelector("#displayCount");
    this.powerButton = document.querySelector("#powerButton"); //binding

    this.power = this.power.bind(this);
    this.reset = this.reset.bind(this); //store intervals to clear when turning off power

    this.interval = [];
  }

  _createClass(SimonSaid, [{
    key: "power",
    value: function power() {
      this.on = !this.on;

      if (this.on) {
        LightOperator.powerOnLights();
        this.powerButton.style.backgroundColor = "green";
        this.powerButton.textContent = "On";
        this.countDown();
      } else {
        this.interval.forEach(function (e) {
          clearInterval(e);
        });
        LightOperator.powerOffLights();
        this.reset();
        this.powerButton.style.backgroundColor = "red";
        this.powerButton.textContent = "Off";
      }
    }
  }, {
    key: "updateCount",
    value: function updateCount(count) {
      this.displayCount.innerHTML = count;
    }
  }, {
    key: "countDown",
    value: function countDown() {
      var _this3 = this;

      var count = 3;
      var delay = 0;

      var _loop = function _loop() {
        var curCount = count;
        var i = void 0;
        var j = void 0;

        if (count === 0) {
          i = setTimeout(function () {
            _this3.updateCount(curCount);

            j = setTimeout(function () {
              _this3.play();
            }, 1900);
          }, delay);
        } else {
          i = setTimeout(function () {
            _this3.updateCount(curCount);
          }, delay);
        }

        count--;
        delay += 1000;

        _this3.interval.push(i, j);
      };

      while (count >= 0) {
        _loop();
      }
    }
  }, {
    key: "aiPicksColors",
    value: function aiPicksColors() {
      for (var i = 0; i < this.level; i++) {
        if (this.level === 5) {
          console.log(this);
          this.winner();
          break;
        } else {
          this.aiPicks.push(Math.round(Math.random() * 3));
        }
      }

      LightOperator.toggleLights(this.aiPicks, 300);
    }
  }, {
    key: "play",
    value: function play() {
      this.start = true;
      this.updateCount(0); //ai picks;
      //plays lights;

      this.aiPicksColors();
      this.turn = "user"; //user picks;
      //check if user picks correctly;
      //no
      //if isStrict  -> restart game,clear count;
      //if !isStrict -> wait for user picka again
      //yes: add color;
      //if reach end -> add count
      //if not end   -> wait for user to pick
    }
  }, {
    key: "winner",
    value: function winner() {
      var _this4 = this;

      this.turn = "ai";
      this.updateCount("win!");
      var i = setTimeout(function () {
        console.log(_this4);

        _this4.reset();
      }, 1000);
      this.interval.push(i);
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this5 = this;

      this.count = 0;
      this.aiPicks = [];
      this.userPicks = [];
      this.win = false;
      this.level = 1;
      this.turn = "ai";
      this.updateCount(this.count);
      this.interval.forEach(function (e) {
        clearInterval(e);
      });
      var i = setTimeout(function () {
        _this5.play();
      }, 1500);
      this.interval.push(i);
    }
  }, {
    key: "buttonClick",
    value: function buttonClick(color) {
      if (this.turn !== "ai" && this.on) {
        this.turn = "ai";
        this.userPicks.push(color);
        this.checkClick(color);
      }
    }
  }, {
    key: "checkClick",
    value: function checkClick(color) {
      var _this6 = this;

      var i; //if user picks correctly

      if (this.aiPicks[this.userPicks.length - 1] === this.userPicks[this.userPicks.length - 1]) {
        console.log("correct"); //toggle correctLights;

        LightOperator.toggleCorrectLights(); //if user got all sequence increase level and count;
        //choose new colors;

        if (this.aiPicks.length === this.userPicks.length) {
          this.count++;
          this.updateCount(this.count);
          this.level++;
          this.userPicks = [];
          i = setTimeout(function () {
            _this6.aiPicksColors();

            _this6.turn = "user";
          }, 500); //if user has not picked all sequence let user go again;
        } else if (this.aiPicks.length > this.userPicks.length) {
          //wait for user to pick another color
          this.turn = "user";
        } //if user pick incorrectly remove choice and toggle inCorrect lights

      } else {
        LightOperator.toggleIncorrectLights();
        console.log(this.userPicks, this.aiPicks);
        this.userPicks.pop();
        this.turn = "user";
      }

      this.interval.push(i);
    }
  }, {
    key: "hard",
    value: function hard() {
      console.log("so strict");
    }
  }]);

  return SimonSaid;
}();

var Game = new SimonSaid();
var resetNode = document.querySelector(".resetButton"); // let powerNode = document.querySelector(".powerButton");
// let strictNode = document.querySelector(".strictButton");
// let = greenButton = document.querySelector(".greenButton");
// let = blueButton = document.querySelector(".blueButton");
// let = yellowButton = document.querySelector(".yellowButton");
// let = redButton = document.querySelector(".redButton");

if (resetNode) {
  resetNode.addEventListener("click", Game.reset);
  powerNode.addEventListener("click", Game.power);
  strictNode.addEventListener("click", Game.hard);
}

if (greenButton) {
  greenButton.addEventListener("click", function () {
    Game.buttonClick(3);
  });
  redButton.addEventListener("click", function () {
    Game.buttonClick(2);
  });
  yellowButton.addEventListener("click", function () {
    Game.buttonClick(0);
  });
  blueButton.addEventListener("click", function () {
    Game.buttonClick(1);
  });
}
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52673" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map