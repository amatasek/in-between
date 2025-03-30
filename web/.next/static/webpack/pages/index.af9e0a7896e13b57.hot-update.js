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

/***/ "./src/components/GameHeader.js":
/*!**************************************!*\
  !*** ./src/components/GameHeader.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_GameHeader_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/GameHeader.module.css */ \"./src/components/styles/GameHeader.module.css\");\n/* harmony import */ var _styles_GameHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_GameHeader_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_GameContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/GameContext */ \"./src/contexts/GameContext.js\");\n/* harmony import */ var _contexts_SocketContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/SocketContext */ \"./src/contexts/SocketContext.js\");\n/* harmony import */ var _constants_GameConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/GameConstants */ \"./src/constants/GameConstants.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/andrew/Apps/in-between/web/src/components/GameHeader.js\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\n\n// Phase display mapping with icons and friendly names\n\nvar phaseDisplayMap = {\n  waiting: {\n    text: 'Waiting for Players',\n    icon: '👥'\n  },\n  dealing: {\n    text: 'Dealing Cards',\n    icon: '🃏'\n  },\n  revealing: {\n    text: 'Revealing Cards',\n    icon: '🎭'\n  },\n  results: {\n    text: 'Round Results',\n    icon: '🏆'\n  }\n  // betting phase is handled dynamically to show player name\n};\n\nvar GameHeader = function GameHeader(_ref) {\n  _s();\n  var handleLeaveGame = _ref.handleLeaveGame;\n  var _useGameContext = (0,_contexts_GameContext__WEBPACK_IMPORTED_MODULE_2__.useGameContext)(),\n    gameState = _useGameContext.gameState,\n    gameId = _useGameContext.gameId;\n  var _useSocket = (0,_contexts_SocketContext__WEBPACK_IMPORTED_MODULE_3__.useSocket)(),\n    socket = _useSocket.socket;\n  var currentPhase = (gameState === null || gameState === void 0 ? void 0 : gameState.phase) || 'waiting';\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n    timeLeft = _useState[0],\n    setTimeLeft = _useState[1];\n\n  // Timer effect for phases\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var timer;\n    if (currentPhase === 'dealing') {\n      setTimeLeft(_constants_GameConstants__WEBPACK_IMPORTED_MODULE_4__.TIMERS.DEALING_DURATION);\n      timer = setInterval(function () {\n        setTimeLeft(function (prev) {\n          return Math.max(0, prev - 100);\n        });\n      }, 100);\n    } else if (currentPhase === 'betting') {\n      setTimeLeft(_constants_GameConstants__WEBPACK_IMPORTED_MODULE_4__.TIMERS.BETTING_DURATION);\n      timer = setInterval(function () {\n        setTimeLeft(function (prev) {\n          return Math.max(0, prev - 100);\n        });\n      }, 100);\n    } else if (currentPhase === 'revealing') {\n      setTimeLeft(_constants_GameConstants__WEBPACK_IMPORTED_MODULE_4__.TIMERS.REVEALING_DURATION);\n      timer = setInterval(function () {\n        setTimeLeft(function (prev) {\n          return Math.max(0, prev - 100);\n        });\n      }, 100);\n    } else if (currentPhase === 'results') {\n      setTimeLeft(_constants_GameConstants__WEBPACK_IMPORTED_MODULE_4__.TIMERS.RESULTS_DURATION);\n      timer = setInterval(function () {\n        setTimeLeft(function (prev) {\n          return Math.max(0, prev - 100);\n        });\n      }, 100);\n    } else {\n      setTimeLeft(null);\n    }\n    return function () {\n      if (timer) clearInterval(timer);\n    };\n  }, [currentPhase]);\n\n  // Get the phase display information\n  var phaseInfo = phaseDisplayMap[currentPhase] || {\n    text: 'Unknown Phase',\n    icon: '❓'\n  };\n\n  // Check if current user is the current player\n  var isCurrentPlayersTurn = socket && (gameState === null || gameState === void 0 ? void 0 : gameState.currentPlayerId) === socket.id;\n\n  // Special handling for betting phase\n  if (currentPhase === 'betting' && gameState !== null && gameState !== void 0 && gameState.currentPlayerId && gameState !== null && gameState !== void 0 && gameState.players) {\n    var currentPlayer = gameState.players[gameState.currentPlayerId];\n    if (currentPlayer) {\n      if (isCurrentPlayersTurn) {\n        // It's YOUR turn to bet\n        phaseInfo = {\n          text: \"Pass or Bet\",\n          icon: '💰'\n        };\n      } else {\n        // It's someone else's turn\n        phaseInfo = {\n          text: \"\".concat(currentPlayer.name, \" is Betting\"),\n          icon: '💰'\n        };\n      }\n    } else {\n      phaseInfo = {\n        text: 'Betting Round',\n        icon: '💰'\n      };\n    }\n  }\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: (_styles_GameHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default().headerContainer),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: (_styles_GameHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default().headerLeft),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h1\", {\n        className: (_styles_GameHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default().gameTitle),\n        children: \"In Between\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n        className: (_styles_GameHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default().gameIdText),\n        children: [\"Game #\", gameId]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: (_styles_GameHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default().headerCenter),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_GameHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default().gamePhase), \" \").concat(currentPhase === 'betting' ? isCurrentPlayersTurn ? (_styles_GameHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default().phaseBettingYourTurn) : (_styles_GameHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default().phaseBettingWaiting) : (_styles_GameHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default())[\"phase\".concat(currentPhase.charAt(0).toUpperCase() + currentPhase.slice(1))]),\n        \"data-phase\": currentPhase,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n          className: (_styles_GameHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default().phaseIcon),\n          children: phaseInfo.icon\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n          className: (_styles_GameHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default().phaseText),\n          children: phaseInfo.text\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, _this), timeLeft !== null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: (_styles_GameHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default().timerBar),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: (_styles_GameHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default().timerProgress),\n            style: {\n              width: \"\".concat(100 - timeLeft / (currentPhase === 'dealing' ? _constants_GameConstants__WEBPACK_IMPORTED_MODULE_4__.TIMERS.DEALING_DURATION : currentPhase === 'betting' ? _constants_GameConstants__WEBPACK_IMPORTED_MODULE_4__.TIMERS.BETTING_DURATION : currentPhase === 'revealing' ? _constants_GameConstants__WEBPACK_IMPORTED_MODULE_4__.TIMERS.REVEALING_DURATION : _constants_GameConstants__WEBPACK_IMPORTED_MODULE_4__.TIMERS.RESULTS_DURATION) * 100, \"%\")\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n      className: (_styles_GameHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default().leaveButton),\n      onClick: handleLeaveGame,\n      children: \"Leave Game\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 84,\n    columnNumber: 5\n  }, _this);\n};\n_s(GameHeader, \"db10m50pIo5Jb5s2BDE5a3VeeVs=\", false, function () {\n  return [_contexts_GameContext__WEBPACK_IMPORTED_MODULE_2__.useGameContext, _contexts_SocketContext__WEBPACK_IMPORTED_MODULE_3__.useSocket];\n});\n_c = GameHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameHeader);\nvar _c;\n$RefreshReg$(_c, \"GameHeader\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCw2REFBQTtNQUNFd0MsU0FBUyxFQUFFN0Msa0ZBQW1CO01BQzlCc0UsT0FBTyxFQUFFdEQsZUFBZ0I7TUFBQStCLFFBQUEsRUFDMUI7SUFFRDtNQUFBRyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsR0FBQUMsS0FBUSxDQUFDO0VBQUE7SUFBQUosUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLEdBQUFDLEtBQ04sQ0FBQztBQUVWLENBQUM7QUFBQ3ZDLEVBQUEsQ0EzR0lGLFVBQVU7RUFBQSxRQUNnQlosaUVBQWMsRUFDekJDLDhEQUFTO0FBQUE7QUFBQXFFLEVBQUEsR0FGeEIxRCxVQUFVO0FBNkdoQiwrREFBZUEsVUFBVSxFQUFDO0FBQUEsSUFBQTBELEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0dhbWVIZWFkZXIuanM/YzhjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvR2FtZUhlYWRlci5tb2R1bGUuY3NzJztcbmltcG9ydCB7IHVzZUdhbWVDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvR2FtZUNvbnRleHQnO1xuaW1wb3J0IHsgdXNlU29ja2V0IH0gZnJvbSAnLi4vY29udGV4dHMvU29ja2V0Q29udGV4dCc7XG5pbXBvcnQgeyBUSU1FUlMgfSBmcm9tICcuLi9jb25zdGFudHMvR2FtZUNvbnN0YW50cyc7XG5cbi8vIFBoYXNlIGRpc3BsYXkgbWFwcGluZyB3aXRoIGljb25zIGFuZCBmcmllbmRseSBuYW1lc1xuY29uc3QgcGhhc2VEaXNwbGF5TWFwID0ge1xuICB3YWl0aW5nOiB7IHRleHQ6ICdXYWl0aW5nIGZvciBQbGF5ZXJzJywgaWNvbjogJ/CfkaUnIH0sXG4gIGRlYWxpbmc6IHsgdGV4dDogJ0RlYWxpbmcgQ2FyZHMnLCBpY29uOiAn8J+DjycgfSxcbiAgcmV2ZWFsaW5nOiB7IHRleHQ6ICdSZXZlYWxpbmcgQ2FyZHMnLCBpY29uOiAn8J+OrScgfSxcbiAgcmVzdWx0czogeyB0ZXh0OiAnUm91bmQgUmVzdWx0cycsIGljb246ICfwn4+GJyB9XG4gIC8vIGJldHRpbmcgcGhhc2UgaXMgaGFuZGxlZCBkeW5hbWljYWxseSB0byBzaG93IHBsYXllciBuYW1lXG59O1xuXG5jb25zdCBHYW1lSGVhZGVyID0gKHsgaGFuZGxlTGVhdmVHYW1lIH0pID0+IHtcbiAgY29uc3QgeyBnYW1lU3RhdGUsIGdhbWVJZCB9ID0gdXNlR2FtZUNvbnRleHQoKTtcbiAgY29uc3QgeyBzb2NrZXQgfSA9IHVzZVNvY2tldCgpO1xuICBjb25zdCBjdXJyZW50UGhhc2UgPSBnYW1lU3RhdGU/LnBoYXNlIHx8ICd3YWl0aW5nJztcbiAgY29uc3QgW3RpbWVMZWZ0LCBzZXRUaW1lTGVmdF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAvLyBUaW1lciBlZmZlY3QgZm9yIHBoYXNlc1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB0aW1lcjtcbiAgICBpZiAoY3VycmVudFBoYXNlID09PSAnZGVhbGluZycpIHtcbiAgICAgIHNldFRpbWVMZWZ0KFRJTUVSUy5ERUFMSU5HX0RVUkFUSU9OKTtcbiAgICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lTGVmdChwcmV2ID0+IE1hdGgubWF4KDAsIHByZXYgLSAxMDApKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50UGhhc2UgPT09ICdiZXR0aW5nJykge1xuICAgICAgc2V0VGltZUxlZnQoVElNRVJTLkJFVFRJTkdfRFVSQVRJT04pO1xuICAgICAgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHNldFRpbWVMZWZ0KHByZXYgPT4gTWF0aC5tYXgoMCwgcHJldiAtIDEwMCkpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRQaGFzZSA9PT0gJ3JldmVhbGluZycpIHtcbiAgICAgIHNldFRpbWVMZWZ0KFRJTUVSUy5SRVZFQUxJTkdfRFVSQVRJT04pO1xuICAgICAgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHNldFRpbWVMZWZ0KHByZXYgPT4gTWF0aC5tYXgoMCwgcHJldiAtIDEwMCkpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRQaGFzZSA9PT0gJ3Jlc3VsdHMnKSB7XG4gICAgICBzZXRUaW1lTGVmdChUSU1FUlMuUkVTVUxUU19EVVJBVElPTik7XG4gICAgICB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0VGltZUxlZnQocHJldiA9PiBNYXRoLm1heCgwLCBwcmV2IC0gMTAwKSk7XG4gICAgICB9LCAxMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lTGVmdChudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHRpbWVyKSBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICB9O1xuICB9LCBbY3VycmVudFBoYXNlXSk7XG4gIFxuICAvLyBHZXQgdGhlIHBoYXNlIGRpc3BsYXkgaW5mb3JtYXRpb25cbiAgbGV0IHBoYXNlSW5mbyA9IHBoYXNlRGlzcGxheU1hcFtjdXJyZW50UGhhc2VdIHx8IHsgdGV4dDogJ1Vua25vd24gUGhhc2UnLCBpY29uOiAn4p2TJyB9O1xuICBcbiAgLy8gQ2hlY2sgaWYgY3VycmVudCB1c2VyIGlzIHRoZSBjdXJyZW50IHBsYXllclxuICBjb25zdCBpc0N1cnJlbnRQbGF5ZXJzVHVybiA9IHNvY2tldCAmJiBnYW1lU3RhdGU/LmN1cnJlbnRQbGF5ZXJJZCA9PT0gc29ja2V0LmlkO1xuICBcbiAgLy8gU3BlY2lhbCBoYW5kbGluZyBmb3IgYmV0dGluZyBwaGFzZVxuICBpZiAoY3VycmVudFBoYXNlID09PSAnYmV0dGluZycgJiYgZ2FtZVN0YXRlPy5jdXJyZW50UGxheWVySWQgJiYgZ2FtZVN0YXRlPy5wbGF5ZXJzKSB7XG4gICAgY29uc3QgY3VycmVudFBsYXllciA9IGdhbWVTdGF0ZS5wbGF5ZXJzW2dhbWVTdGF0ZS5jdXJyZW50UGxheWVySWRdO1xuICAgIFxuICAgIGlmIChjdXJyZW50UGxheWVyKSB7XG4gICAgICBpZiAoaXNDdXJyZW50UGxheWVyc1R1cm4pIHtcbiAgICAgICAgLy8gSXQncyBZT1VSIHR1cm4gdG8gYmV0XG4gICAgICAgIHBoYXNlSW5mbyA9IHtcbiAgICAgICAgICB0ZXh0OiBgUGFzcyBvciBCZXRgLFxuICAgICAgICAgIGljb246ICfwn5KwJ1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSXQncyBzb21lb25lIGVsc2UncyB0dXJuXG4gICAgICAgIHBoYXNlSW5mbyA9IHtcbiAgICAgICAgICB0ZXh0OiBgJHtjdXJyZW50UGxheWVyLm5hbWV9IGlzIEJldHRpbmdgLFxuICAgICAgICAgIGljb246ICfwn5KwJ1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwaGFzZUluZm8gPSB7IHRleHQ6ICdCZXR0aW5nIFJvdW5kJywgaWNvbjogJ/CfkrAnIH07XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyQ29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyTGVmdH0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5nYW1lVGl0bGV9PkluIEJldHdlZW48L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5nYW1lSWRUZXh0fT5HYW1lICN7Z2FtZUlkfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckNlbnRlcn0+XG4gICAgICAgIDxkaXYgXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZ2FtZVBoYXNlfSAke2N1cnJlbnRQaGFzZSA9PT0gJ2JldHRpbmcnID8gXG4gICAgICAgICAgICAoaXNDdXJyZW50UGxheWVyc1R1cm4gPyBzdHlsZXMucGhhc2VCZXR0aW5nWW91clR1cm4gOiBzdHlsZXMucGhhc2VCZXR0aW5nV2FpdGluZykgOiBcbiAgICAgICAgICAgIHN0eWxlc1tgcGhhc2Uke2N1cnJlbnRQaGFzZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGN1cnJlbnRQaGFzZS5zbGljZSgxKX1gXX1gfSBcbiAgICAgICAgICBkYXRhLXBoYXNlPXtjdXJyZW50UGhhc2V9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5waGFzZUljb259PntwaGFzZUluZm8uaWNvbn08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucGhhc2VUZXh0fT57cGhhc2VJbmZvLnRleHR9PC9zcGFuPlxuICAgICAgICAgIHt0aW1lTGVmdCAhPT0gbnVsbCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVyQmFyfT5cbiAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50aW1lclByb2dyZXNzfSBcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHsxMDAgLSAodGltZUxlZnQgLyAoY3VycmVudFBoYXNlID09PSAnZGVhbGluZycgPyBUSU1FUlMuREVBTElOR19EVVJBVElPTiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGhhc2UgPT09ICdiZXR0aW5nJyA/IFRJTUVSUy5CRVRUSU5HX0RVUkFUSU9OIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQaGFzZSA9PT0gJ3JldmVhbGluZycgPyBUSU1FUlMuUkVWRUFMSU5HX0RVUkFUSU9OIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRJTUVSUy5SRVNVTFRTX0RVUkFUSU9OKSkgKiAxMDB9JWBcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGJ1dHRvbiBcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGVhdmVCdXR0b259XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxlYXZlR2FtZX1cbiAgICAgID5cbiAgICAgICAgTGVhdmUgR2FtZVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lSGVhZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJ1c2VHYW1lQ29udGV4dCIsInVzZVNvY2tldCIsIlRJTUVSUyIsImpzeERFViIsIl9qc3hERVYiLCJwaGFzZURpc3BsYXlNYXAiLCJ3YWl0aW5nIiwidGV4dCIsImljb24iLCJkZWFsaW5nIiwicmV2ZWFsaW5nIiwicmVzdWx0cyIsIkdhbWVIZWFkZXIiLCJfcmVmIiwiX3MiLCJoYW5kbGVMZWF2ZUdhbWUiLCJfdXNlR2FtZUNvbnRleHQiLCJnYW1lU3RhdGUiLCJnYW1lSWQiLCJfdXNlU29ja2V0Iiwic29ja2V0IiwiY3VycmVudFBoYXNlIiwicGhhc2UiLCJfdXNlU3RhdGUiLCJ0aW1lTGVmdCIsInNldFRpbWVMZWZ0IiwidGltZXIiLCJERUFMSU5HX0RVUkFUSU9OIiwic2V0SW50ZXJ2YWwiLCJwcmV2IiwiTWF0aCIsIm1heCIsIkJFVFRJTkdfRFVSQVRJT04iLCJSRVZFQUxJTkdfRFVSQVRJT04iLCJSRVNVTFRTX0RVUkFUSU9OIiwiY2xlYXJJbnRlcnZhbCIsInBoYXNlSW5mbyIsImlzQ3VycmVudFBsYXllcnNUdXJuIiwiY3VycmVudFBsYXllcklkIiwiaWQiLCJwbGF5ZXJzIiwiY3VycmVudFBsYXllciIsImNvbmNhdCIsIm5hbWUiLCJjbGFzc05hbWUiLCJoZWFkZXJDb250YWluZXIiLCJjaGlsZHJlbiIsImhlYWRlckxlZnQiLCJnYW1lVGl0bGUiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfdGhpcyIsImdhbWVJZFRleHQiLCJoZWFkZXJDZW50ZXIiLCJnYW1lUGhhc2UiLCJwaGFzZUJldHRpbmdZb3VyVHVybiIsInBoYXNlQmV0dGluZ1dhaXRpbmciLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwicGhhc2VJY29uIiwicGhhc2VUZXh0IiwidGltZXJCYXIiLCJ0aW1lclByb2dyZXNzIiwic3R5bGUiLCJ3aWR0aCIsImxlYXZlQnV0dG9uIiwib25DbGljayIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/GameHeader.js\n"));

/***/ })

});