'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: fixed;\n  width: 50%;\n  margin: 0 auto;\n  right: 0px;\n  left: 0px;\n  text-align: center;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  background: ', ';\n  padding: 5% 0;\n  max-width: 560px;\n  color: ', ';\n  border: 5px solid ', ';\n  font-size: 22px;\n  transition: 0.5s all ease;\n  top: 0px;\n  transform: translateY(-108px);\n  ', ';\n\n  ', ';\n'], ['\n  position: fixed;\n  width: 50%;\n  margin: 0 auto;\n  right: 0px;\n  left: 0px;\n  text-align: center;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  background: ', ';\n  padding: 5% 0;\n  max-width: 560px;\n  color: ', ';\n  border: 5px solid ', ';\n  font-size: 22px;\n  transition: 0.5s all ease;\n  top: 0px;\n  transform: translateY(-108px);\n  ', ';\n\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    transform: translateY(0px);\n  '], ['\n    transform: translateY(0px);\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n  background: none;\n  border: 2px solid ', ';\n  color: ', ';\n  margin: 2%;\n  border-radius: 5px;\n  padding: 2%;\n  font-size: 14px;\n  text-transform: uppercase;\n'], ['\n  background: none;\n  border: 2px solid ', ';\n  color: ', ';\n  margin: 2%;\n  border-radius: 5px;\n  padding: 2%;\n  font-size: 14px;\n  text-transform: uppercase;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\nmargin: 3% auto;\ndisplay: block;\n'], ['\nmargin: 3% auto;\ndisplay: block;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _defaults = require('../defaults');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _reactFeather = require('react-feather');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.options.background;
}, function (props) {
  return props.options.color;
}, function (props) {
  return (0, _polished.darken)(0.05, props.options.background);
}, function (props) {
  return props.show && (0, _styledComponents.css)(_templateObject2);
}, '' /* @media (max-width: 700px) {
      width: 100%;
      height: 100vh;
      position: fixed;
      padding-top: 30vh;
      background: rgba(255, 255, 255, 0.7);
      } */);

var Button = _styledComponents2.default.button(_templateObject3, function (props) {
  return props.options.color;
}, function (props) {
  return props.options.color;
});

var icon = (0, _styledComponents.css)(_templateObject4);

var SuccessIcon = (0, _styledComponents2.default)(_reactFeather.CheckCircle)(_templateObject5, icon);
var WarningIcon = (0, _styledComponents2.default)(_reactFeather.AlertCircle)(_templateObject5, icon);
var ErrorIcon = (0, _styledComponents2.default)(_reactFeather.XCircle)(_templateObject5, icon);
var ConfirmationIcon = (0, _styledComponents2.default)(_reactFeather.Info)(_templateObject5, icon);

/* React Notification Component */

var Toast = function (_React$Component) {
  _inherits(Toast, _React$Component);

  function Toast() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Toast);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toast.__proto__ || Object.getPrototypeOf(Toast)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      show: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Toast, [{
    key: 'animateState',
    value: function animateState() {
      var _this2 = this;

      // Show
      setTimeout(function () {
        _this2.setState({ show: true });
      }, 100); // wait 100ms after the component is called to animate toast.

      if (this.props.options.type !== 'confirmation') {
        // Hide after timeout
        setTimeout(function () {
          _this2.setState({
            show: false
          });
        }, this.props.options.timeout);
      } else {
        console.log('confirmation');
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.animateState();
    }
  }, {
    key: 'render',
    value: function render() {
      var text = this.props.text;


      return _react2.default.createElement(
        Wrapper,
        { show: this.state.show, options: this.props.options },
        _react2.default.createElement(
          'span',
          null,
          this.props.options.type === 'success' && _react2.default.createElement(SuccessIcon, { size: 60 }),
          this.props.options.type === 'warning' && _react2.default.createElement(WarningIcon, { size: 60 }),
          this.props.options.type === 'error' && _react2.default.createElement(ErrorIcon, { size: 60 }),
          this.props.options.type === 'confirmation' && _react2.default.createElement(ConfirmationIcon, { size: 60 }),
          text,
          this.props.options.type === 'confirmation' && _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              Button,
              { options: this.props.options, onClick: this.props.confirm },
              'Confirm'
            ),
            _react2.default.createElement(
              Button,
              { options: this.props.options, onClick: this.props.deny },
              'Cancel'
            )
          )
        )
      );
    }
  }]);

  return Toast;
}(_react2.default.Component);

exports.default = Toast;