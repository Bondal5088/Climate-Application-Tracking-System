"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./CatsApp.css");
var _search = _interopRequireDefault(require("../Majorfiles/search.png"));
var _clear = _interopRequireDefault(require("../Majorfiles/clear.png"));
var _clouds = _interopRequireDefault(require("../Majorfiles/clouds.png"));
var _snow = _interopRequireDefault(require("../Majorfiles/snow.png"));
var _rain = _interopRequireDefault(require("../Majorfiles/rain.png"));
var _drizzle = _interopRequireDefault(require("../Majorfiles/drizzle.png"));
var _wind = _interopRequireDefault(require("../Majorfiles/wind.png"));
var _humidity = _interopRequireDefault(require("../Majorfiles/humidity.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const CatsApp = () => {
  let api_key = "a8b77da5e489ae2ae6c426dd117803e4";
  const [imgicon, setImgicon] = (0, _react.useState)(_clouds.default);
  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=imperial&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-speed");
    const temperature = document.getElementsByClassName("climate-temp");
    const location = document.getElementsByClassName("climate-location");
    humidity[0].innerHTML = data.main.humidity + "% Humidity";
    wind[0].innerHTML = Math.round(data.wind.speed) + "mph Wind Speed";
    temperature[0].innerHTML = Math.round(data.main.temp) + "°F";
    location[0].innerHTML = data.name;
    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setImgicon(_clear.default);
    } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
      setImgicon(_clouds.default);
    } else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
      setImgicon(_drizzle.default);
    } else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
      setImgicon(_drizzle.default);
    } else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
      setImgicon(_rain.default);
    } else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
      setImgicon(_rain.default);
    } else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
      setImgicon(_snow.default);
    } else {
      setImgicon(_clear.default);
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "subhead"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Climate Application Tracking System"), /*#__PURE__*/_react.default.createElement("div", {
    className: "top-bar"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "cityInput",
    placeholder: "Enter City Name"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "search-icon",
    onClick: () => {
      search();
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _search.default,
    alt: ""
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "weather-image"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: imgicon,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "climate-temp"
  }, "0\xB0F"), /*#__PURE__*/_react.default.createElement("div", {
    className: "climate-location"
  }, "No Location"), /*#__PURE__*/_react.default.createElement("div", {
    className: "data-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "element"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _humidity.default,
    alt: "",
    className: "icon"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "data"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "humidity-percent"
  }, "0%"), /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "element"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _wind.default,
    alt: "",
    className: "icon"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "data"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "wind-speed"
  }, "0 mph"), /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  })))));
};
var _default = exports.default = CatsApp;