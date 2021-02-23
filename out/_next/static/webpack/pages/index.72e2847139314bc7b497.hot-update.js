webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProjectDialog.tsx":
/*!**************************************!*\
  !*** ./components/ProjectDialog.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-window */ \"./node_modules/react-window/dist/index.esm.js\");\n/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-virtualized-auto-sizer */ \"./node_modules/react-virtualized-auto-sizer/dist/index.esm.js\");\n/* harmony import */ var _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resources/data/projects */ \"./resources/data/projects/index.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/gohhwain/work/depromeet/www.depromeet.com/components/ProjectDialog.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$(),\n    _s5 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/* eslint-disable react/no-array-index-key */\n\n\n\n\n\n\n\nvar ProjectDialog = function ProjectDialog(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isClientSide = _useState[0],\n      setClientSide = _useState[1];\n\n  var visible = props.visible;\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (document !== undefined) {\n      setClientSide(true);\n    }\n  }, [setClientSide]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: isClientSide && visible.visible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectDialogContents, _objectSpread({}, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 43\n    }, _this)\n  }, void 0, false);\n};\n\n_s(ProjectDialog, \"TqvjQmpctxuQ3TxXSGPB8VZpGC8=\");\n\n_c = ProjectDialog;\n\nvar ProjectDialogContents = function ProjectDialogContents(_ref) {\n  _s2();\n\n  var visible = _ref.visible,\n      setVisible = _ref.setVisible;\n  var modalElement = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return document.createElement('div');\n  }, []);\n  var closeDialog = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    return setVisible({\n      visible: false,\n      index: 0\n    });\n  }, [setVisible]);\n  var scrollRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  useScrollToIndex(scrollRef, visible.index);\n  usePortalSetup(modalElement);\n  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.createPortal( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Backdrop, {\n      onClick: closeDialog\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      children: function children(_ref2) {\n        var width = _ref2.width,\n            height = _ref2.height;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectList, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_window__WEBPACK_IMPORTED_MODULE_5__[\"FixedSizeList\"], {\n            itemCount: _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__[\"default\"].length,\n            layout: \"horizontal\",\n            height: \"rem\",\n            width: width,\n            itemSize: contentWidth * 10,\n            ref: scrollRef,\n            itemData: _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n            style: {\n              padding: '0 56rem',\n              overflow: 'scroll',\n              display: 'flex',\n              justifyContent: 'center',\n              alignContent: 'center'\n            },\n            children: ProjectItem\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 13\n        }, _this);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 7\n  }, _this), modalElement);\n};\n\n_s2(ProjectDialogContents, \"6htfsSUOy87qGCLRa1IvHmjIxFs=\", false, function () {\n  return [useScrollToIndex, usePortalSetup];\n});\n\n_c2 = ProjectDialogContents;\n\nvar ProjectItem = function ProjectItem(_ref3) {\n  _s3();\n\n  var data = _ref3.data,\n      index = _ref3.index,\n      style = _ref3.style;\n  var projectData = data[index];\n  var Image = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return projectData.image();\n  }, [projectData]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectDetail, {\n    style: style,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"image\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Image, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"detail\",\n      children: projectData.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }, _this)]\n  }, \"project-detail-\".concat(index), true, {\n    fileName: _jsxFileName,\n    lineNumber: 91,\n    columnNumber: 5\n  }, _this);\n};\n\n_s3(ProjectItem, \"oHF6iZ4uCM2aIX7eb3MU31h4r7w=\");\n\n_c3 = ProjectItem;\n\nvar useScrollToIndex = function useScrollToIndex(scrollRef, index) {\n  _s4();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (scrollRef.current !== null) {\n      scrollRef.current.scrollToItem(index, 'center');\n    }\n  }, [scrollRef, index]);\n};\n\n_s4(useScrollToIndex, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\nvar usePortalSetup = function usePortalSetup(portal) {\n  _s5();\n\n  var rootId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'modal-root';\n  return Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var modalRoot = document.getElementById(rootId);\n    modalRoot.appendChild(portal);\n    return function () {\n      modalRoot.removeChild(portal);\n    };\n  }, [portal, rootId]);\n}; // rem\n\n\n_s5(usePortalSetup, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\nvar horizontalPadding = 56;\nvar contentWidth = 80;\nvar contentHeight = 84;\nvar contentGap = 5.6;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__Container\",\n  componentId: \"sc-1fctgpg-0\"\n})([\"position:fixed;top:0;left:0;right:0;bottom:0;color:white;\"]);\n_c4 = Container;\nvar Backdrop = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__Backdrop\",\n  componentId: \"sc-1fctgpg-1\"\n})([\"position:fixed;inset:0;background-color:black;opacity:0.8;z-index:-1;\"]);\n_c5 = Backdrop;\nvar ProjectList = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__ProjectList\",\n  componentId: \"sc-1fctgpg-2\"\n})([\"display:flex;height:100%;align-content:center;\"]);\n_c6 = ProjectList;\nvar ProjectDetail = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__ProjectDetail\",\n  componentId: \"sc-1fctgpg-3\"\n})([\"width:\", \"rem;height:\", \"rem;background-color:#212121;border-radius:3.6rem;opacity:1;margin-left:5.6rem;:first-of-type{margin-left:0;}.image{height:42rem;width:100%;}.detail{height:42rem;width:100%;}\"], contentWidth, contentHeight);\n_c7 = ProjectDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectDialog);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"ProjectDialog\");\n$RefreshReg$(_c2, \"ProjectDialogContents\");\n$RefreshReg$(_c3, \"ProjectItem\");\n$RefreshReg$(_c4, \"Container\");\n$RefreshReg$(_c5, \"Backdrop\");\n$RefreshReg$(_c6, \"ProjectList\");\n$RefreshReg$(_c7, \"ProjectDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0RGlhbG9nLnRzeD83YTMxIl0sIm5hbWVzIjpbIlByb2plY3REaWFsb2ciLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNDbGllbnRTaWRlIiwic2V0Q2xpZW50U2lkZSIsInZpc2libGUiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsInVuZGVmaW5lZCIsIlByb2plY3REaWFsb2dDb250ZW50cyIsInNldFZpc2libGUiLCJtb2RhbEVsZW1lbnQiLCJ1c2VNZW1vIiwiY3JlYXRlRWxlbWVudCIsImNsb3NlRGlhbG9nIiwidXNlQ2FsbGJhY2siLCJpbmRleCIsInNjcm9sbFJlZiIsInVzZVJlZiIsInVzZVNjcm9sbFRvSW5kZXgiLCJ1c2VQb3J0YWxTZXR1cCIsIlJlYWN0RE9NIiwiY3JlYXRlUG9ydGFsIiwid2lkdGgiLCJoZWlnaHQiLCJwcm9qZWN0c0RhdGEiLCJsZW5ndGgiLCJjb250ZW50V2lkdGgiLCJwYWRkaW5nIiwib3ZlcmZsb3ciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkNvbnRlbnQiLCJQcm9qZWN0SXRlbSIsImRhdGEiLCJzdHlsZSIsInByb2plY3REYXRhIiwiSW1hZ2UiLCJpbWFnZSIsInRpdGxlIiwiY3VycmVudCIsInNjcm9sbFRvSXRlbSIsInBvcnRhbCIsInJvb3RJZCIsIm1vZGFsUm9vdCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsImhvcml6b250YWxQYWRkaW5nIiwiY29udGVudEhlaWdodCIsImNvbnRlbnRHYXAiLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJCYWNrZHJvcCIsIlByb2plY3RMaXN0IiwiUHJvamVjdERldGFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQWFBLElBQU1BLGFBQXFDLEdBQUcsU0FB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QUF4QixDQUFsQjtBQUNBQyxhQUFTLENBQUNFLFdBQVYsQ0FBc0JKLE1BQXRCO0FBQ0EsV0FBTyxZQUFNO0FBQ1hFLGVBQVMsQ0FBQ0csV0FBVixDQUFzQkwsTUFBdEI7QUFDRCxLQUZEO0FBR0QsR0FOK0UsRUFNN0UsQ0FBQ0EsTUFBRCxFQUFTQyxNQUFULENBTjZFLENBQXpEO0FBQUEsQ0FBdkIsQyxDQVFBOzs7SUFSTXZCLGM7O0FBU04sSUFBTTRCLGlCQUFpQixHQUFHLEVBQTFCO0FBQ0EsSUFBTXJCLFlBQVksR0FBRyxFQUFyQjtBQUNBLElBQU1zQixhQUFhLEdBQUcsRUFBdEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsR0FBbkI7QUFDQSxJQUFNQyxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaUVBQWY7TUFBTUYsUztBQVFOLElBQU1HLFFBQVEsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw2RUFBZDtNQUFNQyxRO0FBUU4sSUFBTUMsV0FBVyxHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNEQUFqQjtNQUFNRSxXO0FBS04sSUFBTUMsYUFBYSxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGdOQUNSMUIsWUFEUSxFQUVQc0IsYUFGTyxDQUFuQjtNQUFNTyxhO0FBcUJTeEQsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3REaWFsb2cudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5ICovXG5pbXBvcnQge1xuICBGQywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgTXV0YWJsZVJlZk9iamVjdCxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7XG4gIEZpeGVkU2l6ZUxpc3QsIExpc3RDaGlsZENvbXBvbmVudFByb3BzLFxufSBmcm9tICdyZWFjdC13aW5kb3cnO1xuaW1wb3J0IEF1dG9TaXplIGZyb20gJ3JlYWN0LXZpcnR1YWxpemVkLWF1dG8tc2l6ZXInO1xuaW1wb3J0IHByb2plY3RzRGF0YSBmcm9tICcuLi9yZXNvdXJjZXMvZGF0YS9wcm9qZWN0cyc7XG5pbXBvcnQgeyBQcm9qZWN0RGF0YSB9IGZyb20gJy4uL3Jlc291cmNlcy9kYXRhL2ludGVyZmFjZSc7XG5pbXBvcnQgbGlzdFN0eWxlIGZyb20gJy4vcHJvamVjdC1kaWFsb2cubW9kdWxlLnNjc3MnO1xuXG5pbnRlcmZhY2UgUHJvamVjdERpYWxvZ1Zpc2libGVBcmcge1xuICAgIHZpc2libGU6IGJvb2xlYW47XG4gICAgaW5kZXg6IG51bWJlcjtcbn1cbmludGVyZmFjZSBQcm9qZWN0RGlhbG9nUHJvcHMge1xuICB2aXNpYmxlOiBQcm9qZWN0RGlhbG9nVmlzaWJsZUFyZyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIHNldFZpc2libGU6IChhcmc6IFByb2plY3REaWFsb2dWaXNpYmxlQXJnKSA9PiB2b2lkO1xufVxuY29uc3QgUHJvamVjdERpYWxvZzogRkM8UHJvamVjdERpYWxvZ1Byb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbaXNDbGllbnRTaWRlLCBzZXRDbGllbnRTaWRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyB2aXNpYmxlIH0gPSBwcm9wcztcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXRDbGllbnRTaWRlKHRydWUpO1xuICAgIH1cbiAgfSwgW3NldENsaWVudFNpZGVdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXNDbGllbnRTaWRlICYmIHZpc2libGUudmlzaWJsZSAmJiA8UHJvamVjdERpYWxvZ0NvbnRlbnRzIHsuLi5wcm9wc30gLz59XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBQcm9qZWN0RGlhbG9nQ29udGVudHM6RkM8UHJvamVjdERpYWxvZ1Byb3BzPiA9ICh7IHZpc2libGUsIHNldFZpc2libGUgfSkgPT4ge1xuICBjb25zdCBtb2RhbEVsZW1lbnQgPSB1c2VNZW1vKCgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCBbXSk7XG4gIGNvbnN0IGNsb3NlRGlhbG9nID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh7IHZpc2libGU6IGZhbHNlLCBpbmRleDogMCB9KSwgW3NldFZpc2libGVdKTtcbiAgY29uc3Qgc2Nyb2xsUmVmID0gdXNlUmVmPEZpeGVkU2l6ZUxpc3Q+KG51bGwpO1xuXG4gIHVzZVNjcm9sbFRvSW5kZXgoc2Nyb2xsUmVmLCB2aXNpYmxlLmluZGV4KTtcbiAgdXNlUG9ydGFsU2V0dXAobW9kYWxFbGVtZW50KTtcblxuICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKFxuICAgIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxCYWNrZHJvcCBvbkNsaWNrPXtjbG9zZURpYWxvZ30gLz5cbiAgICAgICAgPEF1dG9TaXplPlxuICAgICAgICAgIHsoeyB3aWR0aCwgaGVpZ2h0IH0pID0+IChcbiAgICAgICAgICAgIDxQcm9qZWN0TGlzdD5cbiAgICAgICAgICAgICAgPEZpeGVkU2l6ZUxpc3RcbiAgICAgICAgICAgICAgICBpdGVtQ291bnQ9e3Byb2plY3RzRGF0YS5sZW5ndGh9XG4gICAgICAgICAgICAgICAgbGF5b3V0PVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwicmVtXCJcbiAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgICAgaXRlbVNpemU9e2NvbnRlbnRXaWR0aCAqIDEwfVxuICAgICAgICAgICAgICAgIHJlZj17c2Nyb2xsUmVmfVxuICAgICAgICAgICAgICAgIGl0ZW1EYXRhPXtwcm9qZWN0c0RhdGF9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwIDU2cmVtJyxcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnc2Nyb2xsJyxcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtQcm9qZWN0SXRlbX1cbiAgICAgICAgICAgICAgPC9GaXhlZFNpemVMaXN0PlxuICAgICAgICAgICAgPC9Qcm9qZWN0TGlzdD5cbiAgICAgICAgICApfVxuICAgICAgICA8L0F1dG9TaXplPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKSxcbiAgICBtb2RhbEVsZW1lbnQsXG4gICk7XG59O1xuXG5pbnRlcmZhY2UgUHJvamVjdERhdGFQcm9wcyBleHRlbmRzIExpc3RDaGlsZENvbXBvbmVudFByb3Bze1xuICBkYXRhOiBQcm9qZWN0RGF0YVtdO1xufVxuY29uc3QgUHJvamVjdEl0ZW06RkM8UHJvamVjdERhdGFQcm9wcz4gPSAoeyBkYXRhLCBpbmRleCwgc3R5bGUgfSkgPT4ge1xuICBjb25zdCBwcm9qZWN0RGF0YSA9IGRhdGFbaW5kZXhdO1xuICBjb25zdCBJbWFnZSA9IHVzZU1lbW8oKCkgPT4gcHJvamVjdERhdGEuaW1hZ2UoKSwgW3Byb2plY3REYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UHJvamVjdERldGFpbFxuICAgICAga2V5PXtgcHJvamVjdC1kZXRhaWwtJHtpbmRleH1gfVxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cbiAgICAgICAgPEltYWdlIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsXCI+e3Byb2plY3REYXRhLnRpdGxlfTwvZGl2PlxuICAgIDwvUHJvamVjdERldGFpbD5cbiAgKTtcbn07XG5cbmNvbnN0IHVzZVNjcm9sbFRvSW5kZXggPSAoc2Nyb2xsUmVmOiBNdXRhYmxlUmVmT2JqZWN0PEZpeGVkU2l6ZUxpc3Q+LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNjcm9sbFJlZi5jdXJyZW50ICE9PSBudWxsKSB7IHNjcm9sbFJlZi5jdXJyZW50LnNjcm9sbFRvSXRlbShpbmRleCwgJ2NlbnRlcicpOyB9XG4gIH0sIFtzY3JvbGxSZWYsIGluZGV4XSk7XG59O1xuXG5jb25zdCB1c2VQb3J0YWxTZXR1cCA9IChwb3J0YWw6IEhUTUxFbGVtZW50LCByb290SWQgPSAnbW9kYWwtcm9vdCcpID0+IHVzZUVmZmVjdCgoKSA9PiB7XG4gIGNvbnN0IG1vZGFsUm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvb3RJZCk7XG4gIG1vZGFsUm9vdC5hcHBlbmRDaGlsZChwb3J0YWwpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIG1vZGFsUm9vdC5yZW1vdmVDaGlsZChwb3J0YWwpO1xuICB9O1xufSwgW3BvcnRhbCwgcm9vdElkXSk7XG5cbi8vIHJlbVxuY29uc3QgaG9yaXpvbnRhbFBhZGRpbmcgPSA1NjtcbmNvbnN0IGNvbnRlbnRXaWR0aCA9IDgwO1xuY29uc3QgY29udGVudEhlaWdodCA9IDg0O1xuY29uc3QgY29udGVudEdhcCA9IDUuNjtcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOjA7XG4gIGxlZnQ6MDtcbiAgcmlnaHQ6MDtcbiAgYm90dG9tOjA7XG4gIGNvbG9yOiB3aGl0ZTtcbmA7XG5jb25zdCBCYWNrZHJvcCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjg7XG4gIHotaW5kZXg6IC0xO1xuYDtcblxuY29uc3QgUHJvamVjdExpc3QgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5jb25zdCBQcm9qZWN0RGV0YWlsID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7Y29udGVudFdpZHRofXJlbTtcbiAgaGVpZ2h0OiAke2NvbnRlbnRIZWlnaHR9cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xuICBib3JkZXItcmFkaXVzOiAzLjZyZW07XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbi1sZWZ0OiA1LjZyZW07XG4gIDpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAuaW1hZ2Uge1xuICAgIGhlaWdodDogNDJyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZGV0YWlsIHtcbiAgICBoZWlnaHQ6IDQycmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0RGlhbG9nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProjectDialog.tsx\n");

/***/ })

})