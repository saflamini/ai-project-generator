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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_buildspace_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/buildspace-logo.png */ \"./assets/buildspace-logo.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const menuItems = [\n        {\n            key: \"Javascript\",\n            name: \"Javascript\"\n        },\n        {\n            key: \"Python\",\n            name: \"Python\"\n        },\n        {\n            key: \"Solidity\",\n            name: \"Solidity\"\n        },\n        {\n            key: \"C\",\n            name: \"C\"\n        },\n        {\n            key: \"C++\",\n            name: \"C++\"\n        }\n    ];\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [apiOutput, setAPIOutput] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [isGenerating, setIsGenerating] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(new Set([\n        menuItems[0].key\n    ]));\n    // const selectedLanguage = React.useMemo(\n    //   () => Array.from(language).join(\", \").replaceAll(\"_\", \" \"),\n    //   [language]\n    // );\n    const onUserChangedText = (event)=>{\n        setUserInput(event.target.value);\n    };\n    const callGenerateEndpoint = async ()=>{\n        setIsGenerating(true);\n        console.log(\"Calling OpenAI...\");\n        console.log(userInput);\n        const response = await fetch(\"/api/generate\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"applications/json\"\n            },\n            body: JSON.stringify({\n                userInput,\n                language\n            })\n        });\n        const data = await response.json();\n        const { output  } = data;\n        console.log(\"Open AI replied: \".concat(output.text));\n        setAPIOutput(\"\".concat(output.text));\n        setIsGenerating(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"root\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"GPT-3 Writer | buildspace\"\n                }, void 0, false, {\n                    fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"header\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header-title\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"What To Build? \\uD83E\\uDD14 \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header-subtitle\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"A Superfluid Project Idea Generator\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"prompt-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"language-selector\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.Dropdown.Button, {\n                                            flat: true,\n                                            children: language\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 11\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.Dropdown.Menu, {\n                                            \"aria-label\": \"Dynamic Actions\",\n                                            items: menuItems,\n                                            selectionMode: \"single\",\n                                            selectedKeys: language,\n                                            onSelectionChange: setLanguage,\n                                            children: (item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.Dropdown.Item, {\n                                                    color: item.key === \"delete\" ? \"error\" : \"default\",\n                                                    children: item.name\n                                                }, item.key, false, {\n                                                    fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 13\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                                lineNumber: 69,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                placeholder: \"Paste your code here (and please dont abuse my Open AI credits if you found this early lol)\",\n                                className: \"prompt-box\",\n                                value: userInput,\n                                onChange: onUserChangedText\n                            }, void 0, false, {\n                                fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"prompt-buttons\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: isGenerating ? \"generate-button-loading\" : \"generate-button\",\n                            onClick: callGenerateEndpoint,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"generate\",\n                                children: isGenerating ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    class: \"loader\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                                    lineNumber: 100,\n                                    columnNumber: 32\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Generate\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                                    lineNumber: 100,\n                                    columnNumber: 63\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                                lineNumber: 99,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined),\n                    apiOutput && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"output\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"output-header-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"output-header\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Output\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                                        lineNumber: 109,\n                                        columnNumber: 25\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                                lineNumber: 107,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"output-content\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: apiOutput\n                                }, void 0, false, {\n                                    fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                                lineNumber: 112,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                        lineNumber: 106,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"email-capture\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Do You Want This As a Chrome Extension?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: \"Enter Your Email for Updates\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                        src: \"https://docs.google.com/forms/d/e/1FAIpQLSfRDM6pi0YVO_IbUnODpjv2Fbhw5Tq8sYrBaa71BiSmpUgTzA/viewform?embedded=true\",\n                        width: \"640\",\n                        height: \"451\",\n                        frameborder: \"0\",\n                        marginheight: \"0\",\n                        marginwidth: \"0\",\n                        children: \"Loading…\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sam_flamini/devPortfolio/code-explainer/ai-project-generator/pages/index.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"FEjehVmWUI+7qNzFUNzijzLxoZw=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWMsNEJBQTRCLGlCQUFpQjs0QkFDekUyQyxTQUFTbEM7c0NBQ1AsNEVBQUNjO2dDQUFJQyxXQUFVOzBDQUNaeEIsNkJBQWMsOERBQUM0QztvQ0FBS0MsT0FBTTs7Ozs7OERBQW1CLDhEQUFDQzs4Q0FBRTs7Ozs7NkNBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBS25FaEQsMkJBQ0UsOERBQUN5Qjt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNYLDRFQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDWCw0RUFBQ3VCO2tEQUFHOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUdaLDhEQUFDeEI7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNzQjs4Q0FBR2hEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNaEIsOERBQUN5QjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNHO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNxQjtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQzt3QkFBT0MsS0FBSTt3QkFBb0hDLE9BQU07d0JBQU1DLFFBQU87d0JBQU1DLGFBQVk7d0JBQUlDLGNBQWE7d0JBQUlDLGFBQVk7a0NBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCbE47R0FqSU0vRDtLQUFBQTtBQW1JTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgYnVpbGRzcGFjZUxvZ28gZnJvbSAnLi4vYXNzZXRzL2J1aWxkc3BhY2UtbG9nby5wbmcnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEcm9wZG93biB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IG1lbnVJdGVtcyA9IFtcbiAgICB7IGtleTogXCJKYXZhc2NyaXB0XCIsIG5hbWU6IFwiSmF2YXNjcmlwdFwiIH0sXG4gICAgeyBrZXk6IFwiUHl0aG9uXCIsIG5hbWU6IFwiUHl0aG9uXCIgfSxcbiAgICB7IGtleTogXCJTb2xpZGl0eVwiLCBuYW1lOiBcIlNvbGlkaXR5XCIgfSxcbiAgICB7IGtleTogXCJDXCIsIG5hbWU6IFwiQ1wiIH0sXG4gICAgeyBrZXk6IFwiQysrXCIsIG5hbWU6IFwiQysrXCIgfVxuICBdO1xuICBjb25zdCBbdXNlcklucHV0LCBzZXRVc2VySW5wdXRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbYXBpT3V0cHV0LCBzZXRBUElPdXRwdXRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaXNHZW5lcmF0aW5nLCBzZXRJc0dlbmVyYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbGFuZ3VhZ2UsIHNldExhbmd1YWdlXSA9IHVzZVN0YXRlKG5ldyBTZXQoW21lbnVJdGVtc1swXS5rZXldKSlcblxuXG5cbiAgLy8gY29uc3Qgc2VsZWN0ZWRMYW5ndWFnZSA9IFJlYWN0LnVzZU1lbW8oXG4gIC8vICAgKCkgPT4gQXJyYXkuZnJvbShsYW5ndWFnZSkuam9pbihcIiwgXCIpLnJlcGxhY2VBbGwoXCJfXCIsIFwiIFwiKSxcbiAgLy8gICBbbGFuZ3VhZ2VdXG4gIC8vICk7XG5cbiAgY29uc3Qgb25Vc2VyQ2hhbmdlZFRleHQgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRVc2VySW5wdXQoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgY2FsbEdlbmVyYXRlRW5kcG9pbnQgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0SXNHZW5lcmF0aW5nKHRydWUpO1xuXG4gICAgY29uc29sZS5sb2coXCJDYWxsaW5nIE9wZW5BSS4uLlwiKTtcbiAgICBjb25zb2xlLmxvZyh1c2VySW5wdXQpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9nZW5lcmF0ZScsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9ucy9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJJbnB1dCwgbGFuZ3VhZ2UgfSksXG4gICAgfSk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnN0IHsgb3V0cHV0IH0gPSBkYXRhO1xuICAgIGNvbnNvbGUubG9nKGBPcGVuIEFJIHJlcGxpZWQ6ICR7b3V0cHV0LnRleHR9YClcblxuICAgIHNldEFQSU91dHB1dChgJHtvdXRwdXQudGV4dH1gKTtcbiAgICBzZXRJc0dlbmVyYXRpbmcoZmFsc2UpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+R1BULTMgV3JpdGVyIHwgYnVpbGRzcGFjZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlXCI+XG4gICAgICAgICAgICA8aDE+V2hhdCBUbyBCdWlsZD8g8J+klCA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXN1YnRpdGxlXCI+XG4gICAgICAgICAgICA8aDI+QSBTdXBlcmZsdWlkIFByb2plY3QgSWRlYSBHZW5lcmF0b3I8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb21wdC1jb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGFuZ3VhZ2Utc2VsZWN0b3InPlxuICAgICAgICAgIDxEcm9wZG93bj5cbiAgICAgICAgICA8RHJvcGRvd24uQnV0dG9uIGZsYXQ+e2xhbmd1YWdlfTwvRHJvcGRvd24uQnV0dG9uPlxuICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiRHluYW1pYyBBY3Rpb25zXCIgXG4gICAgICAgICAgICBpdGVtcz17bWVudUl0ZW1zfVxuICAgICAgICAgICAgc2VsZWN0aW9uTW9kZT0nc2luZ2xlJ1xuICAgICAgICAgICAgc2VsZWN0ZWRLZXlzPXtsYW5ndWFnZX1cbiAgICAgICAgICAgIG9uU2VsZWN0aW9uQ2hhbmdlPXtzZXRMYW5ndWFnZX0+XG4gICAgICAgICAgICAgIHsoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLmtleX1cbiAgICAgICAgICAgICAgICBjb2xvcj17aXRlbS5rZXkgPT09IFwiZGVsZXRlXCIgPyBcImVycm9yXCIgOiBcImRlZmF1bHRcIn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uSXRlbT4gXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHRleHRhcmVhIFxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdQYXN0ZSB5b3VyIGNvZGUgaGVyZSAoYW5kIHBsZWFzZSBkb250IGFidXNlIG15IE9wZW4gQUkgY3JlZGl0cyBpZiB5b3UgZm91bmQgdGhpcyBlYXJseSBsb2wpJ1xuICAgICAgICAgIGNsYXNzTmFtZT0ncHJvbXB0LWJveCdcbiAgICAgICAgICB2YWx1ZT17dXNlcklucHV0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtvblVzZXJDaGFuZ2VkVGV4dH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb21wdC1idXR0b25zJz5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17aXNHZW5lcmF0aW5nPyAnZ2VuZXJhdGUtYnV0dG9uLWxvYWRpbmcnIDogJ2dlbmVyYXRlLWJ1dHRvbid9XG4gICAgICAgICAgICBvbkNsaWNrPXtjYWxsR2VuZXJhdGVFbmRwb2ludH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnZW5lcmF0ZSc+XG4gICAgICAgICAgICAgICAge2lzR2VuZXJhdGluZz8gPHNwYW4gY2xhc3M9XCJsb2FkZXJcIj48L3NwYW4+IDogPHA+R2VuZXJhdGU8L3A+fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICBhcGlPdXRwdXQgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRwdXRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3V0cHV0LWhlYWRlci1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3V0cHV0LWhlYWRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+T3V0cHV0PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J291dHB1dC1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICAgIDxwPnthcGlPdXRwdXR9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1haWwtY2FwdHVyZVwiPlxuICAgICAgICA8aDI+RG8gWW91IFdhbnQgVGhpcyBBcyBhIENocm9tZSBFeHRlbnNpb24/PC9oMj5cbiAgICAgICAgPGg1PkVudGVyIFlvdXIgRW1haWwgZm9yIFVwZGF0ZXM8L2g1PlxuICAgICAgICA8aWZyYW1lIHNyYz1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2Zvcm1zL2QvZS8xRkFJcFFMU2ZSRE02cGkwWVZPX0liVW5PRHBqdjJGYmh3NVRxOHNZckJhYTcxQmlTbXBVZ1R6QS92aWV3Zm9ybT9lbWJlZGRlZD10cnVlXCIgd2lkdGg9XCI2NDBcIiBoZWlnaHQ9XCI0NTFcIiBmcmFtZWJvcmRlcj1cIjBcIiBtYXJnaW5oZWlnaHQ9XCIwXCIgbWFyZ2lud2lkdGg9XCIwXCI+TG9hZGluZ+KApjwvaWZyYW1lPlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJiYWRnZS1jb250YWluZXIgZ3Jvd1wiPlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2J1aWxkc3BhY2Uuc28vYnVpbGRzL2FpLXdyaXRlclwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2VcIj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2J1aWxkc3BhY2VMb2dvfSBhbHQ9XCJidWlsZHNwYWNlIGxvZ29cIiAvPlxuICAgICAgICAgICAgPHA+YnVpbGQgd2l0aCBidWlsZHNwYWNlPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsImJ1aWxkc3BhY2VMb2dvIiwidXNlU3RhdGUiLCJEcm9wZG93biIsIlJlYWN0IiwiSG9tZSIsIm1lbnVJdGVtcyIsImtleSIsIm5hbWUiLCJ1c2VySW5wdXQiLCJzZXRVc2VySW5wdXQiLCJhcGlPdXRwdXQiLCJzZXRBUElPdXRwdXQiLCJpc0dlbmVyYXRpbmciLCJzZXRJc0dlbmVyYXRpbmciLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiU2V0Iiwib25Vc2VyQ2hhbmdlZFRleHQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiY2FsbEdlbmVyYXRlRW5kcG9pbnQiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwib3V0cHV0IiwidGV4dCIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwiaDEiLCJoMiIsIkJ1dHRvbiIsImZsYXQiLCJNZW51IiwiYXJpYS1sYWJlbCIsIml0ZW1zIiwic2VsZWN0aW9uTW9kZSIsInNlbGVjdGVkS2V5cyIsIm9uU2VsZWN0aW9uQ2hhbmdlIiwiaXRlbSIsIkl0ZW0iLCJjb2xvciIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImEiLCJvbkNsaWNrIiwic3BhbiIsImNsYXNzIiwicCIsImgzIiwiaDUiLCJpZnJhbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImZyYW1lYm9yZGVyIiwibWFyZ2luaGVpZ2h0IiwibWFyZ2lud2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});