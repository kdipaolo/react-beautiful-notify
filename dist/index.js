'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notify = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Toast = require('./components/Toast');

var _Toast2 = _interopRequireDefault(_Toast);

var _Container = require('./components/Container');

var _Container2 = _interopRequireDefault(_Container);

var _defaults = require('./defaults');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderToast(text, options, confirm) {
  var target = document.getElementById(_defaults.defaults.wrapperId);

  function handleConfirm() {
    confirm();
    hide();
  }

  _reactDom2.default.render(_react2.default.createElement(_Toast2.default, { text: text, options: options, confirm: handleConfirm, deny: hide }), target);
}

function hide() {
  var target = document.getElementById(_defaults.defaults.wrapperId);
  _reactDom2.default.unmountComponentAtNode(target);
}

function show(text, options, confirm) {
  var mergedOptions = Object.assign(_defaults.defaults, options);

  renderToast(text, mergedOptions, confirm);

  if (mergedOptions.type !== 'confirmation') {
    // Unmount react component after the animation finished.
    setTimeout(function () {
      hide();
    }, mergedOptions.timeout + mergedOptions.animationDuration);
  }
  return true;
}

/* Export notification functions */
var notify = exports.notify = {
  show: show,
  hide: hide
};

exports.default = _Container2.default;