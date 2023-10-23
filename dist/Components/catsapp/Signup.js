"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _SignupValidation = _interopRequireDefault(require("./SignupValidation"));
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Signup = () => {
  const [values, setValues] = (0, _react.useState)({
    name: '',
    email: '',
    password: ''
  });
  const navigate = (0, _reactRouterDom.useNavigate)();
  const [errors, setErrors] = (0, _react.useState)({});
  const handleInput = event => {
    setValues(prev => ({
      ...prev,
      [event.target.name]: [event.target.value]
    }));
  };
  const handleSubmit = event => {
    event.preventDefault();
    const err = (0, _SignupValidation.default)(values);
    setErrors(err);
  };
  if (errors.name === "" && errors.email === "" && errors.password === "") {
    _axios.default.post('http://localhost:8081/signup', values).then(res => {
      navigate('/');
    }).catch(err => console.log(err));
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex justify-content-center align-items-center bg-primary vh-100"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-white p-3 rounded w-25"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Sign Up"), /*#__PURE__*/_react.default.createElement("form", {
    action: "",
    onSubmit: () => handleSubmit
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "name"
  }, /*#__PURE__*/_react.default.createElement("strong", null, "Name:")), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "Enter Name",
    name: "name",
    onChange: handleInput,
    className: "form-control rounded-0"
  }), errors.name && /*#__PURE__*/_react.default.createElement("span", {
    className: "text-danger"
  }, " ", errors.name)), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "email"
  }, /*#__PURE__*/_react.default.createElement("strong", null, "Email:")), /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    placeholder: "Enter Email",
    name: "email",
    onChange: handleInput,
    className: "form-control rounded-0"
  }), errors.email && /*#__PURE__*/_react.default.createElement("span", {
    className: "text-danger"
  }, errors.email)), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "password"
  }, /*#__PURE__*/_react.default.createElement("strong", null, "Password")), /*#__PURE__*/_react.default.createElement("input", {
    type: "password",
    placeholder: "Enter Password",
    name: "password",
    onChange: handleInput,
    className: "form-control rounded-0"
  }), errors.password && /*#__PURE__*/_react.default.createElement("span", {
    className: "text-danger"
  }, " ", errors.password)), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/",
    type: "submit",
    className: "btn btn-success w-100 rounded-0"
  }, "Sign Up"))));
};
var _default = exports.default = Signup;