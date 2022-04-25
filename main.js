/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/FatChoy_hbg.png */ "./src/images/FatChoy_hbg.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*\n{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\nhtml\n{\n    height: 100%;\n}\n/* Set height of body and the document to 100% to enable \"full page tabs\" */\nbody\n{\n    min-height: 100vh;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-position: top center;\n    display: flex;\n    flex-direction: column;\n}\n\nheader\n{\n    padding: 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.links-div\n{\n    /* border: 1px solid red; */\n    max-width: 100%;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    gap: 20px;\n    flex-wrap: wrap;\n}\n\n/* Style tab links */\n.tablink \n{\n    all: unset;\n    cursor: pointer;\n    width: auto;\n    padding: 1px 20px;\n    font-size: 2rem;\n    text-align: center;\n    color: #242021;\n    transition: all .1s ease;\n}\n.tablink:hover\n{\n    border-bottom: 1px solid #242021;\n}\n\n#content\n{\n    width: 100%;\n    min-height: 100%;\n}\n\n.tablink, \n.homeTxt h1,\n#Menu h1,\n#Menu article h2,\n.foodItem h3,\n#Contact h1\n{\n    font-family: 'Permanent Marker', sans-serif;\n}\n\n#Menu p,\n.homeTxt p,\n#Contact article p\n{\n    font-family: 'Bellefair', serif;\n}\n#Home, \n#Contact\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.homeTxt,\n#Contact article\n{\n    max-width: 50%;\n    text-align: center;\n    letter-spacing: .05rem;\n    line-height: 1.5rem;\n    margin-top: 250px;\n\n    display: flex;\n    flex-flow: column wrap;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n.homeTxt h1, \n.homeTxt p,\n#Contact article h1,\n#Contact article p\n{\n    color: #242021;\n}\n.homeTxt h1,\n#Contact article h1\n{\n    font-size: 4rem;\n    line-height: 4rem;\n}\n.homeTxt button\n{\n    all: unset;\n    cursor: pointer;\n    width: 140px;\n    padding: 16px 26px;\n    border-radius: 300px;\n    background-color: #242021;\n    color: #fdfcfa;\n    font-size: 1.2rem;\n    transition: all .2s ease-in;\n}\n.homeTxt button:hover\n{\n    opacity: .7;\n}\n.homeTxt p,\n#Contact article p\n{\n    font-size: 1.7rem;\n}\n\n#Menu \n{\n    background-color: rgb(245, 248, 245);\n}\n#Menu h1,\n.openDays\n{\n    text-align: center;\n}\n.openDays p,\n.foodItem p\n{\n    font-size: 1.4rem;\n}\n#Menu h1\n{\n    font-size: 4rem;\n    line-height: 4rem;\n    padding: 30px 0;\n}\n.openDays\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n\n    /* margin-bottom: 30px; */\n}\n.dishesCont\n{\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    gap: 20px;\n    flex-wrap: wrap;\n    /* border: 1px solid gold; */\n}\n#Menu article\n{\n    width: 30%;\n    height: 100%;\n    padding: 20px;\n    /* border: 1px solid rebeccapurple; */\n    text-align: left;\n}\n#Menu  h2\n{\n    font-size: 3rem;\n}\n.foodItem\n{\n    /* border: 1px solid greenyellow; */\n    margin: 1rem 0;\n}\n.foodItem h3\n{\n    font-size: 1.95rem;\n}\n\n@media screen and (max-width:996px) {\n    #Contact article,\n    .homeTxt\n    {\n        width: 100%;\n    }\n    #Menu article\n    {\n        width: 100%;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;IAEI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;AACA;;IAEI,YAAY;AAChB;AACA,2EAA2E;AAC3E;;IAEI,iBAAiB;IACjB,yDAAiD;IACjD,+BAA+B;IAC/B,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;AACnB;;AAEA;;IAEI,2BAA2B;IAC3B,eAAe;IACf,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,SAAS;IACT,eAAe;AACnB;;AAEA,oBAAoB;AACpB;;IAEI,UAAU;IACV,eAAe;IACf,WAAW;IACX,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,cAAc;IACd,wBAAwB;AAC5B;AACA;;IAEI,gCAAgC;AACpC;;AAEA;;IAEI,WAAW;IACX,gBAAgB;AACpB;;AAEA;;;;;;;IAOI,2CAA2C;AAC/C;;AAEA;;;;IAII,+BAA+B;AACnC;AACA;;;IAGI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;;;IAGI,cAAc;IACd,kBAAkB;IAClB,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;;IAEjB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;AACA;;;;;IAKI,cAAc;AAClB;AACA;;;IAGI,eAAe;IACf,iBAAiB;AACrB;AACA;;IAEI,UAAU;IACV,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;IACpB,yBAAyB;IACzB,cAAc;IACd,iBAAiB;IACjB,2BAA2B;AAC/B;AACA;;IAEI,WAAW;AACf;AACA;;;IAGI,iBAAiB;AACrB;;AAEA;;IAEI,oCAAoC;AACxC;AACA;;;IAGI,kBAAkB;AACtB;AACA;;;IAGI,iBAAiB;AACrB;AACA;;IAEI,eAAe;IACf,iBAAiB;IACjB,eAAe;AACnB;AACA;;IAEI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;;IAET,yBAAyB;AAC7B;AACA;;IAEI,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,SAAS;IACT,eAAe;IACf,4BAA4B;AAChC;AACA;;IAEI,UAAU;IACV,YAAY;IACZ,aAAa;IACb,qCAAqC;IACrC,gBAAgB;AACpB;AACA;;IAEI,eAAe;AACnB;AACA;;IAEI,mCAAmC;IACnC,cAAc;AAClB;AACA;;IAEI,kBAAkB;AACtB;;AAEA;IACI;;;QAGI,WAAW;IACf;IACA;;QAEI,WAAW;IACf;AACJ","sourcesContent":["*\n{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\nhtml\n{\n    height: 100%;\n}\n/* Set height of body and the document to 100% to enable \"full page tabs\" */\nbody\n{\n    min-height: 100vh;\n    background-image: url('./images/FatChoy_hbg.png');\n    background-position: top center;\n    display: flex;\n    flex-direction: column;\n}\n\nheader\n{\n    padding: 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.links-div\n{\n    /* border: 1px solid red; */\n    max-width: 100%;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    gap: 20px;\n    flex-wrap: wrap;\n}\n\n/* Style tab links */\n.tablink \n{\n    all: unset;\n    cursor: pointer;\n    width: auto;\n    padding: 1px 20px;\n    font-size: 2rem;\n    text-align: center;\n    color: #242021;\n    transition: all .1s ease;\n}\n.tablink:hover\n{\n    border-bottom: 1px solid #242021;\n}\n\n#content\n{\n    width: 100%;\n    min-height: 100%;\n}\n\n.tablink, \n.homeTxt h1,\n#Menu h1,\n#Menu article h2,\n.foodItem h3,\n#Contact h1\n{\n    font-family: 'Permanent Marker', sans-serif;\n}\n\n#Menu p,\n.homeTxt p,\n#Contact article p\n{\n    font-family: 'Bellefair', serif;\n}\n#Home, \n#Contact\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.homeTxt,\n#Contact article\n{\n    max-width: 50%;\n    text-align: center;\n    letter-spacing: .05rem;\n    line-height: 1.5rem;\n    margin-top: 250px;\n\n    display: flex;\n    flex-flow: column wrap;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n.homeTxt h1, \n.homeTxt p,\n#Contact article h1,\n#Contact article p\n{\n    color: #242021;\n}\n.homeTxt h1,\n#Contact article h1\n{\n    font-size: 4rem;\n    line-height: 4rem;\n}\n.homeTxt button\n{\n    all: unset;\n    cursor: pointer;\n    width: 140px;\n    padding: 16px 26px;\n    border-radius: 300px;\n    background-color: #242021;\n    color: #fdfcfa;\n    font-size: 1.2rem;\n    transition: all .2s ease-in;\n}\n.homeTxt button:hover\n{\n    opacity: .7;\n}\n.homeTxt p,\n#Contact article p\n{\n    font-size: 1.7rem;\n}\n\n#Menu \n{\n    background-color: rgb(245, 248, 245);\n}\n#Menu h1,\n.openDays\n{\n    text-align: center;\n}\n.openDays p,\n.foodItem p\n{\n    font-size: 1.4rem;\n}\n#Menu h1\n{\n    font-size: 4rem;\n    line-height: 4rem;\n    padding: 30px 0;\n}\n.openDays\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n\n    /* margin-bottom: 30px; */\n}\n.dishesCont\n{\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    gap: 20px;\n    flex-wrap: wrap;\n    /* border: 1px solid gold; */\n}\n#Menu article\n{\n    width: 30%;\n    height: 100%;\n    padding: 20px;\n    /* border: 1px solid rebeccapurple; */\n    text-align: left;\n}\n#Menu  h2\n{\n    font-size: 3rem;\n}\n.foodItem\n{\n    /* border: 1px solid greenyellow; */\n    margin: 1rem 0;\n}\n.foodItem h3\n{\n    font-size: 1.95rem;\n}\n\n@media screen and (max-width:996px) {\n    #Contact article,\n    .homeTxt\n    {\n        width: 100%;\n    }\n    #Menu article\n    {\n        width: 100%;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
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

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
const getContentDiv = document.getElementById('content');


function contact()
{
    const contactSection = document.createElement('section');
    const AddrInfo = document.createElement('article');
    const contTitle = document.createElement('h1');
    const contAddr = document.createElement('p');
    const contPhone = document.createElement('p');

    contactSection.classList.add('tabcontent');
    contactSection.setAttribute('id', 'Contact');

    contTitle.innerHTML = 'INDOOR & OUTDOOR DINING // TAKEOUT & DELIVERY';
    contAddr.innerHTML = '250 Broome Street, New York, NY, 10002';
    contPhone.innerHTML = '(347) 778-5889';

    AddrInfo.append(contTitle, contAddr, contPhone);
    contactSection.append(AddrInfo);

    getContentDiv.append(contactSection);
}



/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
const getBody = document.querySelector('body');
const getContentDiv = document.getElementById('content');


let home = function()
{
    const getHomeDiv = document.createElement('div');
    getHomeDiv.classList.add('tabcontent');
    getHomeDiv.setAttribute('id', 'Home');

    const textDiv = document.createElement('div');
    const homeTitle = document.createElement('h1');
    const homeCta = document.createElement('button');
    const homeTxt = document.createElement('p');

    homeTitle.innerHTML = 'YOUR KIND OF CHINESE & VEGAN';
    homeCta.innerHTML = 'Order Online';
    homeTxt.innerHTML = '250 Broome Street, New York, NY, 10002'

    textDiv.classList.add('homeTxt');
    textDiv.append(homeTitle, homeCta,homeTxt);
    
    getHomeDiv.append(textDiv);

    getContentDiv.append(getHomeDiv);

}



/***/ }),

