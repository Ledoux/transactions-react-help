'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Helper = require('./Helper');

var _Helper2 = _interopRequireDefault(_Helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getUpdatedSearchString = require('../utils/navigation').default.getUpdatedSearchString;

var Helpers = function (_Component) {
  _inherits(Helpers, _Component);

  function Helpers() {
    _classCallCheck(this, Helpers);

    var _this = _possibleConstructorReturn(this, (Helpers.__proto__ || Object.getPrototypeOf(Helpers)).call(this));

    _this.state = {
      isPrevious: false
    };
    return _this;
  }

  _createClass(Helpers, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // reset the index
      var search = getUpdatedSearchString({
        helperStepIndex: 0
      });
      history.push({ search: search });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      // when we want to go back, we need actually
      // to force one time a refresh to reload all the tooltips
      // in the same group
      var _props = this.props,
          isPrevious = _props.isPrevious,
          pathname = _props.pathname,
          stepIndex = _props.stepIndex;

      if (!isPrevious && stepIndex < prevProps.stepIndex) {
        this.setState({ isPrevious: true });
        return;
      }
      if (isPrevious && stepIndex > prevProps.stepIndex) {
        this.setState({ isPrevious: false });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          collectionName = _props2.collectionName,
          helpersByCollectionName = _props2.helpersByCollectionName,
          history = _props2.history,
          pathname = _props2.pathname,
          stepIndex = _props2.stepIndex;

      var helpers = helpersByCollectionName[collectionName];
      return _react2.default.createElement(
        'div',
        null,
        helpers && helpers.map(function (helper, index) {
          var isActive = void 0,
              isVisible = void 0;
          // first we decide from custom reasons if the
          // helper has to be active
          if (helper.getIsVisible) {
            isVisible = helper.getIsVisible(_this2.props);
          }
          // for the last element, we want to disappear right after clicking
          // on the Got it! button
          var isForceDisappear = helper.isForceDisappear && isVisible && helper.stepIndex === stepIndex - 1;
          // then we add the global condition
          isActive = isVisible && helper.stepIndex === stepIndex;
          return !isForceDisappear && _react2.default.createElement(_Helper2.default, _extends({
            active: isActive,
            isVisible: isVisible,
            key: index,
            onNextClick: function onNextClick(stepIndex) {
              history.push({
                search: getUpdatedSearchString({
                  helperStepIndex: stepIndex + 1
                }) });
            },
            onPreviousClick: function onPreviousClick(stepIndex) {
              history.push({
                search: getUpdatedSearchString({
                  helperStepIndex: stepIndex - 1
                }) });
            }
          }, helper));
        })
      );
    }
  }]);

  return Helpers;
}(_react.Component);

Helpers.helpersByCollectionName = {
  helpersByCollectionName: {}
};

exports.default = Helpers;