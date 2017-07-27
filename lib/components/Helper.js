'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactPortalTooltip = require('react-portal-tooltip');

var _reactPortalTooltip2 = _interopRequireDefault(_reactPortalTooltip);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsInterfaceWeb = require('transactions-interface-web');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Helper = function (_Component) {
  _inherits(Helper, _Component);

  function Helper() {
    _classCallCheck(this, Helper);

    var _this = _possibleConstructorReturn(this, (Helper.__proto__ || Object.getPrototypeOf(Helper)).call(this));

    _this.state = { hasScrolled: false,
      parentElement: null
    };
    _this.getHelperElement = _this._getHelperElement.bind(_this);
    _this.getParentElement = _this._getParentElement.bind(_this);
    return _this;
  }

  _createClass(Helper, [{
    key: '_getParentElement',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var parent;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // maybe the element was not there yet
                // so we set an interval for searching it
                parent = this.props.parent;
                return _context.abrupt('return', document.querySelector(parent) || new Promise(function (resolve, reject) {
                  _this2.findParentElementInterval = setInterval(function () {
                    var parentElement = document.querySelector(parent);
                    if (parentElement) {
                      clearInterval(_this2.findParentElementInterval);
                      resolve(parentElement);
                    }
                  }, 100);
                }));

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _getParentElement() {
        return _ref.apply(this, arguments);
      }

      return _getParentElement;
    }()
  }, {
    key: '_getHelperElement',
    value: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        var _this3 = this;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt('return', this.helperElement || new Promise(function (resolve, reject) {
                  _this3.findHelperElementInterval = setInterval(function () {
                    if (_this3.helperElement) {
                      clearInterval(_this3.findHelperElementInterval);
                      resolve(_this3.helperElement);
                    }
                  }, 100);
                }));

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _getHelperElement() {
        return _ref2.apply(this, arguments);
      }

      return _getHelperElement;
    }()
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this4 = this;

      if (this.props.isVisible) {
        this.getParentElement().then(function (parentElement) {
          _this4.setState({ parentElement: parentElement });
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this5 = this;

      var _props = this.props,
          active = _props.active,
          isFirefox = _props.isFirefox,
          position = _props.position,
          stepIndex = _props.stepIndex;
      var _state = this.state,
          hasScrolled = _state.hasScrolled,
          parentElement = _state.parentElement;

      if (parentElement && !hasScrolled && active && stepIndex !== 0) {
        this.setState({ hasScrolled: true });
        this.getHelperElement().then(function (helperElement) {
          // as this is an absolute positioned
          // element, it will not work in Firefox
          var scrollElement = isFirefox ? parentElement : _this5.helperElement;
          scrollElement.scrollIntoView({
            behavior: 'smooth',
            block: position === 'top' ? 'end' : 'start'
          });
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.findHelperElementInterval) {
        clearInterval(this.findHelperElementInterval);
      }
      if (this.findParentElementInterval) {
        clearInterval(this.findParentElementInterval);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      var _props2 = this.props,
          active = _props2.active,
          arrow = _props2.arrow,
          ChildComponent = _props2.ChildComponent,
          childProps = _props2.childProps,
          globalStepIndex = _props2.globalStepIndex,
          group = _props2.group,
          onNextClick = _props2.onNextClick,
          onPreviousClick = _props2.onPreviousClick,
          pathname = _props2.pathname,
          parent = _props2.parent,
          position = _props2.position,
          stepIndex = _props2.stepIndex,
          style = _props2.style,
          text = _props2.text;

      var defaultGroup = void 0;
      if (pathname) {
        defaultGroup = defaultGroup + '-' + pathname;
      }
      // const isPreviousButton = stepIndex !== 0
      var isPreviousButton = false;
      return _react2.default.createElement(
        _reactPortalTooltip2.default,
        {
          active: active,
          arrow: arrow,
          group: group || defaultGroup,
          parent: parent,
          position: position,
          style: style
        },
        _react2.default.createElement(
          'div',
          {
            className: 'helper',
            ref: function ref(_e) {
              return _this6.helperElement = _e;
            }
          },
          _react2.default.createElement(
            'div',
            { className: 'helper__child' },
            _react2.default.createElement(ChildComponent, childProps)
          ),
          _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)('helper__interaction', {
                'helper__interaction--large': isPreviousButton
              }) },
            isPreviousButton && _react2.default.createElement(
              'div',
              { className: 'helper__interaction__previous col' },
              _react2.default.createElement(
                _transactionsInterfaceWeb.Button,
                {
                  className: 'button helper__interaction__previous__button',
                  onClick: function onClick() {
                    return onPreviousClick(stepIndex);
                  }
                },
                'Previous'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'helper__interaction__next col' },
              _react2.default.createElement(
                _transactionsInterfaceWeb.Button,
                {
                  className: 'button helper__interaction__next__button',
                  onClick: function onClick() {
                    return onNextClick(stepIndex);
                  }
                },
                text || 'Next'
              )
            )
          )
        )
      );
    }
  }]);

  return Helper;
}(_react.Component);

exports.default = Helper;