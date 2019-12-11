'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var browsers = [{
  vendor: 'firefox',
  version: '> 56'
}, {
  vendor: 'chrome',
  version: '= 62'
}, {
  vendor: 'iexplore',
  version: '> 9'
}, {
  vendor: 'safari',
  version: '> 25'
}, {
  vendor: 'netscape',
  version: '> 42.6'
}, {
  vendor: 'opera',
  version: '< 15.6'
}, {
  vendor: 'maxthon',
  version: '>= 10'
}, {
  vendor: 'flock',
  version: '>= 11'
}];

exports.default = {
  name: 'Browser Support',
  summary: 'Browser compatibility is the capability or flexibility of a website, web application, script or HTML design to function on different web browsers available in the market. Showing this information to your users will help them to save valuable time.',
  import: '',
  extractProps: ['browserImage', 'image', 'vendor', 'version'],
  stories: [{
    name: 'Basic',
    summary: '',
    code: '<BrowserSupport\n    browsers={' + JSON.stringify(browsers, null, 8) + '}\n/>',
    tabsActive: ['code']
  }, {
    name: 'Without texts',
    summary: '',
    code: '<BrowserSupport\n    showBrowserVendor={false}\n    showBrowserVersion={false} \n    browsers={' + JSON.stringify(browsers, null, 8) + '}\n/>',
    tabsActive: []
  }, {
    name: 'Gray',
    summary: '',
    code: '<BrowserSupport\n    browserImageCssFilter="grayscale(100%)"\n    showBrowserVendor={false}\n    showBrowserVersion={false}\n    imgFilter="grayscale(90%)" \n    browsers={' + JSON.stringify(browsers, null, 8) + '}\n/>',
    tabsActive: []
  }]
};