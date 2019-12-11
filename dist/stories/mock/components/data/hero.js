"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnimatedHero = function (_Component) {
  _inherits(AnimatedHero, _Component);

  function AnimatedHero() {
    _classCallCheck(this, AnimatedHero);

    return _possibleConstructorReturn(this, (AnimatedHero.__proto__ || Object.getPrototypeOf(AnimatedHero)).apply(this, arguments));
  }

  _createClass(AnimatedHero, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 642.1 646.6", className: "main-svg" },
        _react2.default.createElement(
          "g",
          { id: "moon" },
          _react2.default.createElement("circle", { fill: "#93959E", cx: "305.5", cy: "350.4", r: "135.7" }),
          _react2.default.createElement("circle", { fill: "#D2D3D4", cx: "291.1", cy: "333.7", r: "105.4" }),
          _react2.default.createElement("circle", { fill: "#D2D3D4", cx: "346.2", cy: "253.8", r: "25.4" }),
          _react2.default.createElement("circle", { fill: "#D2D3D4", cx: "406.3", cy: "325.9", r: "24.5" }),
          _react2.default.createElement("circle", { fill: "#D2D3D4", cx: "247.8", cy: "419.6", r: "27.6" }),
          _react2.default.createElement("circle", { fill: "#FAFAFA", cx: "338.9", cy: "249.5", r: "17.7" }),
          _react2.default.createElement("circle", { fill: "#FAFAFA", cx: "400.9", cy: "323.7", r: "19.1" }),
          _react2.default.createElement("circle", { fill: "#FAFAFA", cx: "273.5", cy: "320.1", r: "18.7" }),
          _react2.default.createElement("circle", { fill: "#FAFAFA", cx: "245.3", cy: "415.9", r: "20.7" }),
          _react2.default.createElement("circle", { fill: "#FAFAFA", cx: "217.5", cy: "282.2", r: "7.1" }),
          _react2.default.createElement("circle", { fill: "#FAFAFA", cx: "337.5", cy: "361.5", r: "6.9" }),
          _react2.default.createElement("circle", { opacity: ".52", fill: "#D2D3D4", cx: "374.5", cy: "437.2", r: "12.4" })
        ),
        _react2.default.createElement(
          "g",
          { id: "astronaut" },
          _react2.default.createElement("ellipse", { opacity: ".19", fill: "#1A222D", cx: "297.7", cy: "225.2", rx: "40.7", ry: "10" }),
          _react2.default.createElement("circle", { fill: "#9B835C", cx: "270.1", cy: "179.8", r: "4.8" }),
          _react2.default.createElement("circle", { fill: "#9B835C", cx: "318.9", cy: "202", r: "4.8" }),
          _react2.default.createElement("path", {
            fill: "#86878E",
            d: "M321 184.5c-.7-6.4-10.6-8.2-10.6-8.2s-11.1 1.1-18.1.7c-6.7-.4-9.7 5.5-10 6.1-5 2.9-7.9-4.9-7.9-4.9l-7.9 7.8c6.7 7.9 6.4 10.2 11.1 11.8 2 .7 4.6-.4 7-1.9l.2.9.2 5.7 1.6 17.4h11.6l2.6-15 1.9 15h9.9l3.3-17 7.9-2.2c0 .1-2.1-9.8-2.8-16.2z"
          }),
          _react2.default.createElement("circle", { id: "head", className: "drop", fill: "#93959E", cx: "300.9", cy: "158.7", r: "20.2" }),
          _react2.default.createElement("path", {
            id: "mask",
            opacity: ".57",
            fill: "#1A222D",
            d: "M310.7 169.7c.5-1.4.8-3 .8-4.6 0-7.3-5.9-13.3-13.3-13.3s-13.3 5.9-13.3 13.3c0 1.5.3 3 .7 4.3 4 1.9 13.2 5 25.1.3z"
          }),
          _react2.default.createElement(
            "g",
            { fill: "#575C66" },
            _react2.default.createElement("path", { d: "M286.9 217c-2.3.8-3.9 2.4-3.9 4.1 0 2.7 3.5 4.8 7.7 4.8 4.3 0 7.7-2.1 7.7-4.8 0-.7-.3-1.4-.7-2-5.7 2.3-10.8-2.1-10.8-2.1zM313.2 216.3c-2.3 3-8 2.9-10.3 2.7-.3.5-.4 1-.4 1.6 0 2.7 3.3 4.8 7.4 4.8s7.4-2.1 7.4-4.8c0-1.9-1.7-3.5-4.1-4.3zM286.1 217zM313.3 216.2h-.1c-.1.1 0 .1.1 0-.1 0-.1 0 0 0z" })
          ),
          _react2.default.createElement("ellipse", { fill: "#93959E", cx: "300.5", cy: "190.6", rx: "11.1", ry: "8.8" }),
          _react2.default.createElement("path", { fill: "#93959E", d: "M267.1 153.6h2.4V226h-2.4z" }),
          _react2.default.createElement("ellipse", {
            transform: "matrix(.9 .436 -.436 .9 103.474 -100.119)",
            fill: "#9B835C",
            cx: "269.8",
            cy: "175.3",
            rx: "3",
            ry: "1.4"
          }),
          _react2.default.createElement("path", { fill: "#B7CAAF", d: "M235.7 143.7h33.8V166h-33.8z" }),
          _react2.default.createElement("path", {
            fill: "#D9E9D7",
            d: "M252.3 147.1l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.4 2.4.8-5-3.5-3.5 4.9-.7z"
          })
        ),
        _react2.default.createElement(
          "g",
          { id: "bang" },
          _react2.default.createElement("path", {
            fill: "#E0715D",
            d: "M301.3 130.2c-.5 0-.9-.2-1.3-.5-.4-.4-.5-.8-.5-1.3s.2-.9.5-1.3c.4-.4.8-.5 1.3-.5s.9.2 1.3.5c.4.4.5.8.5 1.3s-.2.9-.5 1.3c-.4.3-.8.5-1.3.5zm-1.7-17.4h3.4v3.1l-.7 8.7h-1.9l-.7-8.7v-3.1z"
          }),
          _react2.default.createElement("path", {
            fill: "none",
            stroke: "#E0715D",
            strokeMiterlimit: "10",
            d: "M314.1 131.7l10.1-9.7M327.7 147.1l10.7-5.4M276.7 124l9.4 10M271.3 138.4l9.3 3.3"
          })
        ),
        _react2.default.createElement(
          "g",
          { id: "cow" },
          _react2.default.createElement("path", {
            className: "legl",
            fill: "#B9B9BA",
            d: "M275.1 90.6l-15.2 6.5s-3.7 3 0 2.8c3.7-.2 17.9-2.8 17.9-2.8l-2.7-6.5z"
          }),
          _react2.default.createElement("path", {
            fill: "#D2D3D4",
            d: "M267.9 46.7s13.1-3.7 15.3 5.9c0 0 5 17.5 0 22.5 0 0-10.9 5.9-18.1 0 0 0-3.4-1.9-3.1-8.7s1.5-19 5.9-19.7z"
          }),
          _react2.default.createElement("path", {
            fill: "#93959E",
            d: "M281.7 49.8s7.1 1.6 9.3 0c2.2-1.6 0 3.7 0 3.7s-5 4.7-7.2 2.8c-2.2-1.8-2.1-6.5-2.1-6.5z"
          }),
          _react2.default.createElement("path", {
            fill: "#D2D3D4",
            d: "M266.7 50.3s-7.1 1.6-9.3 0c-2.2-1.6 0 3.7 0 3.7s5 4.7 7.2 2.8c2.1-1.8 2.1-6.5 2.1-6.5z"
          }),
          _react2.default.createElement("path", { fill: "#93959E", d: "M273.1 46s3 19.5 12.2 16.7c0 0 .4-18.5-12.2-16.7z" }),
          _react2.default.createElement("circle", { fill: "#93959E", cx: "276.9", cy: "64.1", r: "1.2" }),
          _react2.default.createElement("circle", { fill: "#93959E", cx: "269.9", cy: "64.2", r: "1.1" }),
          _react2.default.createElement("path", {
            className: "legl",
            fill: "#D2D3D4",
            d: "M276.3 95.3l-16.5 7s-4 3.3 0 3c4-.2 19.4-3 19.4-3l-2.9-7z"
          }),
          _react2.default.createElement("path", {
            className: "legr",
            fill: "#B9B9BA",
            d: "M331.4 89.2l15.2 6.5s3.7 3 0 2.8c-3.7-.2-17.9-2.8-17.9-2.8l2.7-6.5z"
          }),
          _react2.default.createElement("path", {
            className: "legr",
            fill: "#D2D3D4",
            d: "M330.2 93.9l16.5 7s4 3.3 0 3-19.4-3-19.4-3l2.9-7z"
          }),
          _react2.default.createElement("path", {
            fill: "#D2D3D4",
            d: "M273.1 81.2s-5.1-23.8 45.7-19.4c0 0 17.3 4.2 16.1 22.4S330 101 330 101l-53.1 1.2s-1-2.2-1.9-5.4c-1.5-4.3-2.9-10.6-1.9-15.6z"
          }),
          _react2.default.createElement("path", {
            fill: "#D6AA51",
            d: "M267.9 49.9c-.9.3-1.9-.2-2.2-1.1l-1.2-3.6c-.3-.9.2-1.9 1.1-2.2.9-.3 1.9.2 2.2 1.1l1.2 3.6c.3.9-.2 1.9-1.1 2.2zM278.8 49.6c-.9-.3-1.4-1.3-1.1-2.2l1.2-3.6c.3-.9 1.3-1.4 2.2-1.1.9.3 1.4 1.3 1.1 2.2l-1.2 3.6c-.3.9-1.3 1.4-2.2 1.1z"
          }),
          _react2.default.createElement("path", {
            fill: "#E0715D",
            d: "M262 70.1s13.7-4.1 23.3 0c0 0 .9 7-9.6 8.1 0 0-12.7 2.3-13.7-8.1z"
          }),
          _react2.default.createElement("path", {
            fill: "#D6AA51",
            d: "M276.3 74.8c-.3 0-.6-.3-.6-.6v-2.6c0-.3.3-.6.6-.6s.6.3.6.6v2.6c0 .3-.3.6-.6.6zM270.5 75c-.3 0-.6-.3-.6-.6v-2.6c0-.3.3-.6.6-.6s.6.3.6.6v2.6c0 .3-.3.6-.6.6z"
          }),
          _react2.default.createElement("path", {
            fill: "#93959E",
            d: "M293.9 62.6s-1.8 9.1 6.4 7.5c8.2-1.6 8.6 3.6 8.6 3.6s8.9 1.2 6.1-3.3c-2.8-4.4-3.8-9-3.8-9s-14.6-1.9-17.3 1.2zM273.4 85.1s3.4-7.7 5.8-1.3c2.3 6.4 9.7 6.3 10.2 6s9.7 5.5-.1 6c-9.8.5-14.9 0-14.9 0s-2.2-9.5-1-10.7zM333.7 75s-16.9 7.6-10 9.1c7.1 1.5 5 6.6 5 6.6s4.5 3.4 5.8-1.4c1.6-5.9-.2-12.9-.8-14.3zM310.3 90.6s.7-13.5 4.9-7.2 1.5 14.1 5.6 11.8c4.2-2.3 0 6.1 0 6.1l-14.1.3c.1 0-6.3-8.9 3.6-11zM290.6 79.1s1.2-4.5 3.9-1.5c2.7 2.9 4.3 2.8 4.9 2.8s3.8 6.5-1 5.2-7.7-1.1-7.9-.7c-.1.3-6.2-.4.1-5.8zM330.5 69.3l18.5-2v1.1L331.1 71z"
          }),
          _react2.default.createElement("path", {
            fill: "#626368",
            d: "M347.5 66.3l4-4.4-1.3 2.9 1.3-.6-.8 2.1 1.9 1-2 1.9 1.5 2-4.9-2z"
          }),
          _react2.default.createElement("ellipse", {
            fill: "none",
            stroke: "#D6AA51",
            strokeMiterlimit: "10",
            cx: "273.6",
            cy: "42",
            rx: "15.6",
            ry: "6"
          }),
          _react2.default.createElement("circle", { opacity: ".19", fill: "#93959E", cx: "273.3", cy: "57", r: "28.7" })
        )
      );
    }
  }]);

  return AnimatedHero;
}(_react.Component);

exports.default = AnimatedHero;