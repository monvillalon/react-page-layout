'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash.isplainobject');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.isarray');

var _lodash4 = _interopRequireDefault(_lodash3);

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _LayoutContext = require('./LayoutContext');

var _LayoutContext2 = _interopRequireDefault(_LayoutContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_PureComponent) {
  _inherits(Page, _PureComponent);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: 'getSections',
    value: function getSections(parent) {
      if ((0, _lodash2.default)(parent)) {
        // Check if the element is a section
        if (parent.type && parent.type.displayName === 'Section') {
          return _defineProperty({}, parent.props.slot, parent);
        }
        return {};
      } else if ((0, _lodash4.default)(parent)) {
        var sections = [];
        for (var i = 0, c = parent.length; i < c; i += 1) {
          sections = Object.assign({}, sections, this.getSections(parent[i]));
        }
        return sections;
      }
      return {};
    }
  }, {
    key: 'getLayout',
    value: function getLayout(name) {
      var layout = this.context.getLayout(name);
      var children = this.props.children;
      var props = _extends({}, this.props);
      delete props.layout;
      delete props.children;
      return _react2.default.createElement(layout, props, children);
    }
  }, {
    key: 'render',
    value: function render() {
      var layout = this.getLayout(this.props.layout);
      var sections = this.getSections(this.props.children);

      if (!layout) {
        throw new Error('No layout found named: \'' + this.props.layout + '\'');
      }

      return _react2.default.createElement(
        _LayoutContext2.default,
        { sections: sections },
        layout
      );
    }
  }]);

  return Page;
}(_react.PureComponent);

Page.contextTypes = {
  getLayout: _propTypes2.default.func.isRequired
};
exports.default = Page;
//# sourceMappingURL=Page.js.map