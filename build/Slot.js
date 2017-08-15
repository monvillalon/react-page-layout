'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slot = function (_Component) {
  _inherits(Slot, _Component);

  function Slot() {
    _classCallCheck(this, Slot);

    return _possibleConstructorReturn(this, (Slot.__proto__ || Object.getPrototypeOf(Slot)).apply(this, arguments));
  }

  _createClass(Slot, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          component = _props.component,
          wrapper = _props.wrapper;

      var section = this.context.getSection(this.props.name);
      var children = section ? section.props.children : this.props.children;
      var props = { className: className, style: style };

      if (!children) {
        return false;
      }

      if (wrapper) {
        return _react2.default.cloneElement(wrapper, props, children);
      }

      return _react2.default.createElement(component, props, children);
    }
  }]);

  return Slot;
}(_react.Component);

Slot.contextTypes = {
  getSection: _propTypes2.default.func.isRequired
};
Slot.defaultProps = {
  component: 'div',
  wrapper: undefined,
  className: undefined,
  style: {},
  children: false
};
exports.default = Slot;
//# sourceMappingURL=Slot.js.map