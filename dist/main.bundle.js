"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_2_capstone"] = self["webpackChunk_2_capstone"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\n/* width */\\n::-webkit-scrollbar {\\n  width: 10px;\\n}\\n\\n/* Track */\\n::-webkit-scrollbar-track {\\n  background: #f1f1f1;\\n}\\n\\n/* Handle */\\n::-webkit-scrollbar-thumb {\\n  background: #f00;\\n  border-radius: 5px;\\n}\\n\\n/* Handle on hover */\\n::-webkit-scrollbar-thumb:hover {\\n  background: #dd3a3a;\\n}\\n\\n.footer-text {\\n  border-top: 2px solid black;\\n  display: block;\\n  padding: 3em;\\n}\\n\\n.dark-background {\\n  height: 2em;\\n  width: 100%;\\n  background-color: gray;\\n}\\n\\nheader {\\n  display: flex;\\n  height: 70px;\\n  background-color: rgba(255, 80, 80, 0.915);\\n  padding: 1vh 10%;\\n  align-items: center;\\n}\\n\\n.title {\\n  color: white;\\n  font-size: 2.5vw;\\n  font-weight: 700;\\n  margin-right: 1em;\\n}\\n\\n.nav {\\n  list-style: none;\\n  color: rgb(27, 2, 2);\\n  display: flex;\\n  gap: 1em;\\n  align-items: end;\\n}\\n\\n.nav li a {\\n  text-decoration: none;\\n  color: white;\\n}\\n\\n.nav-logo {\\n  width: 40px;\\n  margin-right: 1em;\\n}\\n\\nbody {\\n  width: 100vw;\\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\\n  background-size: contain;\\n  background-attachment: fixed;\\n  overflow-x: hidden;\\n}\\n\\n/* Style for the meals list */\\n#meals-list {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n  list-style: none;\\n  padding: 5% 15%;\\n  gap: 1vw;\\n}\\n\\n/* Style for each meal item */\\n#meals-list li {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  align-items: start;\\n  width: calc(33.33% - 20px);\\n  margin-bottom: 20px;\\n  position: relative;\\n}\\n\\n#meals-list li img {\\n  display: block;\\n  margin-bottom: 10px;\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n#meals-list li .meal-info {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 100%;\\n}\\n\\n#meals-list li .meal-info span {\\n  font-weight: bold;\\n}\\n\\n#meals-list li .like-btn {\\n  display: flex;\\n  background-color: #fff;\\n  cursor: pointer;\\n  padding: 0 10px;\\n}\\n\\nli div {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.comment-btn,\\n.reservation-btn {\\n  display: flex;\\n  margin: auto;\\n  margin-top: 10px;\\n  padding: 2px 6px;\\n  cursor: pointer;\\n  background-color: wheat;\\n}\\n\\n.pop-background {\\n  width: 100vw;\\n  height: 100vh;\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  background-color: rgba(0, 0, 0, 0.4);\\n  backdrop-filter: blur(15px);\\n  z-index: 1040;\\n  overflow: scroll;\\n}\\n\\n.pop {\\n  background-color: #fff;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  margin: 5% 20%;\\n  padding-bottom: 5%;\\n  border-radius: 1em;\\n}\\n\\n.pop h2 {\\n  font-size: 2.5em;\\n}\\n\\n.pop h3 {\\n  font-size: 2em;\\n}\\n\\n.pop p {\\n  margin: auto;\\n  font-size: large;\\n  margin-bottom: 30px;\\n}\\n\\n.pop-image {\\n  /* height: 200px; */\\n  width: 50%;\\n  margin: 5%;\\n  border-radius: 100%;\\n}\\n\\n.close-cross {\\n  width: 30px;\\n  position: relative;\\n  left: 45%;\\n  top: 0.5em;\\n  cursor: pointer;\\n}\\n\\n.instruction-container {\\n  margin: auto 5%;\\n}\\n\\n.comment-list {\\n  display: flex;\\n  flex-direction: column;\\n  list-style: none;\\n  justify-content: start;\\n  width: 100%;\\n}\\n\\n.comments-container {\\n  display: flex;\\n  flex-direction: column;\\n  width: 70%;\\n}\\n\\n.comments-container h3 {\\n  text-align: center;\\n  margin-bottom: 20px;\\n}\\n\\n.add-comment-container {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 10px;\\n  margin-top: 30px;\\n}\\n\\n.add-comment-container input,\\n.add-comment-container textarea {\\n  padding: 7px;\\n  border-radius: 0.5em;\\n  border: 1px solid rgb(192, 192, 192);\\n  font-family: 'Courier New', Courier, monospace;\\n}\\n\\n.submit-btn {\\n  background-color: rgba(248, 57, 57, 0.915);\\n  color: #fff;\\n  width: 60%;\\n  border: none;\\n  padding: 7px;\\n  border-radius: 0.5em;\\n}\\n\\n#mealsCount {\\n  color: #fff;\\n  margin-left: -20px;\\n  margin-right: 20px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://2-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://2-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://2-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://2-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://2-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://2-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://2-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://2-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://2-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://2-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_restaurant_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/restaurant.png */ \"./src/images/restaurant.png\");\n/* harmony import */ var _images_remove_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/remove.png */ \"./src/images/remove.png\");\n/* harmony import */ var _modules_getComment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/getComment.js */ \"./src/modules/getComment.js\");\n/* harmony import */ var _modules_commentCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/commentCounter.js */ \"./src/modules/commentCounter.js\");\n/* harmony import */ var _modules_postComment_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/postComment.js */ \"./src/modules/postComment.js\");\n/* harmony import */ var _modules_counteMeal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/counteMeal */ \"./src/modules/counteMeal.js\");\n\n\n\n\n\n\n\n\ndocument.querySelector('.nav-logo').src = _images_restaurant_png__WEBPACK_IMPORTED_MODULE_1__;\n\n// Define variables\nconst API_KEY = '1';\nconst API_URL = `https://www.themealdb.com/api/json/v1/${API_KEY}`;\nconst API_LINK = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\nconst INVOLV_API_KEY = '9uvruX8VsHf7B0nGETkN';\nconst mealsList = document.querySelector('#meals-list');\nconst mealDetails = document.querySelector('#meal-details');\n\n// Function to fetch meals\nasync function fetchMeals() {\n  const response = await fetch(`${API_URL}/search.php?s=`);\n  const data = await response.json();\n  document.getElementById('mealsCount').innerText = `(${data.meals.length})`;\n  return data.meals;\n}\n\n// Function to fetch meal details by ID\nasync function fetchMealById(id) {\n  const response = await fetch(`${API_URL}/lookup.php?i=${id}`);\n  const data = await response.json();\n  return data.meals[0];\n}\n\nasync function addLikeById(id) {\n  const response = await fetch(`${API_LINK}apps/${INVOLV_API_KEY}/likes/`, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: `${id}`,\n    }),\n    headers: {\n      'Content-type': 'application/json',\n    },\n  });\n  if (response) {\n    const likesSpan = document.getElementById(`${id}likes`);\n    if (likesSpan) {\n      likesSpan.innerText = parseInt(likesSpan.innerText, 10) + 1;\n    }\n  }\n\n  return 'worked';\n}\n// Function to fetch like for a meal by ID\nasync function fetchLikes() {\n  const response = await fetch(`${API_LINK}apps/${INVOLV_API_KEY}/likes/`, {\n    method: 'GET',\n    headers: {\n      'Content-type': 'application/json',\n    },\n  });\n  const data = response.json();\n  return data;\n}\nasync function displayMeals() {\n  const updateMealsCount = (meals) => {\n    const count = (0,_modules_counteMeal__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(meals.length);\n    document.getElementById('mealsCount').innerText = `(${count})`;\n  };\n  // fetch meals data from API\n  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/')\n    .then((response) => response.json())\n    .then((data) => {\n    // call updateMealsCount function with meals data\n      updateMealsCount(data.meals);\n    });\n  // .catch((error) => {\n  /// /  console.error('Error fetching meals:', error);\n  // });\n\n  const meals = await fetchMeals();\n  mealsList.innerHTML = meals\n    .map((meal) => `\n          <li id=\"${meal.idMeal}\">\n            <img src=\"${meal.strMealThumb}\" alt=\"${meal.strMeal}\">\n            <div><span>${meal.strMeal}</span>\n            <button id=\"${meal.idMeal}\" class=\"like-btn\">\n              <i style=\"pointer-events: none;\" class=\"fas fa-heart\">Like</i>\n              <span style=\"pointer-events: none;\" id=\"${`${meal.idMeal}likes`}\" >0</span>\n            </button></div>\n            <button class=\"comment-btn\">Comment</button>\n            <button class=\"reservation-btn\">Reservations</button>\n          </li>\n        `)\n    .join('');\n\n  fetchLikes().then((likes) => {\n    likes.forEach((like) => {\n      const likesSpan = document.getElementById(`${like.item_id}likes`);\n      if (likesSpan) {\n        likesSpan.innerText = like.likes;\n      }\n    });\n  });\n\n  const likeButtons = document.querySelectorAll('.like-btn');\n\n  likeButtons.forEach((button) => {\n    button.addEventListener('click', (e) => {\n      if (e.target.className === 'like-btn') {\n        const mealId = e.target.id;\n        addLikeById(mealId);\n      }\n    });\n  });\n}\n\n// Set the likes to 0 initially\nconst likeSpans = document.querySelectorAll('.like-btn span');\nlikeSpans.forEach((span) => {\n  span.innerText = '0';\n});\n\nconst likeButtons = document.querySelectorAll('.like-btn');\n\nlikeButtons.forEach((button) => {\n  button.addEventListener('click', (e) => {\n    if (e.target.className === 'like-btn') {\n      const mealId = e.target.id;\n      addLikeById(mealId);\n    }\n  });\n});\n\n// Function to display meal details\nasync function displayMealDetails(id) {\n  const meal = await fetchMealById(id);\n  const ingredients = [];\n  // Collect all ingredients and measures into an array\n  for (let i = 1; i <= 20; i += 1) {\n    if (meal[`strIngredient${i}`]) {\n      ingredients.push(\n        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`,\n      );\n    } else {\n      break;\n    }\n  }\n  mealDetails.innerHTML = `\n    <h2>${meal.strMeal}</h2>\n    <img src=\"${meal.strMealThumb}\" alt=\"${meal.strMeal}\">\n    <h3>Ingredients</h3>\n    <ul>${ingredients.map((ing) => `<li>${ing}</li>`).join('')}</ul>\n    <h3>Instructions</h3>\n    <p>${meal.strInstructions}</p>\n    <button class=\"like-btn\">Like</button>\n  `;\n}\n\n// Add event listener for meals list and meal details\ndocument.addEventListener('click', (e) => {\n  if (e.target.matches('.like-btn')) {\n    const { mealId } = e.target.parentElement.dataset;\n    addLikeById(mealId);\n  }\n  if (e.target.matches('#meals-list li')) {\n    const { mealId } = e.target.dataset;\n    displayMealDetails(mealId);\n  }\n});\n\n// Display meals list on page load\nconst popup = async (e) => {\n  const popBackground = document.createElement('div');\n  popBackground.classList.add('pop-background');\n  const pop = document.createElement('div');\n  pop.classList.add('pop');\n  const closeCross = document.createElement('img');\n  closeCross.src = _images_remove_png__WEBPACK_IMPORTED_MODULE_2__;\n  closeCross.classList.add('close-cross');\n  const cardImg = document.createElement('img');\n  const cardTitle = document.createElement('h2');\n  cardImg.classList.add('pop-image');\n  const instructiontitle = document.createElement('h3');\n  instructiontitle.innerHTML = 'Instructions: ';\n  const cardInstructions = document.createElement('p');\n  const mealItem = e.target.parentElement;\n  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.id}`);\n  const data = await response.json();\n  cardInstructions.innerHTML = data.meals[0].strInstructions;\n  cardTitle.innerHTML = data.meals[0].strMeal;\n  cardImg.src = data.meals[0].strMealThumb;\n  const InstructionsDiv = document.createElement('div');\n  InstructionsDiv.classList.add('instruction-container');\n  InstructionsDiv.appendChild(instructiontitle);\n  InstructionsDiv.appendChild(cardInstructions);\n  const comments = document.createElement('div');\n  comments.classList.add('comments-container');\n  const commentTitle = document.createElement('h3');\n  commentTitle.innerHTML = 'Comments(0)';\n  const commentList = document.createElement('ul');\n  commentList.classList.add('comment-list');\n  commentList.innerHTML = 'No comments';\n  const commentItems = await (0,_modules_getComment_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(mealItem.id);\n  if (commentItems.length > 0) {\n    commentList.innerHTML = '';\n    await commentItems.forEach((element) => {\n      commentList.innerHTML += `\n      <li>${element.creation_date} ${element.username}: ${element.comment}</li>\n      `;\n    });\n    commentTitle.innerHTML = `Comments(${(0,_modules_commentCounter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(commentItems)})`;\n  }\n  comments.appendChild(commentTitle);\n  comments.appendChild(commentList);\n  const commentForm = document.createElement('div');\n  commentForm.classList.add('add-comment-container');\n  const formTitle = document.createElement('h3');\n  formTitle.innerHTML = 'Add a Comment';\n  const nameInput = document.createElement('input');\n  nameInput.type = 'name';\n  nameInput.className = 'name-input';\n  nameInput.placeholder = 'Your name';\n  const commentInput = document.createElement('textarea');\n  commentInput.setAttribute('rows', 5);\n  commentInput.className = 'comment-input';\n  commentInput.placeholder = 'Your insights';\n  const submitBtn = document.createElement('button');\n  submitBtn.className = 'submit-btn';\n  submitBtn.innerHTML = 'Comment';\n  submitBtn.addEventListener('click', () => {\n    (0,_modules_postComment_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(mealItem.id);\n  });\n  commentForm.appendChild(formTitle);\n  commentForm.appendChild(nameInput);\n  commentForm.appendChild(commentInput);\n  commentForm.appendChild(submitBtn);\n\n  pop.appendChild(closeCross);\n  pop.appendChild(cardTitle);\n  pop.appendChild(cardImg);\n  pop.appendChild(InstructionsDiv);\n  pop.appendChild(comments);\n  pop.appendChild(commentForm);\n  popBackground.appendChild(pop);\n  document.body.appendChild(popBackground);\n  closeCross.addEventListener('click', () => {\n    popBackground.remove();\n    document.body.style.overflow = '';\n  });\n  document.body.style.overflow = 'hidden';\n};\n\nconst addCommentEvent = async () => {\n  await displayMeals();\n  const commentBtn = document.querySelectorAll('.comment-btn');\n  commentBtn.forEach((btn) => {\n    btn.addEventListener('click', popup);\n  });\n};\n\naddCommentEvent();\n\n\n//# sourceURL=webpack://2-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = (comment) => comment.length;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n//# sourceURL=webpack://2-capstone/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/counteMeal.js":
/*!***********************************!*\
  !*** ./src/modules/counteMeal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countMeals = (count) => {\n  console.log(count);\n  const totalMeals = typeof count === 'number' && count;\n  return totalMeals;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countMeals);\n\n//# sourceURL=webpack://2-capstone/./src/modules/counteMeal.js?");

/***/ }),

