"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = require("react-dom/client");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var App = function App() {
  return /*#__PURE__*/_react["default"].createElement("h1", null, "Ol\xE1, React no Vanilla!");
};
var root = (0, _client.createRoot)(document.getElementById("root"));
root.render(/*#__PURE__*/_react["default"].createElement(App, null));
