'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsTooltipState = require('transactions-tooltip-state');

var _Helper = require('./Helper');

var _Helper2 = _interopRequireDefault(_Helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tutorial = function Tutorial(props) {
  var collectionName = props.collectionName,
      handleStepReset = props.handleStepReset,
      helpers = props.helpers,
      onNextClick = props.onNextClick,
      onPreviousClick = props.onPreviousClick,
      pathname = props.pathname,
      stepIndex = props.stepIndex;

  return _react2.default.createElement(
    'div',
    null,
    helpers && helpers.map(function (helper, index) {
      var isActive = void 0,
          isVisible = void 0;
      // first we decide from custom reasons if the
      // helper has to be active
      if (helper.getIsVisible) {
        isVisible = helper.getIsVisible(props);
      }
      // for the last element, we want to disappear right after clicking
      // on the Got it! button
      var isForceDisappear = helper.isForceDisappear && isVisible && helper.stepIndex === stepIndex - 1;
      // then we add the global condition
      isActive = isVisible && helper.stepIndex === stepIndex;
      console.log('isActive', isActive, 'isVisible', isVisible);
      return !isForceDisappear && _react2.default.createElement(_Helper2.default, _extends({ active: isActive,
        isVisible: isVisible,
        key: index,
        handleStepReset: handleStepReset,
        onNextClick: onNextClick,
        onPreviousClick: onPreviousClick
      }, helper));
    })
  );
};

exports.default = (0, _transactionsTooltipState.Tutorial)(Tutorial);