/***/ "./src/modules/getComment.js":
/*!***********************************!*\
  !*** ./src/modules/getComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getComments = async (id) => {\n  try {\n    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/9uvruX8VsHf7B0nGETkN/comments?item_id=${id}`);\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    return false;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\n\n//# sourceURL=webpack://2-capstone/./src/modules/getComment.js?");

/***/ }),

/***/ "./src/modules/postComment.js":
/*!************************************!*\
  !*** ./src/modules/postComment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst submit = async (id) => {\n  const nameInput = document.querySelector('.name-input');\n  const commentInput = document.querySelector('.comment-input');\n  if (nameInput.value && commentInput.value) {\n    const data = {\n      item_id: id,\n      username: nameInput.value,\n      comment: commentInput.value,\n    };\n    try {\n      const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/9uvruX8VsHf7B0nGETkN/comments', {\n        method: 'POST', // or 'PUT'\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify(data),\n      });\n      const result = await response.json();\n      console.log('Success:', result);\n    } catch (error) {\n      console.log('error', error);\n    }\n    nameInput.value = '';\n    commentInput.value = '';\n    const popbg = document.querySelector('.pop-background');\n    popbg.remove();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (submit);\n\n//# sourceURL=webpack://2-capstone/./src/modules/postComment.js?");

/***/ }),

/***/ "./src/images/remove.png":
/*!*******************************!*\
  !*** ./src/images/remove.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3c662b752278fc52f408.png\";\n\n//# sourceURL=webpack://2-capstone/./src/images/remove.png?");

/***/ }),

/***/ "./src/images/restaurant.png":
/*!***********************************!*\
  !*** ./src/images/restaurant.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"07581f6a51de426e7981.png\";\n\n//# sourceURL=webpack://2-capstone/./src/images/restaurant.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);