/***/ "./src/modules/mainElements.js":
/*!*************************************!*\
  !*** ./src/modules/mainElements.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setHeader": () => (/* binding */ setHeader)
/* harmony export */ });
/* harmony import */ var _images_FatChoy_Logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/FatChoy_Logo.png */ "./src/images/FatChoy_Logo.png");


const getBody = document.querySelector('body');
const getContentDiv = document.getElementById('content');

let setHeader = () => {
    let tabButt = ['Home', 'Menu', 'Contact'];
    const headerTag = document.createElement('header');
    const headerLinks = document.createElement('div');
    const logoArea = document.createElement('a');
    const logoImgLink = document.createElement('img');

    logoArea.setAttribute('href','index.html');
    logoImgLink.setAttribute('src', _images_FatChoy_Logo_png__WEBPACK_IMPORTED_MODULE_0__);

    headerLinks.classList.add('links-div');

    logoArea.append(logoImgLink);

    headerTag.append(logoArea);


    tabButt.forEach((butt) => {
        let button = document.createElement('button');
        button.classList.add('tablink');
        button.innerHTML = butt;

        headerLinks.appendChild(button);
    })

    headerTag.append(headerLinks);
    getBody.insertBefore(headerTag, getContentDiv);
}

// let setFooter = () => {
//     const footerTag = document.createElement('footer');

