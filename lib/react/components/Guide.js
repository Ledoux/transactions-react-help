'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsCmsWeb = require('transactions-cms-web');

var _transactionsTooltipState = require('transactions-tooltip-state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Guide = function Guide(_ref) {
  var tutorialName = _ref.location.query.tutorialName;

  return _react2.default.createElement(
    'div',
    null,
    tutorialName && _react2.default.createElement(_transactionsCmsWeb.Pick, { collectionName: 'tutorials',
      query: { name: tutorialName } })
  );
};

exports.default = (0, _transactionsTooltipState.Guide)(Guide);