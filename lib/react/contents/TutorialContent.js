'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsTooltipState = require('transactions-tooltip-state');

var _PartContent = require('./PartContent');

var _PartContent2 = _interopRequireDefault(_PartContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TutorialContent = function TutorialContent(_ref) {
  var decoration = _ref.decoration,
      part = _ref.part;

  return _react2.default.createElement(_PartContent2.default, _extends({ decoration: decoration }, part));
};

exports.default = (0, _transactionsTooltipState.TutorialContent)(TutorialContent);