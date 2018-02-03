'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactPortalTooltip = require('react-portal-tooltip');

var _reactPortalTooltip2 = _interopRequireDefault(_reactPortalTooltip);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsInterfaceWeb = require('transactions-interface-web');

var _transactionsTooltipState = require('transactions-tooltip-state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HelperContent = function HelperContent(_ref) {
  var active = _ref.active,
      arrow = _ref.arrow,
      ContentComponent = _ref.ContentComponent,
      content = _ref.content,
      cta = _ref.cta,
      decoration = _ref.decoration,
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
      text = _ref.text;

  var defaultGroup = void 0;
  if (pathname) {
    defaultGroup = defaultGroup + '-' + pathname;
  }
  var isPreviousButton = false;
  return _react2.default.createElement(
    _reactPortalTooltip2.default,
    { active: active,
      arrow: arrow,
      group: group || defaultGroup,
      parent: parent,
      position: position,
      style: decoration },
    _react2.default.createElement(
      'div',
      { className: 'helper-content',
        ref: function ref(_e) {
          return setHelperElement(_e);
        } },
      _react2.default.createElement(
        'div',
        { className: 'helper-content__box' },
        _react2.default.createElement(ContentComponent, _extends({}, content, { text: text }))
      ),
      _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('helper-content__interaction flex items-center justify-center', {
            'helper-content__interaction--large': isPreviousButton
          }) },
        isPreviousButton && _react2.default.createElement(
          'div',
          { className: 'helper-content__interaction__previous' },
          _react2.default.createElement(
            _transactionsInterfaceWeb.Button,
            { className: 'button helper-content__interaction__previous__button',
              onClick: function onClick() {
                return onPreviousClick(stepIndex);
              } },
            'Previous'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'helper-content__interaction__next' },
          _react2.default.createElement(
            _transactionsInterfaceWeb.Button,
            { className: 'button helper-content__interaction__next__button',
              onClick: function onClick() {
                onNextClick(stepIndex);
                if (isLast) {
                  handleStepReset && handleStepReset();
                }
              } },
            cta || 'Next'
          )
        )
      )
    )
  );
};

exports.default = (0, _transactionsTooltipState.HelperContent)(HelperContent);