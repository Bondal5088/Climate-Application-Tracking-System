"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./App.css");
var _Login = _interopRequireDefault(require("./Components/catsapp/Login"));
var _Signup = _interopRequireDefault(require("./Components/catsapp/Signup"));
var _CatsApp = _interopRequireDefault(require("./Components/catsapp/CatsApp"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function App() {
  return /*#__PURE__*/React.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/React.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(_Login.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/signup",
    element: /*#__PURE__*/React.createElement(_Signup.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/catsapp",
    element: /*#__PURE__*/React.createElement(_CatsApp.default, null)
  })));
}
var _default = exports.default = App;