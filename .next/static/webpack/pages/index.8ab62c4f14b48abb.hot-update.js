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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var _components_available_hours__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/available-hours */ \"./src/components/available-hours/index.tsx\");\n/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/fetcher */ \"./src/utils/fetcher.ts\");\n// Add Calendar\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst AppCalendar = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/*! import() */ \"src_components_calendar_index_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/calendar */ \"./src/components/calendar/index.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"index.tsx -> \" + \"../components/calendar\"\n        ]\n    },\n    ssr: false\n});\n_c = AppCalendar;\nvar __N_SSP = true;\nfunction Home(param) {\n    let { currentDate  } = param;\n    _s();\n    const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const { data , isLoading , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(()=>date ? \"/api/available-hours?currentDate=\" + date.toISOString() : null, _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    const getAvailableByDate = (date)=>{\n        setDate(date);\n    };\n    const onChangeDate = (date)=>{\n        console.log(\"selectedDate\", date);\n        getAvailableByDate(date);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"app\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center\",\n                children: \"React Calendar\"\n            }, void 0, false, {\n                fileName: \"/Users/carlostrujillo/Documents/owns/vet-calendar/src/pages/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"calendar-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppCalendar, {\n                    currentDate: currentDate,\n                    onChangeDate: onChangeDate\n                }, void 0, false, {\n                    fileName: \"/Users/carlostrujillo/Documents/owns/vet-calendar/src/pages/index.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/carlostrujillo/Documents/owns/vet-calendar/src/pages/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_available_hours__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                isLoading: isLoading,\n                data: data\n            }, void 0, false, {\n                fileName: \"/Users/carlostrujillo/Documents/owns/vet-calendar/src/pages/index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/carlostrujillo/Documents/owns/vet-calendar/src/pages/index.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"6Ig5WGcZTKHPRN01NHskDviGpSw=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"AppCalendar\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZUFBZTtBQUNmOztBQUNtQztBQUNGO0FBQ1Q7QUFDbUM7QUFFcEI7QUFPdkMsTUFBTUssY0FBY0wsbURBQU9BLENBQ3pCLElBQU0sbU1BQU87Ozs7OztJQUNYTSxLQUFLLEtBQUs7O0tBRlJEOztBQUtTLFNBQVNFLEtBQUssS0FBNEIsRUFBRTtRQUE5QixFQUFFQyxZQUFXLEVBQWUsR0FBNUI7O0lBQzNCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBYyxJQUFJO0lBRWxELE1BQU0sRUFBRVUsS0FBSSxFQUFFQyxVQUFTLEVBQUVDLE1BQUssRUFBRSxHQUFHWCwrQ0FBTUEsQ0FBMEIsSUFBTU8sT0FBTyxzQ0FBc0NBLEtBQUtLLFdBQVcsS0FBSyxJQUFJLEVBQUVWLHNEQUFPQTtJQUV4SixNQUFNVyxxQkFBcUIsQ0FBQ04sT0FBZTtRQUN6Q0MsUUFBUUQ7SUFDVjtJQUVBLE1BQU1PLGVBQWUsQ0FBQ1AsT0FBZTtRQUNuQ1EsUUFBUUMsR0FBRyxDQUFDLGdCQUFnQlQ7UUFDNUJNLG1CQUFtQk47SUFDckI7SUFFQSxxQkFDRSw4REFBQ1U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFjOzs7Ozs7MEJBQzVCLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ2Y7b0JBQVlHLGFBQWFBO29CQUFhUSxjQUFjQTs7Ozs7Ozs7Ozs7MEJBRXZELDhEQUFDYixtRUFBY0E7Z0JBQUNTLFdBQVdBO2dCQUFXRCxNQUFNQTs7Ozs7Ozs7Ozs7O0FBR2xELENBQUM7R0F2QnVCSjs7UUFHYUwsMkNBQU1BOzs7TUFIbkJLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBZGQgQ2FsZW5kYXJcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSBcImx1eG9uXCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgQXZhaWxhYmxlSG91cnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvYXZhaWxhYmxlLWhvdXJzXCI7XG5pbXBvcnQgeyBBdmFsaWFibGVIb3VyUmVzcG9uc2UgfSBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xuaW1wb3J0IGZldGNoZXIgZnJvbSBcIi4uL3V0aWxzL2ZldGNoZXJcIjtcblxuXG50eXBlIEFwcENhbGVuZGFyID0ge1xuICBjdXJyZW50RGF0ZTogc3RyaW5nO1xufVxuXG5jb25zdCBBcHBDYWxlbmRhciA9IGR5bmFtaWMoXG4gICgpID0+IGltcG9ydCgnLi4vY29tcG9uZW50cy9jYWxlbmRhcicpLFxuICB7IHNzcjogZmFsc2UgfVxuKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgY3VycmVudERhdGUgfTogQXBwQ2FsZW5kYXIpIHtcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGU8RGF0ZSB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBlcnJvciB9ID0gdXNlU1dSPEF2YWxpYWJsZUhvdXJSZXNwb25zZVtdPigoKSA9PiBkYXRlID8gJy9hcGkvYXZhaWxhYmxlLWhvdXJzP2N1cnJlbnREYXRlPScgKyBkYXRlLnRvSVNPU3RyaW5nKCkgOiBudWxsLCBmZXRjaGVyKVxuXG4gIGNvbnN0IGdldEF2YWlsYWJsZUJ5RGF0ZSA9IChkYXRlOiBEYXRlKSA9PiB7XG4gICAgc2V0RGF0ZShkYXRlKTtcbiAgfVxuXG4gIGNvbnN0IG9uQ2hhbmdlRGF0ZSA9IChkYXRlOiBEYXRlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3NlbGVjdGVkRGF0ZScsIGRhdGUpO1xuICAgIGdldEF2YWlsYWJsZUJ5RGF0ZShkYXRlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlJlYWN0IENhbGVuZGFyPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItY29udGFpbmVyXCI+XG4gICAgICAgIDxBcHBDYWxlbmRhciBjdXJyZW50RGF0ZT17Y3VycmVudERhdGV9IG9uQ2hhbmdlRGF0ZT17b25DaGFuZ2VEYXRlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8QXZhaWxhYmxlSG91cnMgaXNMb2FkaW5nPXtpc0xvYWRpbmd9IGRhdGE9e2RhdGF9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGN1cnJlbnREYXRlOiBEYXRlVGltZS5ub3coKS5zZXRMb2NhbGUoJ2VzLUNMJykudG9JU08oKVxuICAgIH0sXG4gIH1cbn0iXSwibmFtZXMiOlsiZHluYW1pYyIsInVzZVN0YXRlIiwidXNlU1dSIiwiQXZhaWxhYmxlSG91cnMiLCJmZXRjaGVyIiwiQXBwQ2FsZW5kYXIiLCJzc3IiLCJIb21lIiwiY3VycmVudERhdGUiLCJkYXRlIiwic2V0RGF0ZSIsImRhdGEiLCJpc0xvYWRpbmciLCJlcnJvciIsInRvSVNPU3RyaW5nIiwiZ2V0QXZhaWxhYmxlQnlEYXRlIiwib25DaGFuZ2VEYXRlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});