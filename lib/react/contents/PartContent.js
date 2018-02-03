'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsTooltipState = require('transactions-tooltip-state');

var _HelperContent = require('./HelperContent');

var _HelperContent2 = _interopRequireDefault(_HelperContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PartContent = function PartContent(_ref) {
  var collectionName = _ref.collectionName,
      decoration = _ref.decoration,
      handleStepReset = _ref.handleStepReset,
      onNextClick = _ref.onNextClick,
      onPreviousClick = _ref.onPreviousClick,
      stepIndex = _ref.stepIndex,
      visibleHelpers = _ref.visibleHelpers;

  return _react2.default.createElement(
    'div',
    null,
    visibleHelpers && visibleHelpers.map(function (visibleHelper, index) {
      var isActive = void 0;
      // for the last element, we want to disappear right after clicking
      // on the Got it! button
      var isForceDisappear = visibleHelper.isForceDisappear && visibleHelper.stepIndex === stepIndex - 1;
      // then we add the global condition
      isActive = visibleHelper.stepIndex === stepIndex;
      return !isForceDisappear && _react2.default.createElement(_HelperContent2.default, _extends({ active: isActive,
        decoration: decoration,
        key: index,
        handleStepReset: handleStepReset,
        onNextClick: onNextClick,
        onPreviousClick: onPreviousClick
      }, visibleHelper));
    })
  );
};

exports.default = (0, _transactionsTooltipState.PartContent)(PartContent);