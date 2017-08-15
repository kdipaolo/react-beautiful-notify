'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaults = {
  wrapperId: 'notification-wrapper',
  background: '#333',
  animationDuration: 300,
  mainColor: '#333',
  timeout: 5000,
  colors: {
    error: {
      color: '#E85742'
    },
    success: {
      color: '#55CA92'
    },
    warning: {
      color: '#F5E273'
    },
    confirmation: {
      color: '#4990E2'
    }
  }
};

function mergeOptions(options) {
  console.log('options', options);
  return Object.assign(defaults, options);
  exports.defaults = defaults = Object.assign(defaults, options);
}

exports.defaults = defaults;
exports.mergeOptions = mergeOptions;