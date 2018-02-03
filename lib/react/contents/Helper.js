'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactPortalTooltip = require('react-portal-tooltip');

var _reactPortalTooltip2 = _interopRequireDefault(_reactPortalTooltip);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsInterfaceWeb = require('transactions-interface-web');

var _transactionsTooltipState = require('transactions-tooltip-state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Helper = function Helper(_ref) {
  var active = _ref.active,
      arrow = _ref.arrow,
      ChildComponent = _ref.ChildComponent,
      childProps = _ref.childProps,
      globalStepIndex = _ref.globalStepIndex,
      group = _ref.group,
      handleStepReset = _ref.handleStepReset,
      isLast = _ref.isLast,
      onNextClick = _ref.onNextClick,
      onPreviousClick = _ref.onPreviousClick,
      pathname = _ref.pathname,
      parent = _ref.parent,
      position = _ref.position,
      setHelperElement = _ref.setHelperElement,
      stepIndex = _ref.stepIndex,
      style = _ref.style,
      text = _ref.text;

  var defaultGroup = void 0;
  if (pathname) {
    defaultGroup = defaultGroup + '-' + pathname;
  }
  // const isPreviousButton = stepIndex !== 0
  var isPreviousButton = false;
  return _react2.default.createElement(
    _reactPortalTooltip2.default,
    { active: active,
      arrow: arrow,
      group: group || defaultGroup,
      parent: parent,
      position: position,
      style: style },
    _react2.default.createElement(
      'div',
      { className: 'helper',
        ref: function ref(_e) {
          return setHelperElement(_e);
        } },
      _react2.default.createElement(
        'div',
        { className: 'helper__child' },
        _react2.default.createElement(ChildComponent, childProps)
      ),
      _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('helper__interaction flex items-center justify-center', {
            'helper__interaction--large': isPreviousButton
          }) },
        isPreviousButton && _react2.default.createElement(
          'div',
          { className: 'helper__interaction__previous' },
          _react2.default.createElement(
            _transactionsInterfaceWeb.Button,
            { className: 'button helper__interaction__previous__button',
              onClick: function onClick() {
                return onPreviousClick(stepIndex);
              } },
            'Previous'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'helper__interaction__next' },
          _react2.default.createElement(
            _transactionsInterfaceWeb.Button,
            { className: 'button helper__interaction__next__button',
              onClick: function onClick() {
                onNextClick(stepIndex);
                if (isLast) {
                  handleStepReset && handleStepReset();
                }
              } },
            text || 'Next'
          )
        )
      )
    )
  );
};

exports.default = (0, _transactionsTooltipState.Helper)(Helper);