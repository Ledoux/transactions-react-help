'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsTooltipState = require('transactions-tooltip-state');

var _Tutorial = require('./Tutorial');

var _Tutorial2 = _interopRequireDefault(_Tutorial);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Guide = function Guide(_ref) {
  var tutorial = _ref.tutorial;
  return _react2.default.createElement(_Tutorial2.default, tutorial);
};

exports.default = (0, _transactionsTooltipState.Guide)(Guide);