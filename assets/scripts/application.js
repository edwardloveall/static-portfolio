'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Detector = (function () {
  function Detector() {
    _classCallCheck(this, Detector);
  }

  _createClass(Detector, null, [{
    key: 'setBodyClass',
    value: function setBodyClass() {
      var body = document.getElementsByTagName('body')[0];

      if (this.isUnsupported(bowser.name, bowser.version)) {
        body.className = 'unsupported';
        return;
      }

      var browserName = bowser.name.toLowerCase();

      if (body.className === '') {
        body.className = browserName;
      } else {
        body.className += ' ' + browserName;
      }
    }
  }, {
    key: 'isUnsupported',
    value: function isUnsupported(name, version) {
      var floatVersion = parseFloat(version);
      if (name === "Internet Explorer" && floatVersion < 11) {
        return true;
      } else if (name === "Android" && floatVersion < 4.4) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return Detector;
})();
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Navigation = (function () {
  function Navigation(selector) {
    _classCallCheck(this, Navigation);

    this.navEle = document.querySelector(selector);
    this.track = this.navEle.children.item(0);
    this.attachListeners();
  }

  _createClass(Navigation, [{
    key: 'positionNav',
    value: function positionNav(link) {
      var translateX = this.calulatePrecentageOffset(link);
      this.track.style.transform = 'translateX(' + translateX + '%)';
    }
  }, {
    key: 'calulatePrecentageOffset',
    value: function calulatePrecentageOffset(link) {
      var left = link.offsetLeft;
      var halfWidth = link.offsetWidth / 2;

      return -100 * (left + halfWidth) / this.track.offsetWidth;
    }
  }, {
    key: 'attachListeners',
    value: function attachListeners() {
      var _this = this;

      var navLinks = this.track.children;
      for (var i = 0; i < navLinks.length; i++) {
        navLinks.item(i).addEventListener('click', function (e) {
          var link = e.target;
          _this.positionNav(link);

          e.preventDefault();
        }, false);
      }
    }
  }]);

  return Navigation;
})();

//# sourceMappingURL=application.js.map