"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/available-hours/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/available-hours/index.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AvailableHours; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skeleton */ \"./src/components/available-hours/skeleton.tsx\");\n/* harmony import */ var _available_hours_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./available-hours.module.css */ \"./src/components/available-hours/available-hours.module.css\");\n/* harmony import */ var _available_hours_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_available_hours_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction VetTargetWrapper(param) {\n    let { children  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_available_hours_module_css__WEBPACK_IMPORTED_MODULE_2___default().vetTargetContainer),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/carlostrujillo/Documents/owns/vet-calendar/src/components/available-hours/index.tsx\",\n        lineNumber: 15,\n        columnNumber: 10\n    }, this);\n}\n_c = VetTargetWrapper;\nfunction AvailableHours(param) {\n    let { isLoading , data  } = param;\n    return !isLoading ? Array.from(Array(3).keys()).map(()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VetTargetWrapper, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skeleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/carlostrujillo/Documents/owns/vet-calendar/src/components/available-hours/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/carlostrujillo/Documents/owns/vet-calendar/src/components/available-hours/index.tsx\",\n            lineNumber: 23,\n            columnNumber: 44\n        }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: \" data \"\n    }, void 0, false);\n}\n_c1 = AvailableHours;\nvar _c, _c1;\n$RefreshReg$(_c, \"VetTargetWrapper\");\n$RefreshReg$(_c1, \"AvailableHours\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hdmFpbGFibGUtaG91cnMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ2dEO0FBQ0U7QUFXbEQsU0FBU0UsaUJBQWlCLEtBQWtDLEVBQUU7UUFBcEMsRUFBRUMsU0FBUSxFQUF3QixHQUFsQztJQUN4QixxQkFBTyw4REFBQ0M7UUFBSUMsV0FBV0osdUZBQXlCO2tCQUFHRTs7Ozs7O0FBQ3JEO0tBRlNEO0FBSU0sU0FBU0ssZUFBZSxLQUdsQixFQUFFO1FBSGdCLEVBQ3JDQyxVQUFTLEVBQ1RDLEtBQUksRUFDZSxHQUhrQjtJQUlyQyxPQUFPLENBQUNELFlBQ05FLE1BQU1DLElBQUksQ0FBQ0QsTUFBTSxHQUFHRSxJQUFJLElBQUlDLEdBQUcsQ0FBQyxrQkFBTyw4REFBQ1g7c0JBQ3RDLDRFQUFDRixpREFBc0JBOzs7Ozs7Ozs7a0NBR3pCO2tCQUFFO3FCQUNIO0FBQ0gsQ0FBQztNQVh1Qk8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYXZhaWxhYmxlLWhvdXJzL2luZGV4LnRzeD8wOGQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF2YWxpYWJsZUhvdXJSZXNwb25zZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgQXZhaWxhYmxlSG91cnNTa2VsZXRvbiBmcm9tIFwiLi9za2VsZXRvblwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9hdmFpbGFibGUtaG91cnMubW9kdWxlLmNzc1wiO1xuXG50eXBlIEF2YWlsYWJsZUhvdXJzVHlwZSA9IHtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuICBkYXRhPzogQXZhbGlhYmxlSG91clJlc3BvbnNlO1xufTtcblxudHlwZSBWZXRUYXJnZXRXcmFwcGVyVHlwZSA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5cbmZ1bmN0aW9uIFZldFRhcmdldFdyYXBwZXIoeyBjaGlsZHJlbiB9OiBWZXRUYXJnZXRXcmFwcGVyVHlwZSkge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52ZXRUYXJnZXRDb250YWluZXJ9PntjaGlsZHJlbn08L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF2YWlsYWJsZUhvdXJzKHtcbiAgaXNMb2FkaW5nLFxuICBkYXRhLFxufTogQXZhaWxhYmxlSG91cnNUeXBlKSB7XG4gIHJldHVybiAhaXNMb2FkaW5nID8gKFxuICAgIEFycmF5LmZyb20oQXJyYXkoMykua2V5cygpKS5tYXAoKCkgPT4gKDxWZXRUYXJnZXRXcmFwcGVyPlxuICAgICAgPEF2YWlsYWJsZUhvdXJzU2tlbGV0b24gLz5cbiAgICA8L1ZldFRhcmdldFdyYXBwZXI+KSlcbiAgKSA6IChcbiAgICA8PiBkYXRhIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkF2YWlsYWJsZUhvdXJzU2tlbGV0b24iLCJzdHlsZXMiLCJWZXRUYXJnZXRXcmFwcGVyIiwiY2hpbGRyZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJ2ZXRUYXJnZXRDb250YWluZXIiLCJBdmFpbGFibGVIb3VycyIsImlzTG9hZGluZyIsImRhdGEiLCJBcnJheSIsImZyb20iLCJrZXlzIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/available-hours/index.tsx\n"));

/***/ })

});