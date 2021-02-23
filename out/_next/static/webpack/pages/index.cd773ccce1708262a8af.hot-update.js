webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProjectDialog.tsx":
/*!**************************************!*\
  !*** ./components/ProjectDialog.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-window */ \"./node_modules/react-window/dist/index.esm.js\");\n/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-virtualized-auto-sizer */ \"./node_modules/react-virtualized-auto-sizer/dist/index.esm.js\");\n/* harmony import */ var _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resources/data/projects */ \"./resources/data/projects/index.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/gohhwain/work/depromeet/www.depromeet.com/components/ProjectDialog.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$(),\n    _s5 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/* eslint-disable react/no-array-index-key */\n\n\n\n\n\n\n\nvar ProjectDialog = function ProjectDialog(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isClientSide = _useState[0],\n      setClientSide = _useState[1];\n\n  var visible = props.visible;\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (document !== undefined) {\n      setClientSide(true);\n    }\n  }, [setClientSide]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: isClientSide && visible.visible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectDialogContents, _objectSpread({}, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 43\n    }, _this)\n  }, void 0, false);\n};\n\n_s(ProjectDialog, \"TqvjQmpctxuQ3TxXSGPB8VZpGC8=\");\n\n_c = ProjectDialog;\n\nvar ProjectDialogContents = function ProjectDialogContents(_ref) {\n  _s2();\n\n  var visible = _ref.visible,\n      setVisible = _ref.setVisible;\n  var modalElement = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return document.createElement('div');\n  }, []);\n  var closeDialog = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    return setVisible({\n      visible: false,\n      index: 0\n    });\n  }, [setVisible]);\n  var scrollRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  useScrollToIndex(scrollRef, visible.index);\n  usePortalSetup(modalElement);\n  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.createPortal( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Backdrop, {\n      onClick: closeDialog\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      children: function children(_ref2) {\n        var width = _ref2.width,\n            height = _ref2.height;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_window__WEBPACK_IMPORTED_MODULE_5__[\"FixedSizeList\"], {\n          itemCount: _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__[\"default\"].length,\n          layout: \"horizontal\",\n          height: \"\".concat(contentHeight, \"rem\"),\n          width: width,\n          itemSize: contentWidth * 10,\n          ref: scrollRef,\n          itemData: _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n          style: {\n            padding: '0 56rem',\n            overflow: 'scroll'\n          },\n          children: ProjectItem\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 13\n        }, _this);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 7\n  }, _this), modalElement);\n};\n\n_s2(ProjectDialogContents, \"6htfsSUOy87qGCLRa1IvHmjIxFs=\", false, function () {\n  return [useScrollToIndex, usePortalSetup];\n});\n\n_c2 = ProjectDialogContents;\n\nvar ProjectItem = function ProjectItem(_ref3) {\n  _s3();\n\n  var data = _ref3.data,\n      index = _ref3.index,\n      style = _ref3.style;\n  var projectData = data[index];\n  var Image = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return projectData.image();\n  }, [projectData]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectDetail, {\n    style: style,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"image\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Image, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"detail\",\n      children: projectData.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, _this)]\n  }, \"project-detail-\".concat(index), true, {\n    fileName: _jsxFileName,\n    lineNumber: 86,\n    columnNumber: 5\n  }, _this);\n};\n\n_s3(ProjectItem, \"oHF6iZ4uCM2aIX7eb3MU31h4r7w=\");\n\n_c3 = ProjectItem;\n\nvar useScrollToIndex = function useScrollToIndex(scrollRef, index) {\n  _s4();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (scrollRef.current !== null) {\n      scrollRef.current.scrollToItem(index, 'center');\n    }\n  }, [scrollRef, index]);\n};\n\n_s4(useScrollToIndex, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\nvar usePortalSetup = function usePortalSetup(portal) {\n  _s5();\n\n  var rootId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'modal-root';\n  return Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var modalRoot = document.getElementById(rootId);\n    modalRoot.appendChild(portal);\n    return function () {\n      modalRoot.removeChild(portal);\n    };\n  }, [portal, rootId]);\n}; // rem\n\n\n_s5(usePortalSetup, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\nvar horizontalPadding = 56;\nvar contentWidth = 80;\nvar contentHeight = 84;\nvar contentGap = 5.6;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__Container\",\n  componentId: \"sc-1fctgpg-0\"\n})([\"position:fixed;top:0;left:0;right:0;bottom:0;color:white;\"]);\n_c4 = Container;\nvar Backdrop = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__Backdrop\",\n  componentId: \"sc-1fctgpg-1\"\n})([\"position:fixed;inset:0;background-color:black;opacity:0.8;z-index:-1;\"]);\n_c5 = Backdrop;\nvar ProjectList = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__ProjectList\",\n  componentId: \"sc-1fctgpg-2\"\n})([\"height:1000px;width:100px;background-color:white;display:flex;align-content:center;\"]);\nvar ProjectDetail = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__ProjectDetail\",\n  componentId: \"sc-1fctgpg-3\"\n})([\"width:\", \"rem;height:\", \"rem;background-color:#212121;border-radius:3.6rem;opacity:1;margin-left:\", \"rem;margin-right:0;padding-right:0;:first-of-type{margin-left:0;}.image{height:42rem;width:100%;}.detail{height:42rem;width:100%;}\"], contentWidth, contentHeight, contentGap);\n_c6 = ProjectDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectDialog);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"ProjectDialog\");\n$RefreshReg$(_c2, \"ProjectDialogContents\");\n$RefreshReg$(_c3, \"ProjectItem\");\n$RefreshReg$(_c4, \"Container\");\n$RefreshReg$(_c5, \"Backdrop\");\n$RefreshReg$(_c6, \"ProjectDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0RGlhbG9nLnRzeD83YTMxIl0sIm5hbWVzIjpbIlByb2plY3REaWFsb2ciLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNDbGllbnRTaWRlIiwic2V0Q2xpZW50U2lkZSIsInZpc2libGUiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsInVuZGVmaW5lZCIsIlByb2plY3REaWFsb2dDb250ZW50cyIsInNldFZpc2libGUiLCJtb2RhbEVsZW1lbnQiLCJ1c2VNZW1vIiwiY3JlYXRlRWxlbWVudCIsImNsb3NlRGlhbG9nIiwidXNlQ2FsbGJhY2siLCJpbmRleCIsInNjcm9sbFJlZiIsInVzZVJlZiIsInVzZVNjcm9sbFRvSW5kZXgiLCJ1c2VQb3J0YWxTZXR1cCIsIlJlYWN0RE9NIiwiY3JlYXRlUG9ydGFsIiwid2lkdGgiLCJoZWlnaHQiLCJwcm9qZWN0c0RhdGEiLCJsZW5ndGgiLCJjb250ZW50SGVpZ2h0IiwiY29udGVudFdpZHRoIiwicGFkZGluZyIsIm92ZXJmbG93IiwiUHJvamVjdEl0ZW0iLCJkYXRhIiwic3R5bGUiLCJwcm9qZWN0RGF0YSIsIkltYWdlIiwiaW1hZ2UiLCJ0aXRsZSIsImN1cnJlbnQiLCJzY3JvbGxUb0l0ZW0iLCJwb3J0YWwiLCJyb290SWQiLCJtb2RhbFJvb3QiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJob3Jpem9udGFsUGFkZGluZyIsImNvbnRlbnRHYXAiLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJCYWNrZHJvcCIsIlByb2plY3RMaXN0IiwiUHJvamVjdERldGFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQWFBLElBQU1BLGFBQXFDLEdBQUcsU0FBeENBLGFBQXdDLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNq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ekQ7QUFBQSxDQUF2QixDLENBUUE7OztJQVJNckIsYzs7QUFTTixJQUFNMEIsaUJBQWlCLEdBQUcsRUFBMUI7QUFDQSxJQUFNbEIsWUFBWSxHQUFHLEVBQXJCO0FBQ0EsSUFBTUQsYUFBYSxHQUFHLEVBQXRCO0FBQ0EsSUFBTW9CLFVBQVUsR0FBRyxHQUFuQjtBQUNBLElBQU1DLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpRUFBZjtNQUFNRixTO0FBUU4sSUFBTUcsUUFBUSxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZFQUFkO01BQU1DLFE7QUFRTixJQUFNQyxXQUFXLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkZBQWpCO0FBUUEsSUFBTUcsYUFBYSxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGdQQUNSdEIsWUFEUSxFQUVQRCxhQUZPLEVBTUZvQixVQU5FLENBQW5CO01BQU1NLGE7QUF1QlNyRCw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvamVjdERpYWxvZy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXkgKi9cbmltcG9ydCB7XG4gIEZDLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlUmVmLCBNdXRhYmxlUmVmT2JqZWN0LFxufSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtcbiAgRml4ZWRTaXplTGlzdCwgTGlzdENoaWxkQ29tcG9uZW50UHJvcHMsXG59IGZyb20gJ3JlYWN0LXdpbmRvdyc7XG5pbXBvcnQgQXV0b1NpemUgZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQtYXV0by1zaXplcic7XG5pbXBvcnQgcHJvamVjdHNEYXRhIGZyb20gJy4uL3Jlc291cmNlcy9kYXRhL3Byb2plY3RzJztcbmltcG9ydCB7IFByb2plY3REYXRhIH0gZnJvbSAnLi4vcmVzb3VyY2VzL2RhdGEvaW50ZXJmYWNlJztcbmltcG9ydCBsaXN0U3R5bGUgZnJvbSAnLi9wcm9qZWN0LWRpYWxvZy5tb2R1bGUuc2Nzcyc7XG5cbmludGVyZmFjZSBQcm9qZWN0RGlhbG9nVmlzaWJsZUFyZyB7XG4gICAgdmlzaWJsZTogYm9vbGVhbjtcbiAgICBpbmRleDogbnVtYmVyO1xufVxuaW50ZXJmYWNlIFByb2plY3REaWFsb2dQcm9wcyB7XG4gIHZpc2libGU6IFByb2plY3REaWFsb2dWaXNpYmxlQXJnLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgc2V0VmlzaWJsZTogKGFyZzogUHJvamVjdERpYWxvZ1Zpc2libGVBcmcpID0+IHZvaWQ7XG59XG5jb25zdCBQcm9qZWN0RGlhbG9nOiBGQzxQcm9qZWN0RGlhbG9nUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtpc0NsaWVudFNpZGUsIHNldENsaWVudFNpZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IHZpc2libGUgfSA9IHByb3BzO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldENsaWVudFNpZGUodHJ1ZSk7XG4gICAgfVxuICB9LCBbc2V0Q2xpZW50U2lkZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpc0NsaWVudFNpZGUgJiYgdmlzaWJsZS52aXNpYmxlICYmIDxQcm9qZWN0RGlhbG9nQ29udGVudHMgey4uLnByb3BzfSAvPn1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IFByb2plY3REaWFsb2dDb250ZW50czpGQzxQcm9qZWN0RGlhbG9nUHJvcHM+ID0gKHsgdmlzaWJsZSwgc2V0VmlzaWJsZSB9KSA9PiB7XG4gIGNvbnN0IG1vZGFsRWxlbWVudCA9IHVzZU1lbW8oKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIFtdKTtcbiAgY29uc3QgY2xvc2VEaWFsb2cgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHsgdmlzaWJsZTogZmFsc2UsIGluZGV4OiAwIH0pLCBbc2V0VmlzaWJsZV0pO1xuICBjb25zdCBzY3JvbGxSZWYgPSB1c2VSZWY8Rml4ZWRTaXplTGlzdD4obnVsbCk7XG5cbiAgdXNlU2Nyb2xsVG9JbmRleChzY3JvbGxSZWYsIHZpc2libGUuaW5kZXgpO1xuICB1c2VQb3J0YWxTZXR1cChtb2RhbEVsZW1lbnQpO1xuXG4gIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwoXG4gICAgKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEJhY2tkcm9wIG9uQ2xpY2s9e2Nsb3NlRGlhbG9nfSAvPlxuICAgICAgICA8QXV0b1NpemU+XG4gICAgICAgICAgeyh7IHdpZHRoLCBoZWlnaHQgfSkgPT4gKFxuICAgICAgICAgICAgPEZpeGVkU2l6ZUxpc3RcbiAgICAgICAgICAgICAgaXRlbUNvdW50PXtwcm9qZWN0c0RhdGEubGVuZ3RofVxuICAgICAgICAgICAgICBsYXlvdXQ9XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PXtgJHtjb250ZW50SGVpZ2h0fXJlbWB9XG4gICAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgICAgaXRlbVNpemU9e2NvbnRlbnRXaWR0aCAqIDEwfVxuICAgICAgICAgICAgICByZWY9e3Njcm9sbFJlZn1cbiAgICAgICAgICAgICAgaXRlbURhdGE9e3Byb2plY3RzRGF0YX1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMCA1NnJlbScsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdzY3JvbGwnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7UHJvamVjdEl0ZW19XG4gICAgICAgICAgICA8L0ZpeGVkU2l6ZUxpc3Q+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9BdXRvU2l6ZT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICksXG4gICAgbW9kYWxFbGVtZW50LFxuICApO1xufTtcblxuaW50ZXJmYWNlIFByb2plY3REYXRhUHJvcHMgZXh0ZW5kcyBMaXN0Q2hpbGRDb21wb25lbnRQcm9wc3tcbiAgZGF0YTogUHJvamVjdERhdGFbXTtcbn1cbmNvbnN0IFByb2plY3RJdGVtOkZDPFByb2plY3REYXRhUHJvcHM+ID0gKHsgZGF0YSwgaW5kZXgsIHN0eWxlIH0pID0+IHtcbiAgY29uc3QgcHJvamVjdERhdGEgPSBkYXRhW2luZGV4XTtcbiAgY29uc3QgSW1hZ2UgPSB1c2VNZW1vKCgpID0+IHByb2plY3REYXRhLmltYWdlKCksIFtwcm9qZWN0RGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPFByb2plY3REZXRhaWxcbiAgICAgIGtleT17YHByb2plY3QtZGV0YWlsLSR7aW5kZXh9YH1cbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG4gICAgICAgIDxJbWFnZSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbFwiPntwcm9qZWN0RGF0YS50aXRsZX08L2Rpdj5cbiAgICA8L1Byb2plY3REZXRhaWw+XG4gICk7XG59O1xuXG5jb25zdCB1c2VTY3JvbGxUb0luZGV4ID0gKHNjcm9sbFJlZjogTXV0YWJsZVJlZk9iamVjdDxGaXhlZFNpemVMaXN0PiwgaW5kZXg6IG51bWJlcikgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzY3JvbGxSZWYuY3VycmVudCAhPT0gbnVsbCkgeyBzY3JvbGxSZWYuY3VycmVudC5zY3JvbGxUb0l0ZW0oaW5kZXgsICdjZW50ZXInKTsgfVxuICB9LCBbc2Nyb2xsUmVmLCBpbmRleF0pO1xufTtcblxuY29uc3QgdXNlUG9ydGFsU2V0dXAgPSAocG9ydGFsOiBIVE1MRWxlbWVudCwgcm9vdElkID0gJ21vZGFsLXJvb3QnKSA9PiB1c2VFZmZlY3QoKCkgPT4ge1xuICBjb25zdCBtb2RhbFJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyb290SWQpO1xuICBtb2RhbFJvb3QuYXBwZW5kQ2hpbGQocG9ydGFsKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBtb2RhbFJvb3QucmVtb3ZlQ2hpbGQocG9ydGFsKTtcbiAgfTtcbn0sIFtwb3J0YWwsIHJvb3RJZF0pO1xuXG4vLyByZW1cbmNvbnN0IGhvcml6b250YWxQYWRkaW5nID0gNTY7XG5jb25zdCBjb250ZW50V2lkdGggPSA4MDtcbmNvbnN0IGNvbnRlbnRIZWlnaHQgPSA4NDtcbmNvbnN0IGNvbnRlbnRHYXAgPSA1LjY7XG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDowO1xuICBsZWZ0OjA7XG4gIHJpZ2h0OjA7XG4gIGJvdHRvbTowO1xuICBjb2xvcjogd2hpdGU7XG5gO1xuY29uc3QgQmFja2Ryb3AgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMC44O1xuICB6LWluZGV4OiAtMTtcbmA7XG5cbmNvbnN0IFByb2plY3RMaXN0ID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAxMDAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuYDtcblxuY29uc3QgUHJvamVjdERldGFpbCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAke2NvbnRlbnRXaWR0aH1yZW07XG4gIGhlaWdodDogJHtjb250ZW50SGVpZ2h0fXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcbiAgYm9yZGVyLXJhZGl1czogMy42cmVtO1xuICBvcGFjaXR5OiAxO1xuICBtYXJnaW4tbGVmdDogJHtjb250ZW50R2FwfXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICA6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgLmltYWdlIHtcbiAgICBoZWlnaHQ6IDQycmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmRldGFpbCB7XG4gICAgaGVpZ2h0OiA0MnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdERpYWxvZztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProjectDialog.tsx\n");

/***/ })

})