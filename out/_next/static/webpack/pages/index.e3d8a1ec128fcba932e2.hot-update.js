webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProjectDialog.tsx":
/*!**************************************!*\
  !*** ./components/ProjectDialog.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-window */ \"./node_modules/react-window/dist/index.esm.js\");\n/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-virtualized-auto-sizer */ \"./node_modules/react-virtualized-auto-sizer/dist/index.esm.js\");\n/* harmony import */ var _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resources/data/projects */ \"./resources/data/projects/index.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/gohhwain/work/depromeet/www.depromeet.com/components/ProjectDialog.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$(),\n    _s5 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/* eslint-disable react/no-array-index-key */\n\n\n\n\n\n\n\nvar ProjectDialog = function ProjectDialog(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isClientSide = _useState[0],\n      setClientSide = _useState[1];\n\n  var visible = props.visible;\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (document !== undefined) {\n      setClientSide(true);\n    }\n  }, [setClientSide]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: isClientSide && visible.visible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectDialogContents, _objectSpread({}, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 43\n    }, _this)\n  }, void 0, false);\n};\n\n_s(ProjectDialog, \"TqvjQmpctxuQ3TxXSGPB8VZpGC8=\");\n\n_c = ProjectDialog;\n\nvar ProjectDialogContents = function ProjectDialogContents(_ref) {\n  _s2();\n\n  var visible = _ref.visible,\n      setVisible = _ref.setVisible;\n  var modalElement = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return document.createElement('div');\n  }, []);\n  var closeDialog = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    return setVisible({\n      visible: false,\n      index: 0\n    });\n  }, [setVisible]);\n  var scrollRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  useScrollToIndex(scrollRef, visible.index);\n  usePortalSetup(modalElement);\n  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.createPortal( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Backdrop, {\n      onClick: closeDialog\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      children: function children(_ref2) {\n        var width = _ref2.width,\n            height = _ref2.height;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectList, {\n          height: height,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_window__WEBPACK_IMPORTED_MODULE_5__[\"FixedSizeList\"], {\n            itemCount: _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__[\"default\"].length,\n            layout: \"horizontal\",\n            height: \"rem\",\n            width: width,\n            itemSize: contentWidth * 10,\n            ref: scrollRef,\n            itemData: _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n            style: {\n              padding: '0 56rem',\n              overflow: 'scroll',\n              display: 'flex',\n              justifyContent: 'center',\n              alignContent: 'center'\n            },\n            children: ProjectItem\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 13\n        }, _this);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 7\n  }, _this), modalElement);\n};\n\n_s2(ProjectDialogContents, \"6htfsSUOy87qGCLRa1IvHmjIxFs=\", false, function () {\n  return [useScrollToIndex, usePortalSetup];\n});\n\n_c2 = ProjectDialogContents;\n\nvar ProjectItem = function ProjectItem(_ref3) {\n  _s3();\n\n  var data = _ref3.data,\n      index = _ref3.index,\n      style = _ref3.style;\n  var projectData = data[index];\n  var Image = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return projectData.image();\n  }, [projectData]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectDetail, {\n    style: style,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"image\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Image, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"detail\",\n      children: projectData.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }, _this)]\n  }, \"project-detail-\".concat(index), true, {\n    fileName: _jsxFileName,\n    lineNumber: 91,\n    columnNumber: 5\n  }, _this);\n};\n\n_s3(ProjectItem, \"oHF6iZ4uCM2aIX7eb3MU31h4r7w=\");\n\n_c3 = ProjectItem;\n\nvar useScrollToIndex = function useScrollToIndex(scrollRef, index) {\n  _s4();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (scrollRef.current !== null) {\n      scrollRef.current.scrollToItem(index, 'center');\n    }\n  }, [scrollRef, index]);\n};\n\n_s4(useScrollToIndex, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\nvar usePortalSetup = function usePortalSetup(portal) {\n  _s5();\n\n  var rootId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'modal-root';\n  return Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var modalRoot = document.getElementById(rootId);\n    modalRoot.appendChild(portal);\n    return function () {\n      modalRoot.removeChild(portal);\n    };\n  }, [portal, rootId]);\n}; // rem\n\n\n_s5(usePortalSetup, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\nvar horizontalPadding = 56;\nvar contentWidth = 80;\nvar contentHeight = 84;\nvar contentGap = 5.6;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__Container\",\n  componentId: \"sc-1fctgpg-0\"\n})([\"position:fixed;top:0;left:0;right:0;bottom:0;color:white;\"]);\n_c4 = Container;\nvar Backdrop = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__Backdrop\",\n  componentId: \"sc-1fctgpg-1\"\n})([\"position:fixed;inset:0;background-color:black;opacity:0.8;z-index:-1;\"]);\n_c5 = Backdrop;\nvar ProjectList = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__ProjectList\",\n  componentId: \"sc-1fctgpg-2\"\n})([\"display:flex;height:\", \"px;align-content:center;\"], function (_ref4) {\n  var height = _ref4.height;\n  return height;\n});\n_c6 = ProjectList;\nvar ProjectDetail = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__ProjectDetail\",\n  componentId: \"sc-1fctgpg-3\"\n})([\"width:\", \"rem;height:\", \"rem;background-color:#212121;border-radius:3.6rem;opacity:1;margin-left:5.6rem;:first-of-type{margin-left:0;}.image{height:42rem;width:100%;}.detail{height:42rem;width:100%;}\"], contentWidth, contentHeight);\n_c7 = ProjectDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectDialog);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"ProjectDialog\");\n$RefreshReg$(_c2, \"ProjectDialogContents\");\n$RefreshReg$(_c3, \"ProjectItem\");\n$RefreshReg$(_c4, \"Container\");\n$RefreshReg$(_c5, \"Backdrop\");\n$RefreshReg$(_c6, \"ProjectList\");\n$RefreshReg$(_c7, \"ProjectDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0RGlhbG9nLnRzeD83YTMxIl0sIm5hbWVzIjpbIlByb2plY3REaWFsb2ciLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNDbGllbnRTaWRlIiwic2V0Q2xpZW50U2lkZSIsInZpc2libGUiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsInVuZGVmaW5lZCIsIlByb2plY3REaWFsb2dDb250ZW50cyIsInNldFZpc2libGUiLCJtb2RhbEVsZW1lbnQiLCJ1c2VNZW1vIiwiY3JlYXRlRWxlbWVudCIsImNsb3NlRGlhbG9nIiwidXNlQ2FsbGJhY2siLCJpbmRleCIsInNjcm9sbFJlZiIsInVzZVJlZiIsInVzZVNjcm9sbFRvSW5kZXgiLCJ1c2VQb3J0YWxTZXR1cCIsIlJlYWN0RE9NIiwiY3JlYXRlUG9ydGFsIiwid2lkdGgiLCJoZWlnaHQiLCJwcm9qZWN0c0RhdGEiLCJsZW5ndGgiLCJjb250ZW50V2lkdGgiLCJwYWRkaW5nIiwib3ZlcmZsb3ciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkNvbnRlbnQiLCJQcm9qZWN0SXRlbSIsImRhdGEiLCJzdHlsZSIsInByb2plY3REYXRhIiwiSW1hZ2UiLCJpbWFnZSIsInRpdGxlIiwiY3VycmVudCIsInNjcm9sbFRvSXRlbSIsInBvcnRhbCIsInJvb3RJZCIsIm1vZGFsUm9vdCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsImhvcml6b250YWxQYWRkaW5nIiwiY29udGVudEhlaWdodCIsImNvbnRlbnRHYXAiLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJCYWNrZHJvcCIsIlByb2plY3RMaXN0IiwiUHJvamVjdERldGFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQWFBLElBQU1BLGFBQXFDLEdBQUcsU0FB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QVEsQ0FBQ3NDLGNBQVQsQ0FBd0JGLE1BQXhCLENBQWxCO0FBQ0FDLGFBQVMsQ0FBQ0UsV0FBVixDQUFzQkosTUFBdEI7QUFDQSxXQUFPLFlBQU07QUFDWEUsZUFBUyxDQUFDRyxXQUFWLENBQXNCTCxNQUF0QjtBQUNELEtBRkQ7QUFHRCxHQU4rRSxFQU03RSxDQUFDQSxNQUFELEVBQVNDLE1BQVQsQ0FONkUsQ0FBekQ7QUFBQSxDQUF2QixDLENBUUE7OztJQVJNdkIsYzs7QUFTTixJQUFNNEIsaUJBQWlCLEdBQUcsRUFBMUI7QUFDQSxJQUFNckIsWUFBWSxHQUFHLEVBQXJCO0FBQ0EsSUFBTXNCLGFBQWEsR0FBRyxFQUF0QjtBQUNBLElBQU1DLFVBQVUsR0FBRyxHQUFuQjtBQUNBLElBQU1DLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpRUFBZjtNQUFNRixTO0FBUU4sSUFBTUcsUUFBUSxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZFQUFkO01BQU1DLFE7QUFRTixJQUFNQyxXQUFXLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseURBRUw7QUFBQSxNQUFHN0IsTUFBSCxTQUFHQSxNQUFIO0FBQUEsU0FBZ0JBLE1BQWhCO0FBQUEsQ0FGSyxDQUFqQjtNQUFNK0IsVztBQUtOLElBQU1DLGFBQWEsR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxnTkFDUjFCLFlBRFEsRUFFUHNCLGFBRk8sQ0FBbkI7TUFBTU8sYTtBQXFCU3hELDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9qZWN0RGlhbG9nLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWFycmF5LWluZGV4LWtleSAqL1xuaW1wb3J0IHtcbiAgRkMsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VSZWYsIE11dGFibGVSZWZPYmplY3QsXG59IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1xuICBGaXhlZFNpemVMaXN0LCBMaXN0Q2hpbGRDb21wb25lbnRQcm9wcyxcbn0gZnJvbSAncmVhY3Qtd2luZG93JztcbmltcG9ydCBBdXRvU2l6ZSBmcm9tICdyZWFjdC12aXJ0dWFsaXplZC1hdXRvLXNpemVyJztcbmltcG9ydCBwcm9qZWN0c0RhdGEgZnJvbSAnLi4vcmVzb3VyY2VzL2RhdGEvcHJvamVjdHMnO1xuaW1wb3J0IHsgUHJvamVjdERhdGEgfSBmcm9tICcuLi9yZXNvdXJjZXMvZGF0YS9pbnRlcmZhY2UnO1xuaW1wb3J0IGxpc3RTdHlsZSBmcm9tICcuL3Byb2plY3QtZGlhbG9nLm1vZHVsZS5zY3NzJztcblxuaW50ZXJmYWNlIFByb2plY3REaWFsb2dWaXNpYmxlQXJnIHtcbiAgICB2aXNpYmxlOiBib29sZWFuO1xuICAgIGluZGV4OiBudW1iZXI7XG59XG5pbnRlcmZhY2UgUHJvamVjdERpYWxvZ1Byb3BzIHtcbiAgdmlzaWJsZTogUHJvamVjdERpYWxvZ1Zpc2libGVBcmcsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBzZXRWaXNpYmxlOiAoYXJnOiBQcm9qZWN0RGlhbG9nVmlzaWJsZUFyZykgPT4gdm9pZDtcbn1cbmNvbnN0IFByb2plY3REaWFsb2c6IEZDPFByb2plY3REaWFsb2dQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2lzQ2xpZW50U2lkZSwgc2V0Q2xpZW50U2lkZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgdmlzaWJsZSB9ID0gcHJvcHM7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0Q2xpZW50U2lkZSh0cnVlKTtcbiAgICB9XG4gIH0sIFtzZXRDbGllbnRTaWRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2lzQ2xpZW50U2lkZSAmJiB2aXNpYmxlLnZpc2libGUgJiYgPFByb2plY3REaWFsb2dDb250ZW50cyB7Li4ucHJvcHN9IC8+fVxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgUHJvamVjdERpYWxvZ0NvbnRlbnRzOkZDPFByb2plY3REaWFsb2dQcm9wcz4gPSAoeyB2aXNpYmxlLCBzZXRWaXNpYmxlIH0pID0+IHtcbiAgY29uc3QgbW9kYWxFbGVtZW50ID0gdXNlTWVtbygoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgW10pO1xuICBjb25zdCBjbG9zZURpYWxvZyA9IHVzZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUoeyB2aXNpYmxlOiBmYWxzZSwgaW5kZXg6IDAgfSksIFtzZXRWaXNpYmxlXSk7XG4gIGNvbnN0IHNjcm9sbFJlZiA9IHVzZVJlZjxGaXhlZFNpemVMaXN0PihudWxsKTtcblxuICB1c2VTY3JvbGxUb0luZGV4KHNjcm9sbFJlZiwgdmlzaWJsZS5pbmRleCk7XG4gIHVzZVBvcnRhbFNldHVwKG1vZGFsRWxlbWVudCk7XG5cbiAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChcbiAgICAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8QmFja2Ryb3Agb25DbGljaz17Y2xvc2VEaWFsb2d9IC8+XG4gICAgICAgIDxBdXRvU2l6ZT5cbiAgICAgICAgICB7KHsgd2lkdGgsIGhlaWdodCB9KSA9PiAoXG4gICAgICAgICAgICA8UHJvamVjdExpc3QgaGVpZ2h0PXtoZWlnaHR9PlxuICAgICAgICAgICAgICA8Rml4ZWRTaXplTGlzdFxuICAgICAgICAgICAgICAgIGl0ZW1Db3VudD17cHJvamVjdHNEYXRhLmxlbmd0aH1cbiAgICAgICAgICAgICAgICBsYXlvdXQ9XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCJyZW1cIlxuICAgICAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgICAgICBpdGVtU2l6ZT17Y29udGVudFdpZHRoICogMTB9XG4gICAgICAgICAgICAgICAgcmVmPXtzY3JvbGxSZWZ9XG4gICAgICAgICAgICAgICAgaXRlbURhdGE9e3Byb2plY3RzRGF0YX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzAgNTZyZW0nLFxuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdzY3JvbGwnLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge1Byb2plY3RJdGVtfVxuICAgICAgICAgICAgICA8L0ZpeGVkU2l6ZUxpc3Q+XG4gICAgICAgICAgICA8L1Byb2plY3RMaXN0PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQXV0b1NpemU+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApLFxuICAgIG1vZGFsRWxlbWVudCxcbiAgKTtcbn07XG5cbmludGVyZmFjZSBQcm9qZWN0RGF0YVByb3BzIGV4dGVuZHMgTGlzdENoaWxkQ29tcG9uZW50UHJvcHN7XG4gIGRhdGE6IFByb2plY3REYXRhW107XG59XG5jb25zdCBQcm9qZWN0SXRlbTpGQzxQcm9qZWN0RGF0YVByb3BzPiA9ICh7IGRhdGEsIGluZGV4LCBzdHlsZSB9KSA9PiB7XG4gIGNvbnN0IHByb2plY3REYXRhID0gZGF0YVtpbmRleF07XG4gIGNvbnN0IEltYWdlID0gdXNlTWVtbygoKSA9PiBwcm9qZWN0RGF0YS5pbWFnZSgpLCBbcHJvamVjdERhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxQcm9qZWN0RGV0YWlsXG4gICAgICBrZXk9e2Bwcm9qZWN0LWRldGFpbC0ke2luZGV4fWB9XG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICA8SW1hZ2UgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxcIj57cHJvamVjdERhdGEudGl0bGV9PC9kaXY+XG4gICAgPC9Qcm9qZWN0RGV0YWlsPlxuICApO1xufTtcblxuY29uc3QgdXNlU2Nyb2xsVG9JbmRleCA9IChzY3JvbGxSZWY6IE11dGFibGVSZWZPYmplY3Q8Rml4ZWRTaXplTGlzdD4sIGluZGV4OiBudW1iZXIpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2Nyb2xsUmVmLmN1cnJlbnQgIT09IG51bGwpIHsgc2Nyb2xsUmVmLmN1cnJlbnQuc2Nyb2xsVG9JdGVtKGluZGV4LCAnY2VudGVyJyk7IH1cbiAgfSwgW3Njcm9sbFJlZiwgaW5kZXhdKTtcbn07XG5cbmNvbnN0IHVzZVBvcnRhbFNldHVwID0gKHBvcnRhbDogSFRNTEVsZW1lbnQsIHJvb3RJZCA9ICdtb2RhbC1yb290JykgPT4gdXNlRWZmZWN0KCgpID0+IHtcbiAgY29uc3QgbW9kYWxSb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocm9vdElkKTtcbiAgbW9kYWxSb290LmFwcGVuZENoaWxkKHBvcnRhbCk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgbW9kYWxSb290LnJlbW92ZUNoaWxkKHBvcnRhbCk7XG4gIH07XG59LCBbcG9ydGFsLCByb290SWRdKTtcblxuLy8gcmVtXG5jb25zdCBob3Jpem9udGFsUGFkZGluZyA9IDU2O1xuY29uc3QgY29udGVudFdpZHRoID0gODA7XG5jb25zdCBjb250ZW50SGVpZ2h0ID0gODQ7XG5jb25zdCBjb250ZW50R2FwID0gNS42O1xuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6MDtcbiAgbGVmdDowO1xuICByaWdodDowO1xuICBib3R0b206MDtcbiAgY29sb3I6IHdoaXRlO1xuYDtcbmNvbnN0IEJhY2tkcm9wID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG9wYWNpdHk6IDAuODtcbiAgei1pbmRleDogLTE7XG5gO1xuXG5jb25zdCBQcm9qZWN0TGlzdCA9IHN0eWxlZC5kaXY8e2hlaWdodDogc3RyaW5nfT5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogJHsoeyBoZWlnaHQgfSkgPT4gaGVpZ2h0fXB4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5gO1xuY29uc3QgUHJvamVjdERldGFpbCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAke2NvbnRlbnRXaWR0aH1yZW07XG4gIGhlaWdodDogJHtjb250ZW50SGVpZ2h0fXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcbiAgYm9yZGVyLXJhZGl1czogMy42cmVtO1xuICBvcGFjaXR5OiAxO1xuICBtYXJnaW4tbGVmdDogNS42cmVtO1xuICA6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgLmltYWdlIHtcbiAgICBoZWlnaHQ6IDQycmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmRldGFpbCB7XG4gICAgaGVpZ2h0OiA0MnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdERpYWxvZztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProjectDialog.tsx\n");

/***/ })

})