'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsTooltipState = require('transactions-tooltip-state');

var _Part = require('./Part');

var _Part2 = _interopRequireDefault(_Part);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tutorial = function Tutorial(_ref) {
  var part = _ref.part;

  console.log('part', part);
  return _react2.default.createElement(_Part2.default, part);
};

exports.default = (0, _transactionsTooltipState.Tutorial)(Tutorial);