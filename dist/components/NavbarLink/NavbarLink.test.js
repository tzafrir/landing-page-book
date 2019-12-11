'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _NavbarLink = require('./NavbarLink');

var _NavbarLink2 = _interopRequireDefault(_NavbarLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('NavbarLink', function () {
  var props = void 0;
  var mounted = void 0;
  var navbarLink = function navbarLink() {
    if (!mounted) {
      mounted = (0, _enzyme.mount)(_react2.default.createElement(_NavbarLink2.default, props));
    }
    return mounted;
  };
  describe('NavbarLink', function () {
    beforeEach(function () {
      props = {};
      mounted = undefined;
    });

    it('should render', function () {
      expect((0, _enzyme.mount)(_react2.default.createElement(_NavbarLink2.default, props))).toMatchSnapshot();
    });

    it('always renders a div', function () {
      var divs = navbarLink().find('li');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});