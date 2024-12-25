"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Header = function Header() {
  return /*#__PURE__*/_react["default"].createElement("header", {
    id: "header"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    id: "logo",
    src: "https://i.pinimg.com/236x/ab/dc/aa/abdcaa395563fee65a329ad8bb192509.jpg",
    alt: ""
  }), /*#__PURE__*/_react["default"].createElement("div", {
    id: "headerDIV"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/",
    "class": "P!",
    id: "headerP1",
    c: true
  }, "Home"), /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://github.com/naconmizu",
    "class": "P@",
    id: "headerP2"
  }, "github"), /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://www.instagram.com/somi1one/",
    "class": "P#",
    id: "headerP3"
  }, "social media")));
};
var _default = exports["default"] = Header;