'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'Browser',
  summary: 'Show the browser logo with the version.',
  import: '',
  withStyles: true,
  extractProps: ['image', 'vendor', 'version'],
  stories: [{
    name: 'Basic',
    summary: 'The icons of web browsers are very used whenever you want to show the compatibility of your website for different versions of browsers ...',
    code: '<Browser vendor="chrome" version=">= 20.0" />',
    tabsActive: ['code']
  }]
};