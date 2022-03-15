"use strict";
(self["webpackChunkhost"] = self["webpackChunkhost"] || []).push([[689],{

/***/ 689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: remote libs/react
var react = __webpack_require__(540);
var react_default = /*#__PURE__*/__webpack_require__.n(react);
// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(892);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(760);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(311);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(192);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(60);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(865);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!./src/App.css
var App = __webpack_require__(921);
;// CONCATENATED MODULE: ./src/App.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(App/* default */.Z, options);




       /* harmony default export */ const src_App = (App/* default */.Z && App/* default.locals */.Z.locals ? App/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: remote libs/react-router-dom
var react_router_dom = __webpack_require__(43);
// EXTERNAL MODULE: remote remote1/Heading
var Heading = __webpack_require__(0);
;// CONCATENATED MODULE: ./src/App.js




const Button = react_default().lazy(() => __webpack_require__.e(/* import() */ 165).then(__webpack_require__.t.bind(__webpack_require__, 165, 23)));

const App_App = () => {
  return /*#__PURE__*/react_default().createElement(react_router_dom.BrowserRouter, null, /*#__PURE__*/react_default().createElement("div", {
    class: "wrapper"
  }, /*#__PURE__*/react_default().createElement("header", {
    class: "header"
  }, "S360"), /*#__PURE__*/react_default().createElement("aside", {
    class: "aside"
  }, /*#__PURE__*/react_default().createElement("ul", null, /*#__PURE__*/react_default().createElement("li", null, "Services"), /*#__PURE__*/react_default().createElement("li", null, "Products"), /*#__PURE__*/react_default().createElement("li", null, "Operations"), /*#__PURE__*/react_default().createElement("li", null, "Sales"))), /*#__PURE__*/react_default().createElement("main", {
    class: "main"
  }, "Content"), /*#__PURE__*/react_default().createElement("footer", {
    class: "footer"
  }, /*#__PURE__*/react_default().createElement("span", null, "\xA9 Contoso Corp"))));
};

/* harmony default export */ const src_App_0 = (App_App);
// EXTERNAL MODULE: remote libs/react-dom
var react_dom = __webpack_require__(202);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);
;// CONCATENATED MODULE: ./src/bootstrap.js



react_dom_default().render( /*#__PURE__*/react_default().createElement(src_App_0, null), document.getElementById('root'));

/***/ }),

/***/ 921:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(559);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(476);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".wrapper {\n\theight: 100vh;\n\tdisplay: grid;\n\tgrid-template-columns: 10rem 10rem 10rem 10rem;\n  \tgrid-template-rows: auto 1fr auto;\n\tgrid-template-areas:\n\t\t\"header \t\theader \theader \theader\"\n\t\t\"sidebar \tmain \t\tmain \t\tmain\"\n\t\t\"footer \t\tfooter \tfooter\tfooter\";\n\tmax-width: 40rem;\n\twidth: 100%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tborder: 1px solid #ccc;\n\t@media (max-width: 36rem) {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n}\n\n.header {\n\tgrid-area: header;\n\tpadding: 1rem;\n\tborder-bottom: 1px solid #ccc;\n\tborder-style: dotted;\n\tborder-color: red;\n\t@media (max-width: 36rem) {\n\t\torder: 1;\n\t}\n}\n\n.main {\n\tgrid-area: main;\n\tpadding: 1rem;\n\t@media (max-width: 36rem) {\n\t\torder: 1;\n\t}\n\tborder-style: dotted;\n\tborder-color: green;\n}\n\n.aside {\n\tgrid-area: sidebar;\n\tpadding: 1rem;\n\tbackground-color: #eee;\n\tborder-right: 1px solid #ccc;\n\tborder-style: dotted;\n\tborder-color: blue;\n\t@media (max-width: 36rem) {\n\t\torder: 3;\n\t\tborder-right: 0;\n\t\tborder-top: 1px solid #ccc;\n\t}\n}\n\n.footer {\n\tgrid-area: footer;\n\tpadding: 1rem;\n\tborder-top: 1px solid #ccc;\n\tborder-style: dotted;\n\tborder-color: coral;\n\t@media (max-width: 36rem) {\n\t\torder: 4;\n\t}\n\ttext-align: right;\n}\n\n// Setup\n* {\n\tbox-sizing: border-box;\n}\n\nhtml {\n\tfont-size: 18px;\n\tfont-family: Helvetica, Arial, sans-serif;\n}\n\nbody {\n\tfont-size: 1rem;\n\tpadding: 1rem;\n\tmargin: 0;\n}\n\nul {\n    list-style: none;\n}", "",{"version":3,"sources":["webpack://./src/App.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,aAAa;CACb,8CAA8C;GAC5C,iCAAiC;CACnC;;;kCAGiC;CACjC,gBAAgB;CAChB,WAAW;CACX,iBAAiB;CACjB,kBAAkB;CAClB,sBAAsB;CACtB;EACC,aAAa;EACb,sBAAsB;CACvB;AACD;;AAEA;CACC,iBAAiB;CACjB,aAAa;CACb,6BAA6B;CAC7B,oBAAoB;CACpB,iBAAiB;CACjB;EACC,QAAQ;CACT;AACD;;AAEA;CACC,eAAe;CACf,aAAa;CACb;EACC,QAAQ;CACT;CACA,oBAAoB;CACpB,mBAAmB;AACpB;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,sBAAsB;CACtB,4BAA4B;CAC5B,oBAAoB;CACpB,kBAAkB;CAClB;EACC,QAAQ;EACR,eAAe;EACf,0BAA0B;CAC3B;AACD;;AAEA;CACC,iBAAiB;CACjB,aAAa;CACb,0BAA0B;CAC1B,oBAAoB;CACpB,mBAAmB;CACnB;EACC,QAAQ;CACT;CACA,iBAAiB;AAClB;;AAEA;;CAEC,sBAAsB;AACvB;;AAEA;CACC,eAAe;CACf,yCAAyC;AAC1C;;AAEA;CACC,eAAe;CACf,aAAa;CACb,SAAS;AACV;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":[".wrapper {\n\theight: 100vh;\n\tdisplay: grid;\n\tgrid-template-columns: 10rem 10rem 10rem 10rem;\n  \tgrid-template-rows: auto 1fr auto;\n\tgrid-template-areas:\n\t\t\"header \t\theader \theader \theader\"\n\t\t\"sidebar \tmain \t\tmain \t\tmain\"\n\t\t\"footer \t\tfooter \tfooter\tfooter\";\n\tmax-width: 40rem;\n\twidth: 100%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tborder: 1px solid #ccc;\n\t@media (max-width: 36rem) {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n}\n\n.header {\n\tgrid-area: header;\n\tpadding: 1rem;\n\tborder-bottom: 1px solid #ccc;\n\tborder-style: dotted;\n\tborder-color: red;\n\t@media (max-width: 36rem) {\n\t\torder: 1;\n\t}\n}\n\n.main {\n\tgrid-area: main;\n\tpadding: 1rem;\n\t@media (max-width: 36rem) {\n\t\torder: 1;\n\t}\n\tborder-style: dotted;\n\tborder-color: green;\n}\n\n.aside {\n\tgrid-area: sidebar;\n\tpadding: 1rem;\n\tbackground-color: #eee;\n\tborder-right: 1px solid #ccc;\n\tborder-style: dotted;\n\tborder-color: blue;\n\t@media (max-width: 36rem) {\n\t\torder: 3;\n\t\tborder-right: 0;\n\t\tborder-top: 1px solid #ccc;\n\t}\n}\n\n.footer {\n\tgrid-area: footer;\n\tpadding: 1rem;\n\tborder-top: 1px solid #ccc;\n\tborder-style: dotted;\n\tborder-color: coral;\n\t@media (max-width: 36rem) {\n\t\torder: 4;\n\t}\n\ttext-align: right;\n}\n\n// Setup\n* {\n\tbox-sizing: border-box;\n}\n\nhtml {\n\tfont-size: 18px;\n\tfont-family: Helvetica, Arial, sans-serif;\n}\n\nbody {\n\tfont-size: 1rem;\n\tpadding: 1rem;\n\tmargin: 0;\n}\n\nul {\n    list-style: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 476:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 559:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 892:
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 311:
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 60:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 192:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 760:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 865:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

}]);
//# sourceMappingURL=689.js.map