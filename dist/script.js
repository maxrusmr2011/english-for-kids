/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/App */ "./src/js/App.js");

console.log('index');
var app = new _js_App__WEBPACK_IMPORTED_MODULE_0__["App"]();
app.init();
app.render();

/***/ }),

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ "./src/js/Menu.js");
/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Switch */ "./src/js/Switch.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/js/constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    this.menu = new _Menu__WEBPACK_IMPORTED_MODULE_0__["Menu"]();
    this["switch"] = new _Switch__WEBPACK_IMPORTED_MODULE_1__["Switch"]();
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      this.menu.init();
      this["switch"].init();
    }
  }, {
    key: "render",
    value: function render() {
      console.log('app');
    }
  }]);

  return App;
}();

/***/ }),

/***/ "./src/js/Menu.js":
/*!************************!*\
  !*** ./src/js/Menu.js ***!
  \************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Menu = /*#__PURE__*/function () {
  function Menu() {
    _classCallCheck(this, Menu);

    this.showMenu = false;
  }

  _createClass(Menu, [{
    key: "active",
    value: function active(activation) {
      var _this = this;

      this.showMenu = arguments.length ? activation : !this.showMenu;

      if (this.showMenu) {
        document.body.classList.add('menu-activated');

        document.onmousedown = function (event) {
          if (event.screenX > 300) {
            _this.active(false);
          }
        };
      } else {
        document.body.classList.remove('menu-activated');
        document.onmousedown = null;
      }
    }
  }, {
    key: "changeItemMenu",
    value: function changeItemMenu(elSelect) {
      document.querySelectorAll('.nav__link').forEach(function (itemMenu) {
        itemMenu.classList.remove('nav__link-active');
      });
      elSelect.classList.add('nav__link-active');
      this.active(false);

      switch (elSelect.id) {
        case 'page-1':
          console.log('page-1');
          break;

        case 'page-3':
          console.log('page-3');
          break;

        default:
          console.log('page-2');
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      document.querySelector('.burger').addEventListener('click', function () {
        _this2.active();
      });
      document.querySelector('.nav ul').addEventListener('click', function (event) {
        var itemMenu = event.target;

        if (itemMenu.classList.contains('nav__link') && !itemMenu.classList.contains('nav__link-active')) {
          _this2.changeItemMenu(itemMenu);
        }
      });
    }
  }]);

  return Menu;
}();

/***/ }),

/***/ "./src/js/Switch.js":
/*!**************************!*\
  !*** ./src/js/Switch.js ***!
  \**************************/
