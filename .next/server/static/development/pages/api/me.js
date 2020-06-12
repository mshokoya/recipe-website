module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/api/me.ts":
/*!*****************************!*\
  !*** ./src/pages/api/me.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return me; });\n/* harmony import */ var _utils_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/auth0 */ \"./src/utils/auth0.ts\");\n\nasync function me(req, res) {\n  try {\n    await _utils_auth0__WEBPACK_IMPORTED_MODULE_0__[\"default\"].handleProfile(req, res);\n  } catch (error) {\n    console.error(error);\n    res.status(error.status || 500).end(error.message);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL21lLnRzP2IwOTgiXSwibmFtZXMiOlsibWUiLCJyZXEiLCJyZXMiLCJhdXRoMCIsImhhbmRsZVByb2ZpbGUiLCJlcnJvciIsImNvbnNvbGUiLCJzdGF0dXMiLCJlbmQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVlLGVBQWVBLEVBQWYsQ0FBa0JDLEdBQWxCLEVBQXVCQyxHQUF2QixFQUE0QjtBQUN6QyxNQUFJO0FBQ0YsVUFBTUMsb0RBQUssQ0FBQ0MsYUFBTixDQUFvQkgsR0FBcEIsRUFBeUJDLEdBQXpCLENBQU47QUFDRCxHQUZELENBRUUsT0FBT0csS0FBUCxFQUFjO0FBQ2RDLFdBQU8sQ0FBQ0QsS0FBUixDQUFjQSxLQUFkO0FBQ0FILE9BQUcsQ0FBQ0ssTUFBSixDQUFXRixLQUFLLENBQUNFLE1BQU4sSUFBZ0IsR0FBM0IsRUFBZ0NDLEdBQWhDLENBQW9DSCxLQUFLLENBQUNJLE9BQTFDO0FBQ0Q7QUFDRiIsImZpbGUiOiIuL3NyYy9wYWdlcy9hcGkvbWUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0aDAgZnJvbSAnLi4vLi4vdXRpbHMvYXV0aDAnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIG1lKHJlcSwgcmVzKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXV0aDAuaGFuZGxlUHJvZmlsZShyZXEsIHJlcylcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgIHJlcy5zdGF0dXMoZXJyb3Iuc3RhdHVzIHx8IDUwMCkuZW5kKGVycm9yLm1lc3NhZ2UpXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/me.ts\n");

/***/ }),

/***/ "./src/utils/auth0.ts":
/*!****************************!*\
  !*** ./src/utils/auth0.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ \"next/config\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst {\n  serverRuntimeConfig\n} = next_config__WEBPACK_IMPORTED_MODULE_1___default()();\nconst {\n  auth,\n  cookieSecret\n} = serverRuntimeConfig;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__[\"initAuth0\"])(_objectSpread(_objectSpread({}, auth), {}, {\n  session: {\n    cookieSecret,\n    cookieLifetime: 60 * 60 * 8,\n    storeIdToken: false,\n    storeAccessToken: false,\n    storeRefreshToken: false\n  },\n  oidcClient: {\n    httpTimeout: 2500,\n    clockTolerance: 1000\n  }\n})));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvYXV0aDAudHM/Njk2NiJdLCJuYW1lcyI6WyJzZXJ2ZXJSdW50aW1lQ29uZmlnIiwiZ2V0Q29uZmlnIiwiYXV0aCIsImNvb2tpZVNlY3JldCIsImluaXRBdXRoMCIsInNlc3Npb24iLCJjb29raWVMaWZldGltZSIsInN0b3JlSWRUb2tlbiIsInN0b3JlQWNjZXNzVG9rZW4iLCJzdG9yZVJlZnJlc2hUb2tlbiIsIm9pZGNDbGllbnQiLCJodHRwVGltZW91dCIsImNsb2NrVG9sZXJhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQSxNQUFNO0FBQUNBO0FBQUQsSUFBd0JDLGtEQUFTLEVBQXZDO0FBQ0EsTUFBTTtBQUFDQyxNQUFEO0FBQU9DO0FBQVAsSUFBd0JILG1CQUE5QjtBQUVlSSxvSUFBUyxpQ0FDbkJGLElBRG1CO0FBRXRCRyxTQUFPLEVBQUU7QUFDTkYsZ0JBRE07QUFFTkcsa0JBQWMsRUFBRSxLQUFLLEVBQUwsR0FBVSxDQUZwQjtBQUdOQyxnQkFBWSxFQUFFLEtBSFI7QUFJTkMsb0JBQWdCLEVBQUUsS0FKWjtBQUtOQyxxQkFBaUIsRUFBRTtBQUxiLEdBRmE7QUFTdEJDLFlBQVUsRUFBRTtBQUNWQyxlQUFXLEVBQUUsSUFESDtBQUVWQyxrQkFBYyxFQUFDO0FBRkw7QUFUVSxHQUF4QiIsImZpbGUiOiIuL3NyYy91dGlscy9hdXRoMC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5pdEF1dGgwfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJztcbmltcG9ydCBnZXRDb25maWcgZnJvbSduZXh0L2NvbmZpZyc7XG5cblxuY29uc3Qge3NlcnZlclJ1bnRpbWVDb25maWd9ID0gZ2V0Q29uZmlnKCk7XG5jb25zdCB7YXV0aCwgY29va2llU2VjcmV0fSA9ICBzZXJ2ZXJSdW50aW1lQ29uZmlnO1xuXG5leHBvcnQgZGVmYXVsdCBpbml0QXV0aDAoe1xuICAuLi5hdXRoLFxuICBzZXNzaW9uOiB7XG4gICAgIGNvb2tpZVNlY3JldCxcbiAgICAgY29va2llTGlmZXRpbWU6IDYwICogNjAgKiA4LFxuICAgICBzdG9yZUlkVG9rZW46IGZhbHNlLFxuICAgICBzdG9yZUFjY2Vzc1Rva2VuOiBmYWxzZSxcbiAgICAgc3RvcmVSZWZyZXNoVG9rZW46IGZhbHNlXG4gIH0sXG4gIG9pZGNDbGllbnQ6IHtcbiAgICBodHRwVGltZW91dDogMjUwMCxcbiAgICBjbG9ja1RvbGVyYW5jZToxMDAwXG4gIH1cbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/auth0.ts\n");

/***/ }),

/***/ 5:
/*!***********************************!*\
  !*** multi ./src/pages/api/me.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/michaelshokoya/Documents/code/node/recipe-website/src/pages/api/me.ts */"./src/pages/api/me.ts");


/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@auth0/nextjs-auth0\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCI/N2RhOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYXV0aDAvbmV4dGpzLWF1dGgwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGF1dGgwL25leHRqcy1hdXRoMFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@auth0/nextjs-auth0\n");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/config\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2NvbmZpZ1wiP2Y4NzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/config\n");

/***/ })

/******/ });