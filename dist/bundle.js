/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --clr-accent-400: hsl(205, 26%, 17%);\r\n    --clr-accent-100:hsl(210, 22%, 22%);\r\n  \r\n    --clr-primary-400: hsl(209,23%,22%);\r\n  \r\n    --clr-neutral-100: hsl(0, 0%, 100%);\r\n    --clr-neutral-300: hsl(209, 23%, 22%);\r\n    --clr-neutral-400: hsl(207, 26%, 17%);\r\n    --clr-neutral-900: hsl(0, 0%, 0%);\r\n  \r\n    --ff-primary: 'Nunito Sans', sans-serif;\r\n  \r\n    --ff-body: var(--ff-primary);\r\n    --ff-heading:var(--ff-primary);\r\n  \r\n    --fw-regular: 400;\r\n    --fw-semi-bold: 500;\r\n    --fw-bold: 900;\r\n  \r\n    --fs-300: 0.8125rem;\r\n    --fs-400: 0.875rem;\r\n    --fs-500: 0.9375rem;\r\n    --fs-600: 1rem;\r\n    --fs-700: 1.875rem;\r\n    --fs-800: 2.5rem;\r\n    --fs-900: 3.5rem;\r\n  \r\n    --fs-body: var(--fs-400);\r\n    --fs-primary-heading: var(--fs-800);\r\n    --fs-secondary-heading: var(--fs-700);\r\n    --fs-nav: var(--fs-500);\r\n    --fs-button: var(--fs-300);\r\n  }\r\n  \r\n  @media (min-width: 50em) {\r\n    :root {\r\n      --fs-body: var(--fs-500);\r\n    --fs-primary-heading: var(--fs-900);\r\n    --fs-primary-heading: var(--fs-800);\r\n      --fs-nav: var(--fs-300);\r\n    }\r\n  }\r\n  \r\n  \r\n  /* https://piccalil.li/blog/a-modern-css-reset */\r\n  \r\n  /* Box sizing rules */\r\n  *,\r\n  *::before,\r\n  *::after {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  /* Remove default margin */\r\n  * {\r\n    margin: 0;\r\n    padding: 0;\r\n    font: inherit;\r\n  }\r\n  \r\n  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\r\n  ul[role='list'],\r\n  ol[role='list'] {\r\n    list-style: none;\r\n  }\r\n  \r\n  html, body {\r\n    height: 100%;\r\n    background-color: var(--clr-neutral-400);\r\n    font-family: var(--ff-primary);\r\n    \r\n  }\r\n  \r\n  /* Set core root defaults */\r\n  html:focus-within {\r\n    scroll-behavior: smooth;\r\n  }\r\n  \r\n  /* Set core body defaults */\r\n  body {\r\n    text-rendering: optimizeSpeed;\r\n    line-height: 1.5;\r\n  }\r\n  \r\n  /* A elements that don't have a class get default styles */\r\n  a:not([class]) {\r\n    text-decoration-skip-ink: auto;\r\n  }\r\n  \r\n  /* Make images easier to work with */\r\n  img,\r\n  picture, svg {\r\n    max-width: 100%;\r\n    display: block;\r\n  }\r\n\r\n  /* Remove input styling */\r\n\r\n  input, fieldset,select {\r\n    all: unset;\r\n  }\r\n  \r\n  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\r\n  @media (prefers-reduced-motion: reduce) {\r\n    html:focus-within {\r\n     scroll-behavior: auto;\r\n    }\r\n    \r\n    *,\r\n    *::before,\r\n    *::after {\r\n      animation-duration: 0.01ms !important;\r\n      animation-iteration-count: 1 !important;\r\n      transition-duration: 0.01ms !important;\r\n      scroll-behavior: auto !important;\r\n    }\r\n  }\r\n  \r\n  /* Utility classes  */\r\n  \r\n  .text-primary-400 {\r\n    color: var(--clr-primary-400);\r\n  }\r\n  .text-accent-400 {\r\n    color: var(--clr-accent-400);\r\n  }\r\n  .text-accent-100 {\r\n    color: var(--clr-accent-100);\r\n  }\r\n  .text-neutral-100 {\r\n    color: var(--clr-neutral-100);\r\n  }\r\n  .text-neutral-900 {\r\n    color: var(--clr-neutral-900);\r\n  }\r\n  \r\n  \r\n  .bg-primary-400 {\r\n    background-color: var(--clr-primary-400);\r\n  }\r\n  .bg-accent-400 {\r\n    background-color: var(--clr-accent-400);\r\n  }\r\n  .bg-accent-100 {\r\n    background-color: var(--clr-accent-100);\r\n  }\r\n  .bg-neutral-100 {\r\n    background-color: var(--clr-neutral-100);\r\n  }\r\n  .bg-neutral-300 {\r\n    background-color: var(--clr-neutral-300);\r\n  }\r\n  .bg-neutral-400 {\r\n    background-color: var(--clr-neutral-400);\r\n  }\r\n  .bg-neutral-900 {\r\n    background-color: var(--clr-neutral-900);\r\n  }\r\n  \r\n  .fw-bold {\r\n    font-weight: var(--fw-bold);\r\n  }\r\n  \r\n  .fw-bold {\r\n    font-weight: var(--fw-bold);\r\n  }\r\n  .fw-semi-bold {\r\n    font-weight: var(--fw-semi-bold);\r\n  }\r\n  .fw-regular {\r\n    font-weight: var(--fw-regular);\r\n  }\r\n  \r\n  .fs-primary-heading{\r\n    font-size: var(--fs-primary-heading);\r\n  }\r\n  \r\n  .fs-secondary-heading{\r\n    font-size: var(--fs-secondary-heading);\r\n  }\r\n  \r\n  .fs-300 {\r\n    font-size: var(--fs-300);\r\n  }\r\n  \r\n  .fs-400 {\r\n    font-size: var(--fs-400);\r\n  }\r\n  .fs-500 {\r\n    font-size: var(--fs-500);\r\n  }\r\n  .fs-600 {\r\n    font-size: var(--fs-600);\r\n  }\r\n  \r\n\r\n/* Container */\r\n\r\n.container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 10%;\r\n    margin: 0 auto;\r\n}\r\n\r\n  /* Header  */\r\n\r\n  header{\r\n    padding: 1rem 0rem;\r\n  }\r\n\r\n.light-mode {\r\n    display: flex;\r\n    white-space: nowrap;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.light-mode img{\r\n  width: 1rem;\r\n}\r\n\r\n/* Search & Filter */\r\n\r\n.search-bar{\r\n  padding-top: 2rem;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\ninput, select {\r\nbackground-color: var(--clr-neutral-300);\r\nborder: none;\r\npadding: 1rem;\r\ncolor: var(--clr-neutral-100);\r\n}\r\n\r\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: var(--clr-neutral-100);\r\n    opacity: 1; /* Firefox */\r\n  }\r\n\r\n    /* Countries  */\r\n\r\n    .country-list{\r\n      display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 3rem;\r\n  padding-bottom: 3rem;\r\n    }\r\n    \r\n    .country-info{\r\n      padding: 1rem;\r\n    }\r\n\r\n    .country-card img{\r\n      height: 200px;\r\n      width: 100%;\r\n      object-fit: cover;\r\n    }\r\n\r\n    h2{\r\n      padding-bottom: 1rem;\r\n    }\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,oCAAoC;IACpC,mCAAmC;;IAEnC,mCAAmC;;IAEnC,mCAAmC;IACnC,qCAAqC;IACrC,qCAAqC;IACrC,iCAAiC;;IAEjC,uCAAuC;;IAEvC,4BAA4B;IAC5B,8BAA8B;;IAE9B,iBAAiB;IACjB,mBAAmB;IACnB,cAAc;;IAEd,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,cAAc;IACd,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;;IAEhB,wBAAwB;IACxB,mCAAmC;IACnC,qCAAqC;IACrC,uBAAuB;IACvB,0BAA0B;EAC5B;;EAEA;IACE;MACE,wBAAwB;IAC1B,mCAAmC;IACnC,mCAAmC;MACjC,uBAAuB;IACzB;EACF;;;EAGA,gDAAgD;;EAEhD,qBAAqB;EACrB;;;IAGE,sBAAsB;EACxB;;EAEA,0BAA0B;EAC1B;IACE,SAAS;IACT,UAAU;IACV,aAAa;EACf;;EAEA,2GAA2G;EAC3G;;IAEE,gBAAgB;EAClB;;EAEA;IACE,YAAY;IACZ,wCAAwC;IACxC,8BAA8B;;EAEhC;;EAEA,2BAA2B;EAC3B;IACE,uBAAuB;EACzB;;EAEA,2BAA2B;EAC3B;IACE,6BAA6B;IAC7B,gBAAgB;EAClB;;EAEA,0DAA0D;EAC1D;IACE,8BAA8B;EAChC;;EAEA,oCAAoC;EACpC;;IAEE,eAAe;IACf,cAAc;EAChB;;EAEA,yBAAyB;;EAEzB;IACE,UAAU;EACZ;;EAEA,gGAAgG;EAChG;IACE;KACC,qBAAqB;IACtB;;IAEA;;;MAGE,qCAAqC;MACrC,uCAAuC;MACvC,sCAAsC;MACtC,gCAAgC;IAClC;EACF;;EAEA,qBAAqB;;EAErB;IACE,6BAA6B;EAC/B;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,6BAA6B;EAC/B;;;EAGA;IACE,wCAAwC;EAC1C;EACA;IACE,uCAAuC;EACzC;EACA;IACE,uCAAuC;EACzC;EACA;IACE,wCAAwC;EAC1C;EACA;IACE,wCAAwC;EAC1C;EACA;IACE,wCAAwC;EAC1C;EACA;IACE,wCAAwC;EAC1C;;EAEA;IACE,2BAA2B;EAC7B;;EAEA;IACE,2BAA2B;EAC7B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;;EAEA;IACE,oCAAoC;EACtC;;EAEA;IACE,sCAAsC;EACxC;;EAEA;IACE,wBAAwB;EAC1B;;EAEA;IACE,wBAAwB;EAC1B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,wBAAwB;EAC1B;;;AAGF,cAAc;;AAEd;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,cAAc;IACd,cAAc;AAClB;;EAEE,YAAY;;EAEZ;IACE,kBAAkB;EACpB;;AAEF;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,SAAS;AACb;;AAEA;EACE,WAAW;AACb;;AAEA,oBAAoB;;AAEpB;EACE,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;AACA,wCAAwC;AACxC,YAAY;AACZ,aAAa;AACb,6BAA6B;AAC7B;;AAEA,gBAAgB,yCAAyC;IACrD,6BAA6B;IAC7B,UAAU,EAAE,YAAY;EAC1B;;IAEE,eAAe;;IAEf;MACE,aAAa;EACjB,qCAAqC;EACrC,SAAS;EACT,oBAAoB;IAClB;;IAEA;MACE,aAAa;IACf;;IAEA;MACE,aAAa;MACb,WAAW;MACX,iBAAiB;IACnB;;IAEA;MACE,oBAAoB;IACtB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');\r\n\r\n:root {\r\n    --clr-accent-400: hsl(205, 26%, 17%);\r\n    --clr-accent-100:hsl(210, 22%, 22%);\r\n  \r\n    --clr-primary-400: hsl(209,23%,22%);\r\n  \r\n    --clr-neutral-100: hsl(0, 0%, 100%);\r\n    --clr-neutral-300: hsl(209, 23%, 22%);\r\n    --clr-neutral-400: hsl(207, 26%, 17%);\r\n    --clr-neutral-900: hsl(0, 0%, 0%);\r\n  \r\n    --ff-primary: 'Nunito Sans', sans-serif;\r\n  \r\n    --ff-body: var(--ff-primary);\r\n    --ff-heading:var(--ff-primary);\r\n  \r\n    --fw-regular: 400;\r\n    --fw-semi-bold: 500;\r\n    --fw-bold: 900;\r\n  \r\n    --fs-300: 0.8125rem;\r\n    --fs-400: 0.875rem;\r\n    --fs-500: 0.9375rem;\r\n    --fs-600: 1rem;\r\n    --fs-700: 1.875rem;\r\n    --fs-800: 2.5rem;\r\n    --fs-900: 3.5rem;\r\n  \r\n    --fs-body: var(--fs-400);\r\n    --fs-primary-heading: var(--fs-800);\r\n    --fs-secondary-heading: var(--fs-700);\r\n    --fs-nav: var(--fs-500);\r\n    --fs-button: var(--fs-300);\r\n  }\r\n  \r\n  @media (min-width: 50em) {\r\n    :root {\r\n      --fs-body: var(--fs-500);\r\n    --fs-primary-heading: var(--fs-900);\r\n    --fs-primary-heading: var(--fs-800);\r\n      --fs-nav: var(--fs-300);\r\n    }\r\n  }\r\n  \r\n  \r\n  /* https://piccalil.li/blog/a-modern-css-reset */\r\n  \r\n  /* Box sizing rules */\r\n  *,\r\n  *::before,\r\n  *::after {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  /* Remove default margin */\r\n  * {\r\n    margin: 0;\r\n    padding: 0;\r\n    font: inherit;\r\n  }\r\n  \r\n  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\r\n  ul[role='list'],\r\n  ol[role='list'] {\r\n    list-style: none;\r\n  }\r\n  \r\n  html, body {\r\n    height: 100%;\r\n    background-color: var(--clr-neutral-400);\r\n    font-family: var(--ff-primary);\r\n    \r\n  }\r\n  \r\n  /* Set core root defaults */\r\n  html:focus-within {\r\n    scroll-behavior: smooth;\r\n  }\r\n  \r\n  /* Set core body defaults */\r\n  body {\r\n    text-rendering: optimizeSpeed;\r\n    line-height: 1.5;\r\n  }\r\n  \r\n  /* A elements that don't have a class get default styles */\r\n  a:not([class]) {\r\n    text-decoration-skip-ink: auto;\r\n  }\r\n  \r\n  /* Make images easier to work with */\r\n  img,\r\n  picture, svg {\r\n    max-width: 100%;\r\n    display: block;\r\n  }\r\n\r\n  /* Remove input styling */\r\n\r\n  input, fieldset,select {\r\n    all: unset;\r\n  }\r\n  \r\n  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\r\n  @media (prefers-reduced-motion: reduce) {\r\n    html:focus-within {\r\n     scroll-behavior: auto;\r\n    }\r\n    \r\n    *,\r\n    *::before,\r\n    *::after {\r\n      animation-duration: 0.01ms !important;\r\n      animation-iteration-count: 1 !important;\r\n      transition-duration: 0.01ms !important;\r\n      scroll-behavior: auto !important;\r\n    }\r\n  }\r\n  \r\n  /* Utility classes  */\r\n  \r\n  .text-primary-400 {\r\n    color: var(--clr-primary-400);\r\n  }\r\n  .text-accent-400 {\r\n    color: var(--clr-accent-400);\r\n  }\r\n  .text-accent-100 {\r\n    color: var(--clr-accent-100);\r\n  }\r\n  .text-neutral-100 {\r\n    color: var(--clr-neutral-100);\r\n  }\r\n  .text-neutral-900 {\r\n    color: var(--clr-neutral-900);\r\n  }\r\n  \r\n  \r\n  .bg-primary-400 {\r\n    background-color: var(--clr-primary-400);\r\n  }\r\n  .bg-accent-400 {\r\n    background-color: var(--clr-accent-400);\r\n  }\r\n  .bg-accent-100 {\r\n    background-color: var(--clr-accent-100);\r\n  }\r\n  .bg-neutral-100 {\r\n    background-color: var(--clr-neutral-100);\r\n  }\r\n  .bg-neutral-300 {\r\n    background-color: var(--clr-neutral-300);\r\n  }\r\n  .bg-neutral-400 {\r\n    background-color: var(--clr-neutral-400);\r\n  }\r\n  .bg-neutral-900 {\r\n    background-color: var(--clr-neutral-900);\r\n  }\r\n  \r\n  .fw-bold {\r\n    font-weight: var(--fw-bold);\r\n  }\r\n  \r\n  .fw-bold {\r\n    font-weight: var(--fw-bold);\r\n  }\r\n  .fw-semi-bold {\r\n    font-weight: var(--fw-semi-bold);\r\n  }\r\n  .fw-regular {\r\n    font-weight: var(--fw-regular);\r\n  }\r\n  \r\n  .fs-primary-heading{\r\n    font-size: var(--fs-primary-heading);\r\n  }\r\n  \r\n  .fs-secondary-heading{\r\n    font-size: var(--fs-secondary-heading);\r\n  }\r\n  \r\n  .fs-300 {\r\n    font-size: var(--fs-300);\r\n  }\r\n  \r\n  .fs-400 {\r\n    font-size: var(--fs-400);\r\n  }\r\n  .fs-500 {\r\n    font-size: var(--fs-500);\r\n  }\r\n  .fs-600 {\r\n    font-size: var(--fs-600);\r\n  }\r\n  \r\n\r\n/* Container */\r\n\r\n.container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 10%;\r\n    margin: 0 auto;\r\n}\r\n\r\n  /* Header  */\r\n\r\n  header{\r\n    padding: 1rem 0rem;\r\n  }\r\n\r\n.light-mode {\r\n    display: flex;\r\n    white-space: nowrap;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.light-mode img{\r\n  width: 1rem;\r\n}\r\n\r\n/* Search & Filter */\r\n\r\n.search-bar{\r\n  padding-top: 2rem;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\ninput, select {\r\nbackground-color: var(--clr-neutral-300);\r\nborder: none;\r\npadding: 1rem;\r\ncolor: var(--clr-neutral-100);\r\n}\r\n\r\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: var(--clr-neutral-100);\r\n    opacity: 1; /* Firefox */\r\n  }\r\n\r\n    /* Countries  */\r\n\r\n    .country-list{\r\n      display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 3rem;\r\n  padding-bottom: 3rem;\r\n    }\r\n    \r\n    .country-info{\r\n      padding: 1rem;\r\n    }\r\n\r\n    .country-card img{\r\n      height: 200px;\r\n      width: 100%;\r\n      object-fit: cover;\r\n    }\r\n\r\n    h2{\r\n      padding-bottom: 1rem;\r\n    }\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const countryArr = [];

async function getCountries() {
  let url = "https://restcountries.com/v3.1/all";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderCountries() {
  let countries = await getCountries();
  countries.forEach((country) => {
    countryArr.push([
      { flag: country.flags.svg },
      { name: country.name.common },
      { population: country.population },
      { region: country.region },
      { capital: country.capital },
    ]);
  });
  displayCountries();
}

renderCountries();

function displayCountries() {
  let html = "";
  for (let i = 0; i < countryArr.length; i++) {
    let htmlSegment = `
          <div class="country-card bg-neutral-300 text-neutral-100">
                <img src="${Object.values(countryArr[i][0])}" />
                <div class="country-info">
                  <h2 class="country-name fw-bold">${Object.values(countryArr[i][1])}</h2>
                  <ul role="list">
                    <li><span class="fw-bold">Population: </span>${Object.values(
                      countryArr[i][2]
                    )}</li>
                    <li><span class="fw-bold">Region: </span> ${Object.values(
                      countryArr[i][3]
                    )}</li>
                    <li><span class="fw-bold">Capital: </span> ${Object.values(
                      countryArr[i][4]
                    )}</li>
                  </ul>
                </div>
              </div>`;
    html += htmlSegment;
  }

  let container = document.querySelector(".country-list");
  container.innerHTML = html;
}

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map