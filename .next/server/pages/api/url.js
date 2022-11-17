"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/url";
exports.ids = ["pages/api/url"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./pages/api/url.js":
/*!**************************!*\
  !*** ./pages/api/url.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_connectMongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/connectMongo */ \"(api)/./utils/connectMongo.js\");\n\n// import Urls from \"../models/urls\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const dbdata = await (0,_utils_connectMongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    // const urllist = await Urls.find();\n    console.log(dbdata);\n    res.status(200).json({\n        name: \"Sada\"\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXJsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW9EO0FBQ3BELG9DQUFvQztBQUNwQyxpRUFBZSxPQUFPQyxLQUFLQyxNQUFRO0lBQ2hDLE1BQU1DLFNBQVEsTUFBTUgsK0RBQVlBO0lBQy9CLHFDQUFxQztJQUN6Q0ksUUFBUUMsR0FBRyxDQUFDRjtJQUNSRCxJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVDLE1BQU07SUFBTztBQUN4QyxHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3VybC5qcz8xYjk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0TW9uZ28gIGZyb20gXCIuLi8uLi91dGlscy9jb25uZWN0TW9uZ29cIlxuLy8gaW1wb3J0IFVybHMgZnJvbSBcIi4uL21vZGVscy91cmxzXCJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgY29uc3QgZGJkYXRhPSBhd2FpdCBjb25uZWN0TW9uZ28oKTtcbiAgICAvLyBjb25zdCB1cmxsaXN0ID0gYXdhaXQgVXJscy5maW5kKCk7XG5jb25zb2xlLmxvZyhkYmRhdGEpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbmFtZTogXCJTYWRhXCIgfSk7XG59OyJdLCJuYW1lcyI6WyJjb25uZWN0TW9uZ28iLCJyZXEiLCJyZXMiLCJkYmRhdGEiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/url.js\n");

/***/ }),

/***/ "(api)/./utils/connectMongo.js":
/*!*******************************!*\
  !*** ./utils/connectMongo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connect = async ()=>mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.DB_URL);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jb25uZWN0TW9uZ28uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLFVBQVEsVUFBU0QsdURBQWdCLENBQUNFLFFBQVFDLEdBQUcsQ0FBQ0MsTUFBTTtBQUMxRCxpRUFBZUgsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3V0aWxzL2Nvbm5lY3RNb25nby5qcz84NjkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgY29ubmVjdD1hc3luYygpPT5tb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52LkRCX1VSTClcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJEQl9VUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/connectMongo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/url.js"));
module.exports = __webpack_exports__;

})();