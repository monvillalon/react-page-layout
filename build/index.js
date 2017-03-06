'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slot = exports.Section = exports.Page = exports.LayoutProvider = undefined;

var _LayoutProvider = require('./LayoutProvider');

var _LayoutProvider2 = _interopRequireDefault(_LayoutProvider);

var _Page = require('./Page');

var _Page2 = _interopRequireDefault(_Page);

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _Slot = require('./Slot');

var _Slot2 = _interopRequireDefault(_Slot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LayoutProvider = exports.LayoutProvider = _LayoutProvider2.default;
var Page = exports.Page = _Page2.default;
var Section = exports.Section = _Section2.default;
var Slot = exports.Slot = _Slot2.default;

exports.default = {
  LayoutProvider: LayoutProvider,
  Page: Page,
  Section: Section,
  Slot: Slot
};
//# sourceMappingURL=index.js.map