/*! exports provided: Switch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Switch = /*#__PURE__*/function () {
  function Switch() {
    _classCallCheck(this, Switch);

    this.modePlay = false;
  }

  _createClass(Switch, [{
    key: "init",
    value: function init() {
      var _this = this;

      document.querySelector('.switch-input').checked = false;
      document.querySelector('.switch-input').addEventListener('change', function () {
        _this.modePlay = !_this.modePlay;

        _this.show();
      });
    }
  }, {
    key: "show",
    value: function show() {
      // console.log('play =',this.modePlay);
      if (this.modePlay) {
        document.body.classList.add('mode-play');
      } else {
        document.body.classList.remove('mode-play');
      }
    }
  }]);

  return Switch;
}();

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/*! exports provided: statistic, CARDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statistic", function() { return statistic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARDS", function() { return CARDS; });
var statistic = {};
var CARDS = [{
  name: 'Action (set A)',
  listCards: [{
    word: 'cry',
    translation: 'плакать',
    image: 'img/cry.jpg',
    audioSrc: 'audio/cry.mp3'
  }, {
    word: 'dance',
    translation: 'танцевать',
    image: 'img/dance.jpg',
    audioSrc: 'audio/dance.mp3'
  }, {
    word: 'dive',
    translation: 'нырять',
    image: 'img/dive.jpg',
    audioSrc: 'audio/dive.mp3'
  }, {
    word: 'draw',
    translation: 'рисовать',
    image: 'img/draw.jpg',
    audioSrc: 'audio/draw.mp3'
  }, {
    word: 'fish',
    translation: 'ловить рыбу',
    image: 'img/fish.jpg',
    audioSrc: 'audio/fish.mp3'
  }, {
    word: 'fly',
    translation: 'летать',
    image: 'img/fly.jpg',
    audioSrc: 'audio/fly.mp3'
  }, {
    word: 'hug',
    translation: 'обнимать',
    image: 'img/hug.jpg',
    audioSrc: 'audio/hug.mp3'
  }, {
    word: 'jump',
    translation: 'прыгать',
    image: 'img/jump.jpg',
    audioSrc: 'audio/jump.mp3'
  }]
}, {
  name: 'Action (set B)',
  listCards: [{
    word: 'open',
    translation: 'открывать',
    image: 'img/open.jpg',
    audioSrc: 'audio/open.mp3'
  }, {
    word: 'play',
    translation: 'играть',
    image: 'img/play.jpg',
    audioSrc: 'audio/play.mp3'
  }, {
    word: 'point',
    translation: 'указывать',
    image: 'img/point.jpg',
    audioSrc: 'audio/point.mp3'
  }, {
    word: 'ride',
    translation: 'ездить',
    image: 'img/ride.jpg',
    audioSrc: 'audio/ride.mp3'
  }, {
    word: 'run',
    translation: 'бегать',
    image: 'img/run.jpg',
    audioSrc: 'audio/run.mp3'
  }, {
    word: 'sing',
    translation: 'петь',
    image: 'img/sing.jpg',
    audioSrc: 'audio/sing.mp3'
  }, {
    word: 'skip',
    translation: 'пропускать, прыгать',
    image: 'img/skip.jpg',
    audioSrc: 'audio/skip.mp3'
  }, {
    word: 'swim',
    translation: 'плавать',
    image: 'img/swim.jpg',
    audioSrc: 'audio/swim.mp3'
  }]
}, {
  name: 'Animal (set A)',
  listCards: [{
    word: 'cat',
    translation: 'кот',
    image: 'img/cat.jpg',
    audioSrc: 'audio/cat.mp3'
  }, {
    word: 'chick',
    translation: 'цыплёнок',
    image: 'img/chick.jpg',
    audioSrc: 'audio/chick.mp3'
  }, {
    word: 'chicken',
    translation: 'курица',
    image: 'img/chicken.jpg',
    audioSrc: 'audio/chicken.mp3'
  }, {
    word: 'dog',
    translation: 'собака',
    image: 'img/dog.jpg',
    audioSrc: 'audio/dog.mp3'
  }, {
    word: 'horse',
    translation: 'лошадь',
    image: 'img/horse.jpg',
    audioSrc: 'audio/horse.mp3'
  }, {
    word: 'pig',
    translation: 'свинья',
    image: 'img/pig.jpg',
    audioSrc: 'audio/pig.mp3'
  }, {
    word: 'rabbit',
    translation: 'кролик',
    image: 'img/rabbit.jpg',
    audioSrc: 'audio/rabbit.mp3'
  }, {
    word: 'sheep',
    translation: 'овца',
    image: 'img/sheep.jpg',
    audioSrc: 'audio/sheep.mp3'
  }]
}, {
  name: 'Animal (set B)',
  listCards: [{
    word: 'bird',
    translation: 'птица',
    image: 'img/bird.jpg',
    audioSrc: 'audio/bird.mp3'
  }, {
    word: 'fish',
    translation: 'рыба',
    image: 'img/fish1.jpg',
    audioSrc: 'audio/fish.mp3'
  }, {
    word: 'frog',
    translation: 'жаба',
    image: 'img/frog.jpg',
    audioSrc: 'audio/frog.mp3'
  }, {
    word: 'giraffe',
    translation: 'жирафа',
    image: 'img/giraffe.jpg',
    audioSrc: 'audio/giraffe.mp3'
  }, {
    word: 'lion',
    translation: 'лев',
    image: 'img/lion.jpg',
    audioSrc: 'audio/lion.mp3'
  }, {
    word: 'mouse',
    translation: 'мышь',
    image: 'img/mouse.jpg',
    audioSrc: 'audio/mouse.mp3'
  }, {
    word: 'turtle',
    translation: 'черепаха',
    image: 'img/turtle.jpg',
    audioSrc: 'audio/turtle.mp3'
  }, {
    word: 'dolphin',
    translation: 'дельфин',
    image: 'img/dolphin.jpg',
    audioSrc: 'audio/dolphin.mp3'
  }]
}, {
  name: 'Clothes',
  listCards: [{
    word: 'skirt',
    translation: 'юбка',
    image: 'img/skirt.jpg',
    audioSrc: 'audio/skirt.mp3'
  }, {
    word: 'pants',
    translation: 'брюки',
    image: 'img/pants.jpg',
    audioSrc: 'audio/pants.mp3'
  }, {
    word: 'blouse',
    translation: 'блузка',
    image: 'img/blouse.jpg',
    audioSrc: 'audio/blouse.mp3'
  }, {
    word: 'dress',
    translation: 'платье',
    image: 'img/dress.jpg',
    audioSrc: 'audio/dress.mp3'
  }, {
    word: 'boot',
    translation: 'ботинок',
    image: 'img/boot.jpg',
    audioSrc: 'audio/boot.mp3'
  }, {
    word: 'shirt',
    translation: 'рубашка',
    image: 'img/shirt.jpg',
    audioSrc: 'audio/shirt.mp3'
  }, {
    word: 'coat',
    translation: 'пальто',
    image: 'img/coat.jpg',
    audioSrc: 'audio/coat.mp3'
  }, {
    word: 'shoe',
    translation: 'туфли',
    image: 'img/shoe.jpg',
    audioSrc: 'audio/shoe.mp3'
  }]
}, {
  name: 'Emotions',
  listCards: [{
    word: 'sad',
    translation: 'грустный',
    image: 'img/sad.jpg',
    audioSrc: 'audio/sad.mp3'
  }, {
    word: 'angry',
    translation: 'сердитый',
    image: 'img/angry.jpg',
    audioSrc: 'audio/angry.mp3'
  }, {
    word: 'happy',
    translation: 'счастливый',
    image: 'img/happy.jpg',
    audioSrc: 'audio/happy.mp3'
  }, {
    word: 'tired',
    translation: 'уставший',
    image: 'img/tired.jpg',
    audioSrc: 'audio/tired.mp3'
  }, {
    word: 'surprised',
    translation: 'удивлённый',
    image: 'img/surprised.jpg',
    audioSrc: 'audio/surprised.mp3'
  }, {
    word: 'scared',
    translation: 'испуганный',
    image: 'img/scared.jpg',
    audioSrc: 'audio/scared.mp3'
  }, {
    word: 'smile',
    translation: 'улыбка',
    image: 'img/smile.jpg',
    audioSrc: 'audio/smile.mp3'
  }, {
    word: 'laugh',
    translation: 'смех',
    image: 'img/laugh.jpg',
    audioSrc: 'audio/laugh.mp3'
  }]
}];

/***/ })

/******/ });
//# sourceMappingURL=script.js.map