//     footerTag.innerHTML = ` &#128420; Replicated by M_Idi &#128420;`;

//     getBody.append(footerTag);
// }



/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
const getBody = document.querySelector('body');
const getContentDiv = document.getElementById('content');


let specials = [
    {
        name:'Mushroom Sloppy',
        ingredients:'Sesame pancake, shroom ragu, Chinese slaw',
        price:'10$'
    },
    {
        name:'Rice Rolls',
        ingredients:'Charred scallion, black vinegar, today\’s green veg',
        price:'10$'
    },
];

let sides = [
    {
        name:'Green Salad',
        ingredients:'Chinese ranch, Asian fines herbes, crispy rice pearls',
        price:'6$'
    },
    {
        name:'Smashed Cucumber',
        ingredients:'Sesame dressing and leopard sauce',
        price:'8$'
    },
    {
        name:'Sticky Rice Dumpling',
        ingredients:'Grandson style, chili crisp, red vinegar, 4 pcs',
        price:'6$'
    },
    {
        name:'Rice, Beans, + Greens',
        ingredients:'Cilantro, ginger, scallion',
        price:'8$'
    },
]

let drinks = [
    {
        name:'Coca-Cola',
        pic:'',
        price:'3$'
    },
    {
        name:'Hot Cocoa',
        pic:'',
        price:'3$'
    },
    {
        name:'Berry Karkade',
        pic:'',
        price:'3.75$'
    },
]

function menu()
{
    const menuSection = document.createElement('section');
    const menuTitle = document.createElement('h1');

    const menuOpen = document.createElement('div');
    const menuOpen1 = document.createElement('p');
    const menuOpen2 = document.createElement('p');

    const dishesContainer = document.createElement('div');
    const chefSpec = document.createElement('article');
    const chefSpecTitle = document.createElement('h2');
    const sidesMen = document.createElement('article');
    const sidesMenTitle = document.createElement('h2');
    const drinksMen = document.createElement('article');
    const drinksMenTitle = document.createElement('h2');

    menuSection.classList.add('tabcontent');
    menuSection.setAttribute('id','Menu');

    menuOpen.classList.add('openDays');
    dishesContainer.classList.add('dishesCont');

    menuTitle.innerHTML = 'MENU';

    menuOpen1.innerHTML = 'Tues, Wed, Thurs, Sun 12pm–8pm';
    menuOpen2.innerHTML = 'Fri & Sat 12pm-9pm';

    chefSpecTitle.innerHTML = 'CHEF\'S SPECIALS';
    sidesMenTitle.innerHTML = 'SIDES';
    drinksMenTitle.innerHTML = 'DRINKS';

    // menuSection.append(menuTitle);

    menuOpen.append(menuOpen1, menuOpen2);
    // menuSection.append(menuOpen);

    chefSpec.append(chefSpecTitle);
    sidesMen.append(sidesMenTitle);
    drinksMen.append(drinksMenTitle);

    for(let sp of specials)
    {
        const foodItem = document.createElement('div');
        const foodHead = document.createElement('h3');
        const foodTxt = document.createElement('p');

        foodItem.classList.add('foodItem');
        for(let key in sp)
        {
            foodHead.innerHTML = `${sp.name}`;
            foodTxt.innerHTML = `${sp.ingredients}..........${sp.price}`;  
        }
        foodItem.append(foodHead, foodTxt);
        chefSpec.append(foodItem);
    }

    for(let sp of sides)
    {
        const foodItem = document.createElement('div');
        const foodHead = document.createElement('h3');
        const foodTxt = document.createElement('p');
        
        foodItem.classList.add('foodItem');
        for(let key in sp)
        {
            foodHead.innerHTML = `${sp.name}`;
            foodTxt.innerHTML = `${sp.ingredients}..........${sp.price}`;  
        }
        foodItem.append(foodHead, foodTxt);
        sidesMen.append(foodItem);
    }

    for(let sp of drinks)
    {
        const foodItem = document.createElement('div');
        const foodTxt = document.createElement('p');

        foodItem.classList.add('foodItem');
        for(let key in sp)
        {
            foodTxt.innerHTML = `${sp.name}..........${sp.price}`;  
        }
        foodItem.append(foodTxt);
        drinksMen.append(foodItem);
    }
    dishesContainer.append(chefSpec, sidesMen, drinksMen);
    menuSection.append(menuTitle, menuOpen, dishesContainer);
    getContentDiv.append(menuSection);

}



