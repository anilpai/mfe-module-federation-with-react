"use strict";
(self["webpackChunkremote1"] = self["webpackChunkremote1"] || []).push([[575],{

/***/ 575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: remote libs/react
var react = __webpack_require__(540);
var react_default = /*#__PURE__*/__webpack_require__.n(react);
;// CONCATENATED MODULE: ./src/App.js
var _s = $RefreshSig$();



const App = () => {
  _s();

  const [counter, setCounter] = (0,react.useState)(0);
  return /*#__PURE__*/react_default().createElement("main", null, /*#__PURE__*/react_default().createElement("h1", null, "Remote 1's counter: ", counter), /*#__PURE__*/react_default().createElement("button", {
    onClick: () => setCounter(counter => counter + 1)
  }, "increment"));
};

_s(App, "mgO7WMHyhiBnLtH7uw/qAj2Cy9A=");

_c = App;
/* harmony default export */ const src_App = (App);

var _c;

$RefreshReg$(_c, "App");
// EXTERNAL MODULE: remote libs/react-dom
var react_dom = __webpack_require__(202);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);
;// CONCATENATED MODULE: ./src/bootstrap.js



react_dom_default().render( /*#__PURE__*/react_default().createElement(src_App, null), document.getElementById('root'));

/***/ })

}]);
//# sourceMappingURL=575.js.map