/***/ }),

/***/ "./src/images/FatChoy_Logo.png":
/*!*************************************!*\
  !*** ./src/images/FatChoy_Logo.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c1b4fa5f0ece01f23722.png";

/***/ }),

/***/ "./src/images/FatChoy_hbg.png":
/*!************************************!*\
  !*** ./src/images/FatChoy_hbg.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce97c0ebeaae4c311ae4.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact */ "./src/modules/contact.js");
/* harmony import */ var _modules_mainElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mainElements */ "./src/modules/mainElements.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






console.log('We\'re now live to work.');


(0,_modules_mainElements__WEBPACK_IMPORTED_MODULE_3__.setHeader)();

(0,_modules_home__WEBPACK_IMPORTED_MODULE_0__.home)();
const getContentDiv = document.getElementById('content');

let showHome = document.querySelectorAll('.tablink');

for(let btn of showHome)
{
   btn.addEventListener('click', (e) => {
       switch(btn.innerHTML)
       {
            case 'Menu':
                getContentDiv.innerHTML = '';
                (0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__.menu)();
                break;
            case 'Contact':
                getContentDiv.innerHTML = '';
                (0,_modules_contact__WEBPACK_IMPORTED_MODULE_2__.contact)();
                break;
            default:
                getContentDiv.innerHTML = '';
                (0,_modules_home__WEBPACK_IMPORTED_MODULE_0__.home)();
                break;

       }
   })
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQm9DO0FBQ0E7QUFDTTtBQUNPO0FBQzVCOztBQUVyQjs7O0FBR0EsZ0VBQVM7O0FBRVQsbURBQUk7QUFDSjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtREFBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IseURBQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG1EQUFJO0FBQ3BCOztBQUVBO0FBQ0EsSUFBSTtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL21haW5FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvRmF0Q2hveV9oYmcucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKlxcbntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5odG1sXFxue1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi8qIFNldCBoZWlnaHQgb2YgYm9keSBhbmQgdGhlIGRvY3VtZW50IHRvIDEwMCUgdG8gZW5hYmxlIFxcXCJmdWxsIHBhZ2UgdGFic1xcXCIgKi9cXG5ib2R5XFxue1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaGVhZGVyXFxue1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmxpbmtzLWRpdlxcbntcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4vKiBTdHlsZSB0YWIgbGlua3MgKi9cXG4udGFibGluayBcXG57XFxuICAgIGFsbDogdW5zZXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIHBhZGRpbmc6IDFweCAyMHB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICMyNDIwMjE7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZTtcXG59XFxuLnRhYmxpbms6aG92ZXJcXG57XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjQyMDIxO1xcbn1cXG5cXG4jY29udGVudFxcbntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50YWJsaW5rLCBcXG4uaG9tZVR4dCBoMSxcXG4jTWVudSBoMSxcXG4jTWVudSBhcnRpY2xlIGgyLFxcbi5mb29kSXRlbSBoMyxcXG4jQ29udGFjdCBoMVxcbntcXG4gICAgZm9udC1mYW1pbHk6ICdQZXJtYW5lbnQgTWFya2VyJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI01lbnUgcCxcXG4uaG9tZVR4dCBwLFxcbiNDb250YWN0IGFydGljbGUgcFxcbntcXG4gICAgZm9udC1mYW1pbHk6ICdCZWxsZWZhaXInLCBzZXJpZjtcXG59XFxuI0hvbWUsIFxcbiNDb250YWN0XFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhvbWVUeHQsXFxuI0NvbnRhY3QgYXJ0aWNsZVxcbntcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMjUwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcbi5ob21lVHh0IGgxLCBcXG4uaG9tZVR4dCBwLFxcbiNDb250YWN0IGFydGljbGUgaDEsXFxuI0NvbnRhY3QgYXJ0aWNsZSBwXFxue1xcbiAgICBjb2xvcjogIzI0MjAyMTtcXG59XFxuLmhvbWVUeHQgaDEsXFxuI0NvbnRhY3QgYXJ0aWNsZSBoMVxcbntcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBsaW5lLWhlaWdodDogNHJlbTtcXG59XFxuLmhvbWVUeHQgYnV0dG9uXFxue1xcbiAgICBhbGw6IHVuc2V0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxNDBweDtcXG4gICAgcGFkZGluZzogMTZweCAyNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjAyMTtcXG4gICAgY29sb3I6ICNmZGZjZmE7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW47XFxufVxcbi5ob21lVHh0IGJ1dHRvbjpob3ZlclxcbntcXG4gICAgb3BhY2l0eTogLjc7XFxufVxcbi5ob21lVHh0IHAsXFxuI0NvbnRhY3QgYXJ0aWNsZSBwXFxue1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuXFxuI01lbnUgXFxue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDgsIDI0NSk7XFxufVxcbiNNZW51IGgxLFxcbi5vcGVuRGF5c1xcbntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ub3BlbkRheXMgcCxcXG4uZm9vZEl0ZW0gcFxcbntcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcbiNNZW51IGgxXFxue1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xcbiAgICBwYWRkaW5nOiAzMHB4IDA7XFxufVxcbi5vcGVuRGF5c1xcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG5cXG4gICAgLyogbWFyZ2luLWJvdHRvbTogMzBweDsgKi9cXG59XFxuLmRpc2hlc0NvbnRcXG57XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdvbGQ7ICovXFxufVxcbiNNZW51IGFydGljbGVcXG57XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmViZWNjYXB1cnBsZTsgKi9cXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuI01lbnUgIGgyXFxue1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcbi5mb29kSXRlbVxcbntcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW55ZWxsb3c7ICovXFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbn1cXG4uZm9vZEl0ZW0gaDNcXG57XFxuICAgIGZvbnQtc2l6ZTogMS45NXJlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTZweCkge1xcbiAgICAjQ29udGFjdCBhcnRpY2xlLFxcbiAgICAuaG9tZVR4dFxcbiAgICB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICAjTWVudSBhcnRpY2xlXFxuICAgIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7QUFDQTs7SUFFSSxZQUFZO0FBQ2hCO0FBQ0EsMkVBQTJFO0FBQzNFOztJQUVJLGlCQUFpQjtJQUNqQix5REFBaUQ7SUFDakQsK0JBQStCO0lBQy9CLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQSxvQkFBb0I7QUFDcEI7O0lBRUksVUFBVTtJQUNWLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHdCQUF3QjtBQUM1QjtBQUNBOztJQUVJLGdDQUFnQztBQUNwQzs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBOzs7Ozs7O0lBT0ksMkNBQTJDO0FBQy9DOztBQUVBOzs7O0lBSUksK0JBQStCO0FBQ25DO0FBQ0E7OztJQUdJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBOzs7SUFHSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsaUJBQWlCOztJQUVqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiO0FBQ0E7Ozs7O0lBS0ksY0FBYztBQUNsQjtBQUNBOzs7SUFHSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7O0lBRUksVUFBVTtJQUNWLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQiwyQkFBMkI7QUFDL0I7QUFDQTs7SUFFSSxXQUFXO0FBQ2Y7QUFDQTs7O0lBR0ksaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLG9DQUFvQztBQUN4QztBQUNBOzs7SUFHSSxrQkFBa0I7QUFDdEI7QUFDQTs7O0lBR0ksaUJBQWlCO0FBQ3JCO0FBQ0E7O0lBRUksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7O0lBRVQseUJBQXlCO0FBQzdCO0FBQ0E7O0lBRUksYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxlQUFlO0lBQ2YsNEJBQTRCO0FBQ2hDO0FBQ0E7O0lBRUksVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxtQ0FBbUM7SUFDbkMsY0FBYztBQUNsQjtBQUNBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJOzs7UUFHSSxXQUFXO0lBQ2Y7SUFDQTs7UUFFSSxXQUFXO0lBQ2Y7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqXFxue1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmh0bWxcXG57XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLyogU2V0IGhlaWdodCBvZiBib2R5IGFuZCB0aGUgZG9jdW1lbnQgdG8gMTAwJSB0byBlbmFibGUgXFxcImZ1bGwgcGFnZSB0YWJzXFxcIiAqL1xcbmJvZHlcXG57XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL0ZhdENob3lfaGJnLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5oZWFkZXJcXG57XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ubGlua3MtZGl2XFxue1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi8qIFN0eWxlIHRhYiBsaW5rcyAqL1xcbi50YWJsaW5rIFxcbntcXG4gICAgYWxsOiB1bnNldDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgcGFkZGluZzogMXB4IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogIzI0MjAyMTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlO1xcbn1cXG4udGFibGluazpob3ZlclxcbntcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyNDIwMjE7XFxufVxcblxcbiNjb250ZW50XFxue1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRhYmxpbmssIFxcbi5ob21lVHh0IGgxLFxcbiNNZW51IGgxLFxcbiNNZW51IGFydGljbGUgaDIsXFxuLmZvb2RJdGVtIGgzLFxcbiNDb250YWN0IGgxXFxue1xcbiAgICBmb250LWZhbWlseTogJ1Blcm1hbmVudCBNYXJrZXInLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jTWVudSBwLFxcbi5ob21lVHh0IHAsXFxuI0NvbnRhY3QgYXJ0aWNsZSBwXFxue1xcbiAgICBmb250LWZhbWlseTogJ0JlbGxlZmFpcicsIHNlcmlmO1xcbn1cXG4jSG9tZSwgXFxuI0NvbnRhY3RcXG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaG9tZVR4dCxcXG4jQ29udGFjdCBhcnRpY2xlXFxue1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLjA1cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAyNTBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuLmhvbWVUeHQgaDEsIFxcbi5ob21lVHh0IHAsXFxuI0NvbnRhY3QgYXJ0aWNsZSBoMSxcXG4jQ29udGFjdCBhcnRpY2xlIHBcXG57XFxuICAgIGNvbG9yOiAjMjQyMDIxO1xcbn1cXG4uaG9tZVR4dCBoMSxcXG4jQ29udGFjdCBhcnRpY2xlIGgxXFxue1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xcbn1cXG4uaG9tZVR4dCBidXR0b25cXG57XFxuICAgIGFsbDogdW5zZXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDE0MHB4O1xcbiAgICBwYWRkaW5nOiAxNnB4IDI2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyMDIxO1xcbiAgICBjb2xvcjogI2ZkZmNmYTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbjtcXG59XFxuLmhvbWVUeHQgYnV0dG9uOmhvdmVyXFxue1xcbiAgICBvcGFjaXR5OiAuNztcXG59XFxuLmhvbWVUeHQgcCxcXG4jQ29udGFjdCBhcnRpY2xlIHBcXG57XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG5cXG4jTWVudSBcXG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0OCwgMjQ1KTtcXG59XFxuI01lbnUgaDEsXFxuLm9wZW5EYXlzXFxue1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5vcGVuRGF5cyBwLFxcbi5mb29kSXRlbSBwXFxue1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuI01lbnUgaDFcXG57XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDRyZW07XFxuICAgIHBhZGRpbmc6IDMwcHggMDtcXG59XFxuLm9wZW5EYXlzXFxue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAzMHB4OyAqL1xcbn1cXG4uZGlzaGVzQ29udFxcbntcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgZ29sZDsgKi9cXG59XFxuI01lbnUgYXJ0aWNsZVxcbntcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWJlY2NhcHVycGxlOyAqL1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4jTWVudSAgaDJcXG57XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuLmZvb2RJdGVtXFxue1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbnllbGxvdzsgKi9cXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxufVxcbi5mb29kSXRlbSBoM1xcbntcXG4gICAgZm9udC1zaXplOiAxLjk1cmVtO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5NnB4KSB7XFxuICAgICNDb250YWN0IGFydGljbGUsXFxuICAgIC5ob21lVHh0XFxuICAgIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgICNNZW51IGFydGljbGVcXG4gICAge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGdldENvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5cbmZ1bmN0aW9uIGNvbnRhY3QoKVxue1xuICAgIGNvbnN0IGNvbnRhY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnN0IEFkZHJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICAgIGNvbnN0IGNvbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgY29udEFkZHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgY29udFBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgY29udGFjdFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndGFiY29udGVudCcpO1xuICAgIGNvbnRhY3RTZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnQ29udGFjdCcpO1xuXG4gICAgY29udFRpdGxlLmlubmVySFRNTCA9ICdJTkRPT1IgJiBPVVRET09SIERJTklORyAvLyBUQUtFT1VUICYgREVMSVZFUlknO1xuICAgIGNvbnRBZGRyLmlubmVySFRNTCA9ICcyNTAgQnJvb21lIFN0cmVldCwgTmV3IFlvcmssIE5ZLCAxMDAwMic7XG4gICAgY29udFBob25lLmlubmVySFRNTCA9ICcoMzQ3KSA3NzgtNTg4OSc7XG5cbiAgICBBZGRySW5mby5hcHBlbmQoY29udFRpdGxlLCBjb250QWRkciwgY29udFBob25lKTtcbiAgICBjb250YWN0U2VjdGlvbi5hcHBlbmQoQWRkckluZm8pO1xuXG4gICAgZ2V0Q29udGVudERpdi5hcHBlbmQoY29udGFjdFNlY3Rpb24pO1xufVxuXG5leHBvcnQge2NvbnRhY3R9OyIsImNvbnN0IGdldEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCBnZXRDb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuXG5sZXQgaG9tZSA9IGZ1bmN0aW9uKClcbntcbiAgICBjb25zdCBnZXRIb21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2V0SG9tZURpdi5jbGFzc0xpc3QuYWRkKCd0YWJjb250ZW50Jyk7XG4gICAgZ2V0SG9tZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ0hvbWUnKTtcblxuICAgIGNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBob21lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IGhvbWVDdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBob21lVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgaG9tZVRpdGxlLmlubmVySFRNTCA9ICdZT1VSIEtJTkQgT0YgQ0hJTkVTRSAmIFZFR0FOJztcbiAgICBob21lQ3RhLmlubmVySFRNTCA9ICdPcmRlciBPbmxpbmUnO1xuICAgIGhvbWVUeHQuaW5uZXJIVE1MID0gJzI1MCBCcm9vbWUgU3RyZWV0LCBOZXcgWW9yaywgTlksIDEwMDAyJ1xuXG4gICAgdGV4dERpdi5jbGFzc0xpc3QuYWRkKCdob21lVHh0Jyk7XG4gICAgdGV4dERpdi5hcHBlbmQoaG9tZVRpdGxlLCBob21lQ3RhLGhvbWVUeHQpO1xuICAgIFxuICAgIGdldEhvbWVEaXYuYXBwZW5kKHRleHREaXYpO1xuXG4gICAgZ2V0Q29udGVudERpdi5hcHBlbmQoZ2V0SG9tZURpdik7XG5cbn1cblxuZXhwb3J0IHtob21lfTsiLCJpbXBvcnQgdGhlTG9nbyBmcm9tICcuLi9pbWFnZXMvRmF0Q2hveV9Mb2dvLnBuZydcblxuY29uc3QgZ2V0Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IGdldENvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5sZXQgc2V0SGVhZGVyID0gKCkgPT4ge1xuICAgIGxldCB0YWJCdXR0ID0gWydIb21lJywgJ01lbnUnLCAnQ29udGFjdCddO1xuICAgIGNvbnN0IGhlYWRlclRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IGhlYWRlckxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbG9nb0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29uc3QgbG9nb0ltZ0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIGxvZ29BcmVhLnNldEF0dHJpYnV0ZSgnaHJlZicsJ2luZGV4Lmh0bWwnKTtcbiAgICBsb2dvSW1nTGluay5zZXRBdHRyaWJ1dGUoJ3NyYycsIHRoZUxvZ28pO1xuXG4gICAgaGVhZGVyTGlua3MuY2xhc3NMaXN0LmFkZCgnbGlua3MtZGl2Jyk7XG5cbiAgICBsb2dvQXJlYS5hcHBlbmQobG9nb0ltZ0xpbmspO1xuXG4gICAgaGVhZGVyVGFnLmFwcGVuZChsb2dvQXJlYSk7XG5cblxuICAgIHRhYkJ1dHQuZm9yRWFjaCgoYnV0dCkgPT4ge1xuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YWJsaW5rJyk7XG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBidXR0O1xuXG4gICAgICAgIGhlYWRlckxpbmtzLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgfSlcblxuICAgIGhlYWRlclRhZy5hcHBlbmQoaGVhZGVyTGlua3MpO1xuICAgIGdldEJvZHkuaW5zZXJ0QmVmb3JlKGhlYWRlclRhZywgZ2V0Q29udGVudERpdik7XG59XG5cbi8vIGxldCBzZXRGb290ZXIgPSAoKSA9PiB7XG4vLyAgICAgY29uc3QgZm9vdGVyVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cbi8vICAgICBmb290ZXJUYWcuaW5uZXJIVE1MID0gYCAmIzEyODQyMDsgUmVwbGljYXRlZCBieSBNX0lkaSAmIzEyODQyMDtgO1xuXG4vLyAgICAgZ2V0Qm9keS5hcHBlbmQoZm9vdGVyVGFnKTtcbi8vIH1cblxuZXhwb3J0IHtzZXRIZWFkZXJ9OyIsImNvbnN0IGdldEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCBnZXRDb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuXG5sZXQgc3BlY2lhbHMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOidNdXNocm9vbSBTbG9wcHknLFxuICAgICAgICBpbmdyZWRpZW50czonU2VzYW1lIHBhbmNha2UsIHNocm9vbSByYWd1LCBDaGluZXNlIHNsYXcnLFxuICAgICAgICBwcmljZTonMTAkJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOidSaWNlIFJvbGxzJyxcbiAgICAgICAgaW5ncmVkaWVudHM6J0NoYXJyZWQgc2NhbGxpb24sIGJsYWNrIHZpbmVnYXIsIHRvZGF5XFzigJlzIGdyZWVuIHZlZycsXG4gICAgICAgIHByaWNlOicxMCQnXG4gICAgfSxcbl07XG5cbmxldCBzaWRlcyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6J0dyZWVuIFNhbGFkJyxcbiAgICAgICAgaW5ncmVkaWVudHM6J0NoaW5lc2UgcmFuY2gsIEFzaWFuIGZpbmVzIGhlcmJlcywgY3Jpc3B5IHJpY2UgcGVhcmxzJyxcbiAgICAgICAgcHJpY2U6JzYkJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOidTbWFzaGVkIEN1Y3VtYmVyJyxcbiAgICAgICAgaW5ncmVkaWVudHM6J1Nlc2FtZSBkcmVzc2luZyBhbmQgbGVvcGFyZCBzYXVjZScsXG4gICAgICAgIHByaWNlOic4JCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTonU3RpY2t5IFJpY2UgRHVtcGxpbmcnLFxuICAgICAgICBpbmdyZWRpZW50czonR3JhbmRzb24gc3R5bGUsIGNoaWxpIGNyaXNwLCByZWQgdmluZWdhciwgNCBwY3MnLFxuICAgICAgICBwcmljZTonNiQnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6J1JpY2UsIEJlYW5zLCArIEdyZWVucycsXG4gICAgICAgIGluZ3JlZGllbnRzOidDaWxhbnRybywgZ2luZ2VyLCBzY2FsbGlvbicsXG4gICAgICAgIHByaWNlOic4JCdcbiAgICB9LFxuXVxuXG5sZXQgZHJpbmtzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTonQ29jYS1Db2xhJyxcbiAgICAgICAgcGljOicnLFxuICAgICAgICBwcmljZTonMyQnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6J0hvdCBDb2NvYScsXG4gICAgICAgIHBpYzonJyxcbiAgICAgICAgcHJpY2U6JzMkJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOidCZXJyeSBLYXJrYWRlJyxcbiAgICAgICAgcGljOicnLFxuICAgICAgICBwcmljZTonMy43NSQnXG4gICAgfSxcbl1cblxuZnVuY3Rpb24gbWVudSgpXG57XG4gICAgY29uc3QgbWVudVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgIGNvbnN0IG1lbnVPcGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudU9wZW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IG1lbnVPcGVuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGNvbnN0IGRpc2hlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNoZWZTcGVjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICAgIGNvbnN0IGNoZWZTcGVjVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IHNpZGVzTWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICAgIGNvbnN0IHNpZGVzTWVuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGRyaW5rc01lbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgICBjb25zdCBkcmlua3NNZW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cbiAgICBtZW51U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd0YWJjb250ZW50Jyk7XG4gICAgbWVudVNlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsJ01lbnUnKTtcblxuICAgIG1lbnVPcGVuLmNsYXNzTGlzdC5hZGQoJ29wZW5EYXlzJyk7XG4gICAgZGlzaGVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Rpc2hlc0NvbnQnKTtcblxuICAgIG1lbnVUaXRsZS5pbm5lckhUTUwgPSAnTUVOVSc7XG5cbiAgICBtZW51T3BlbjEuaW5uZXJIVE1MID0gJ1R1ZXMsIFdlZCwgVGh1cnMsIFN1biAxMnBt4oCTOHBtJztcbiAgICBtZW51T3BlbjIuaW5uZXJIVE1MID0gJ0ZyaSAmIFNhdCAxMnBtLTlwbSc7XG5cbiAgICBjaGVmU3BlY1RpdGxlLmlubmVySFRNTCA9ICdDSEVGXFwnUyBTUEVDSUFMUyc7XG4gICAgc2lkZXNNZW5UaXRsZS5pbm5lckhUTUwgPSAnU0lERVMnO1xuICAgIGRyaW5rc01lblRpdGxlLmlubmVySFRNTCA9ICdEUklOS1MnO1xuXG4gICAgLy8gbWVudVNlY3Rpb24uYXBwZW5kKG1lbnVUaXRsZSk7XG5cbiAgICBtZW51T3Blbi5hcHBlbmQobWVudU9wZW4xLCBtZW51T3BlbjIpO1xuICAgIC8vIG1lbnVTZWN0aW9uLmFwcGVuZChtZW51T3Blbik7XG5cbiAgICBjaGVmU3BlYy5hcHBlbmQoY2hlZlNwZWNUaXRsZSk7XG4gICAgc2lkZXNNZW4uYXBwZW5kKHNpZGVzTWVuVGl0bGUpO1xuICAgIGRyaW5rc01lbi5hcHBlbmQoZHJpbmtzTWVuVGl0bGUpO1xuXG4gICAgZm9yKGxldCBzcCBvZiBzcGVjaWFscylcbiAgICB7XG4gICAgICAgIGNvbnN0IGZvb2RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGZvb2RIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgY29uc3QgZm9vZFR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICBmb29kSXRlbS5jbGFzc0xpc3QuYWRkKCdmb29kSXRlbScpO1xuICAgICAgICBmb3IobGV0IGtleSBpbiBzcClcbiAgICAgICAge1xuICAgICAgICAgICAgZm9vZEhlYWQuaW5uZXJIVE1MID0gYCR7c3AubmFtZX1gO1xuICAgICAgICAgICAgZm9vZFR4dC5pbm5lckhUTUwgPSBgJHtzcC5pbmdyZWRpZW50c30uLi4uLi4uLi4uJHtzcC5wcmljZX1gOyAgXG4gICAgICAgIH1cbiAgICAgICAgZm9vZEl0ZW0uYXBwZW5kKGZvb2RIZWFkLCBmb29kVHh0KTtcbiAgICAgICAgY2hlZlNwZWMuYXBwZW5kKGZvb2RJdGVtKTtcbiAgICB9XG5cbiAgICBmb3IobGV0IHNwIG9mIHNpZGVzKVxuICAgIHtcbiAgICAgICAgY29uc3QgZm9vZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZm9vZEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBjb25zdCBmb29kVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBcbiAgICAgICAgZm9vZEl0ZW0uY2xhc3NMaXN0LmFkZCgnZm9vZEl0ZW0nKTtcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gc3ApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvb2RIZWFkLmlubmVySFRNTCA9IGAke3NwLm5hbWV9YDtcbiAgICAgICAgICAgIGZvb2RUeHQuaW5uZXJIVE1MID0gYCR7c3AuaW5ncmVkaWVudHN9Li4uLi4uLi4uLiR7c3AucHJpY2V9YDsgIFxuICAgICAgICB9XG4gICAgICAgIGZvb2RJdGVtLmFwcGVuZChmb29kSGVhZCwgZm9vZFR4dCk7XG4gICAgICAgIHNpZGVzTWVuLmFwcGVuZChmb29kSXRlbSk7XG4gICAgfVxuXG4gICAgZm9yKGxldCBzcCBvZiBkcmlua3MpXG4gICAge1xuICAgICAgICBjb25zdCBmb29kSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBmb29kVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICAgIGZvb2RJdGVtLmNsYXNzTGlzdC5hZGQoJ2Zvb2RJdGVtJyk7XG4gICAgICAgIGZvcihsZXQga2V5IGluIHNwKVxuICAgICAgICB7XG4gICAgICAgICAgICBmb29kVHh0LmlubmVySFRNTCA9IGAke3NwLm5hbWV9Li4uLi4uLi4uLiR7c3AucHJpY2V9YDsgIFxuICAgICAgICB9XG4gICAgICAgIGZvb2RJdGVtLmFwcGVuZChmb29kVHh0KTtcbiAgICAgICAgZHJpbmtzTWVuLmFwcGVuZChmb29kSXRlbSk7XG4gICAgfVxuICAgIGRpc2hlc0NvbnRhaW5lci5hcHBlbmQoY2hlZlNwZWMsIHNpZGVzTWVuLCBkcmlua3NNZW4pO1xuICAgIG1lbnVTZWN0aW9uLmFwcGVuZChtZW51VGl0bGUsIG1lbnVPcGVuLCBkaXNoZXNDb250YWluZXIpO1xuICAgIGdldENvbnRlbnREaXYuYXBwZW5kKG1lbnVTZWN0aW9uKTtcblxufVxuXG5leHBvcnQge21lbnV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IHtob21lfSBmcm9tICcuL21vZHVsZXMvaG9tZSc7XG5pbXBvcnQge21lbnV9IGZyb20gJy4vbW9kdWxlcy9tZW51JztcbmltcG9ydCB7Y29udGFjdH0gZnJvbSAnLi9tb2R1bGVzL2NvbnRhY3QnO1xuaW1wb3J0IHtzZXRIZWFkZXJ9IGZyb20gJy4vbW9kdWxlcy9tYWluRWxlbWVudHMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnNvbGUubG9nKCdXZVxcJ3JlIG5vdyBsaXZlIHRvIHdvcmsuJyk7XG5cblxuc2V0SGVhZGVyKCk7XG5cbmhvbWUoKTtcbmNvbnN0IGdldENvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5sZXQgc2hvd0hvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGluaycpO1xuXG5mb3IobGV0IGJ0biBvZiBzaG93SG9tZSlcbntcbiAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgc3dpdGNoKGJ0bi5pbm5lckhUTUwpXG4gICAgICAge1xuICAgICAgICAgICAgY2FzZSAnTWVudSc6XG4gICAgICAgICAgICAgICAgZ2V0Q29udGVudERpdi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICBtZW51KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDb250YWN0JzpcbiAgICAgICAgICAgICAgICBnZXRDb250ZW50RGl2LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgIGNvbnRhY3QoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZ2V0Q29udGVudERpdi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICBob21lKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICB9XG4gICB9KVxufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=