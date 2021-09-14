/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ "./src/createElement.js");
/* harmony import */ var _createHeader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createHeader.js */ "./src/createHeader.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./src/index.js");




function createContactPage(){
    (0,_createHeader_js__WEBPACK_IMPORTED_MODULE_1__["default"])()

    let containerDiv = document.getElementById("content")

    let contactButton = document.getElementById("contact")

    contactButton.classList.add("active-section")

    containerDiv.appendChild((0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])("<h1>Contact Us</h1>"))
    containerDiv.appendChild((0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`
    Use the form below to drop us an e-mail. Old-fashioned phone calls work too >> 484.324.2400
    `))
    containerDiv.appendChild((0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])("<img src='./restaurant.jpg'>"));

    (0,_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])()

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);

/***/ }),

/***/ "./src/createElement.js":
/*!******************************!*\
  !*** ./src/createElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function component(html) {
    const element = document.createElement('div');
  
    // use your function!
    element.innerHTML = html
    return element;
  }
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component);

/***/ }),

/***/ "./src/createHeader.js":
/*!*****************************!*\
  !*** ./src/createHeader.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ "./src/createElement.js");



function createHeader(){
    let containerDiv = document.getElementById("content")

    containerDiv.innerHTML=""

    containerDiv.appendChild((0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`<button id="homepage">Homepage</button>`));
    containerDiv.appendChild((0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`<button id="menu">Menu</button>`));
    containerDiv.appendChild((0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`<button id="contact">Contact Us</button>`));


}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);

/***/ }),

/***/ "./src/createMenuPage.js":
/*!*******************************!*\
  !*** ./src/createMenuPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement.js */ "./src/createElement.js");
/* harmony import */ var _createHeader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createHeader.js */ "./src/createHeader.js");





function createMenuPage(){
    (0,_createHeader_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
    let containerDiv = document.getElementById("content")

    let imagesDiv = document.createElement("div")
    imagesDiv.classList.add("menu-images")

    let menuButton = document.getElementById("menu")
    menuButton.classList.toggle("active-section")

    containerDiv.appendChild((0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])("<h1>Menu</h1>"));
    
    imagesDiv.appendChild((0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])("<img src='./1.jpg'>"));
    imagesDiv.appendChild((0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])("<img src='./2.jpg'>"));
    imagesDiv.appendChild((0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])("<img src='./3.jpg'>"));
    imagesDiv.appendChild((0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])("<img src='./4.jpg'>"));
    imagesDiv.appendChild((0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])("<img src='./5.jpg'>"));
    imagesDiv.appendChild((0,_createElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])("<img src='./6.jpg'>"));

    containerDiv.appendChild(imagesDiv)
    ;(0,_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])()


}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ "./src/createElement.js");
/* harmony import */ var _createHeader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createHeader.js */ "./src/createHeader.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./src/index.js");




function createHomePage(){

    (0,_createHeader_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
    
    let containerDiv = document.getElementById("content")

    let homepageButton = document.getElementById("homepage")

    homepageButton.classList.toggle("active-section")

    containerDiv.appendChild((0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])("<h1>The Lexer Restaurant</h1>"));
    
    containerDiv.appendChild((0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`** Welcome to Cora Pearl. We are now open for Lunch & Dinner, Tuesday - Saturday, plus of course our legendary Sunday Lunch! Please click here to book or call the restaurant on +44 (0)20 7324 7722 **`))
    
    containerDiv.appendChild((0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])("<img src='./restaurant.jpg'>"));
    containerDiv.appendChild((0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`Cora Pearl is the second restaurant from the team behind award-winning Kitty Fisher’s in Mayfair. 

    Named after the infamous 19th Century courtesan who resided close by, Cora Pearl serves elevated British comfort food, cocktails and wines for all occasions in an historic Covent Garden townhouse.
    
    Messrs. Milburn, Mullion & Steel look forward to welcoming you soon.`));

    (0,_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])()

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ "./src/homepage.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _createMenuPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createMenuPage.js */ "./src/createMenuPage.js");





function queryAllButtons(){
    let allButtons = document.querySelectorAll("button")
    allButtons.forEach((element, index) => element.addEventListener("click", () => {
        if (index === 0){
            (0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
        }

        else if (index === 1){

            (0,_createMenuPage_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
            
        }       
        
        else if (index === 2){

            (0,_contact_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
            
        }
            }
            
        )
    )
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (queryAllButtons);
;(0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__["default"])()







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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNFO0FBQ0o7O0FBRXhDO0FBQ0EsSUFBSSw0REFBWTs7QUFFaEI7O0FBRUE7O0FBRUE7O0FBRUEsNkJBQTZCLDZEQUFTO0FBQ3RDLDZCQUE2Qiw2REFBUztBQUN0QztBQUNBO0FBQ0EsNkJBQTZCLDZEQUFTOztBQUV0QyxJQUFJLHFEQUFlOztBQUVuQjs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUN2QmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUNUeUI7OztBQUcxQztBQUNBOztBQUVBOztBQUVBLDZCQUE2Qiw2REFBUztBQUN0Qyw2QkFBNkIsNkRBQVM7QUFDdEMsNkJBQTZCLDZEQUFTOzs7QUFHdEM7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkeUI7QUFDRTtBQUNFOzs7QUFHNUM7QUFDQSxJQUFJLDREQUFZO0FBQ2hCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw2QkFBNkIsNkRBQVM7QUFDdEM7QUFDQSwwQkFBMEIsNkRBQVM7QUFDbkMsMEJBQTBCLDZEQUFTO0FBQ25DLDBCQUEwQiw2REFBUztBQUNuQywwQkFBMEIsNkRBQVM7QUFDbkMsMEJBQTBCLDZEQUFTO0FBQ25DLDBCQUEwQiw2REFBUzs7QUFFbkM7QUFDQSxJQUFJLHNEQUFlOzs7QUFHbkI7QUFDQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdCYTtBQUNFO0FBQ0o7O0FBRXhDOztBQUVBLElBQUksNERBQVk7QUFDaEI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSw2QkFBNkIsNkRBQVM7QUFDdEM7QUFDQSw2QkFBNkIsNkRBQVM7QUFDdEM7QUFDQSw2QkFBNkIsNkRBQVM7QUFDdEMsNkJBQTZCLDZEQUFTOztBQUV0QztBQUNBO0FBQ0E7O0FBRUEsSUFBSSxxREFBZTs7QUFFbkI7O0FBRUEsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QmE7QUFDRTtBQUNJOzs7QUFHaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFjO0FBQzFCOztBQUVBOztBQUVBLFlBQVksOERBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSx1REFBaUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxlQUFlO0FBQzlCLHlEQUFjOzs7Ozs7Ozs7Ozs7VUM3QmQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvY3JlYXRlSGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL3NyYy9jcmVhdGVNZW51UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29tcG9uZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnQuanNcIlxuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi9jcmVhdGVIZWFkZXIuanNcIlxuaW1wb3J0IHF1ZXJ5QWxsQnV0dG9ucyBmcm9tIFwiLi9pbmRleC5qc1wiXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RQYWdlKCl7XG4gICAgY3JlYXRlSGVhZGVyKClcblxuICAgIGxldCBjb250YWluZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcblxuICAgIGxldCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpXG5cbiAgICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtc2VjdGlvblwiKVxuXG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGNvbXBvbmVudChcIjxoMT5Db250YWN0IFVzPC9oMT5cIikpXG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGNvbXBvbmVudChgXG4gICAgVXNlIHRoZSBmb3JtIGJlbG93IHRvIGRyb3AgdXMgYW4gZS1tYWlsLiBPbGQtZmFzaGlvbmVkIHBob25lIGNhbGxzIHdvcmsgdG9vID4+IDQ4NC4zMjQuMjQwMFxuICAgIGApKVxuICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChjb21wb25lbnQoXCI8aW1nIHNyYz0nLi9yZXN0YXVyYW50LmpwZyc+XCIpKTtcblxuICAgIHF1ZXJ5QWxsQnV0dG9ucygpXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdFBhZ2UiLCJmdW5jdGlvbiBjb21wb25lbnQoaHRtbCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgXG4gICAgLy8gdXNlIHlvdXIgZnVuY3Rpb24hXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBodG1sXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbiAgXG5cbiAgZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50IiwiaW1wb3J0IGNvbXBvbmVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50LmpzXCJcblxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKXtcbiAgICBsZXQgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXG5cbiAgICBjb250YWluZXJEaXYuaW5uZXJIVE1MPVwiXCJcblxuICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChjb21wb25lbnQoYDxidXR0b24gaWQ9XCJob21lcGFnZVwiPkhvbWVwYWdlPC9idXR0b24+YCkpO1xuICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChjb21wb25lbnQoYDxidXR0b24gaWQ9XCJtZW51XCI+TWVudTwvYnV0dG9uPmApKTtcbiAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoY29tcG9uZW50KGA8YnV0dG9uIGlkPVwiY29udGFjdFwiPkNvbnRhY3QgVXM8L2J1dHRvbj5gKSk7XG5cblxufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyIiwiaW1wb3J0IHF1ZXJ5QWxsQnV0dG9ucyBmcm9tIFwiLi9pbmRleC5qc1wiXG5pbXBvcnQgY29tcG9uZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnQuanNcIlxuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi9jcmVhdGVIZWFkZXIuanNcIlxuXG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVQYWdlKCl7XG4gICAgY3JlYXRlSGVhZGVyKClcbiAgICBsZXQgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXG5cbiAgICBsZXQgaW1hZ2VzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGltYWdlc0Rpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWFnZXNcIilcblxuICAgIGxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpXG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlLXNlY3Rpb25cIilcblxuICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChjb21wb25lbnQoXCI8aDE+TWVudTwvaDE+XCIpKTtcbiAgICBcbiAgICBpbWFnZXNEaXYuYXBwZW5kQ2hpbGQoY29tcG9uZW50KFwiPGltZyBzcmM9Jy4vMS5qcGcnPlwiKSk7XG4gICAgaW1hZ2VzRGl2LmFwcGVuZENoaWxkKGNvbXBvbmVudChcIjxpbWcgc3JjPScuLzIuanBnJz5cIikpO1xuICAgIGltYWdlc0Rpdi5hcHBlbmRDaGlsZChjb21wb25lbnQoXCI8aW1nIHNyYz0nLi8zLmpwZyc+XCIpKTtcbiAgICBpbWFnZXNEaXYuYXBwZW5kQ2hpbGQoY29tcG9uZW50KFwiPGltZyBzcmM9Jy4vNC5qcGcnPlwiKSk7XG4gICAgaW1hZ2VzRGl2LmFwcGVuZENoaWxkKGNvbXBvbmVudChcIjxpbWcgc3JjPScuLzUuanBnJz5cIikpO1xuICAgIGltYWdlc0Rpdi5hcHBlbmRDaGlsZChjb21wb25lbnQoXCI8aW1nIHNyYz0nLi82LmpwZyc+XCIpKTtcblxuICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChpbWFnZXNEaXYpXG4gICAgcXVlcnlBbGxCdXR0b25zKClcblxuXG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51UGFnZTsiLCJpbXBvcnQgY29tcG9uZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnQuanNcIlxuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi9jcmVhdGVIZWFkZXIuanNcIlxuaW1wb3J0IHF1ZXJ5QWxsQnV0dG9ucyBmcm9tIFwiLi9pbmRleC5qc1wiXG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCl7XG5cbiAgICBjcmVhdGVIZWFkZXIoKVxuICAgIFxuICAgIGxldCBjb250YWluZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcblxuICAgIGxldCBob21lcGFnZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZXBhZ2VcIilcblxuICAgIGhvbWVwYWdlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmUtc2VjdGlvblwiKVxuXG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGNvbXBvbmVudChcIjxoMT5UaGUgTGV4ZXIgUmVzdGF1cmFudDwvaDE+XCIpKTtcbiAgICBcbiAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoY29tcG9uZW50KGAqKiBXZWxjb21lIHRvIENvcmEgUGVhcmwuIFdlIGFyZSBub3cgb3BlbiBmb3IgTHVuY2ggJiBEaW5uZXIsIFR1ZXNkYXkgLSBTYXR1cmRheSwgcGx1cyBvZiBjb3Vyc2Ugb3VyIGxlZ2VuZGFyeSBTdW5kYXkgTHVuY2ghIFBsZWFzZSBjbGljayBoZXJlIHRvIGJvb2sgb3IgY2FsbCB0aGUgcmVzdGF1cmFudCBvbiArNDQgKDApMjAgNzMyNCA3NzIyICoqYCkpXG4gICAgXG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGNvbXBvbmVudChcIjxpbWcgc3JjPScuL3Jlc3RhdXJhbnQuanBnJz5cIikpO1xuICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChjb21wb25lbnQoYENvcmEgUGVhcmwgaXMgdGhlIHNlY29uZCByZXN0YXVyYW50IGZyb20gdGhlIHRlYW0gYmVoaW5kIGF3YXJkLXdpbm5pbmcgS2l0dHkgRmlzaGVy4oCZcyBpbiBNYXlmYWlyLiBcblxuICAgIE5hbWVkIGFmdGVyIHRoZSBpbmZhbW91cyAxOXRoIENlbnR1cnkgY291cnRlc2FuIHdobyByZXNpZGVkIGNsb3NlIGJ5LCBDb3JhIFBlYXJsIHNlcnZlcyBlbGV2YXRlZCBCcml0aXNoIGNvbWZvcnQgZm9vZCwgY29ja3RhaWxzIGFuZCB3aW5lcyBmb3IgYWxsIG9jY2FzaW9ucyBpbiBhbiBoaXN0b3JpYyBDb3ZlbnQgR2FyZGVuIHRvd25ob3VzZS5cbiAgICBcbiAgICBNZXNzcnMuIE1pbGJ1cm4sIE11bGxpb24gJiBTdGVlbCBsb29rIGZvcndhcmQgdG8gd2VsY29taW5nIHlvdSBzb29uLmApKTtcblxuICAgIHF1ZXJ5QWxsQnV0dG9ucygpXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZVBhZ2U7IiwiaW1wb3J0IGNyZWF0ZUhvbWVQYWdlIGZyb20gXCIuL2hvbWVwYWdlLmpzXCJcbmltcG9ydCBjcmVhdGVDb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0LmpzXCJcbmltcG9ydCBjcmVhdGVNZW51UGFnZSBmcm9tIFwiLi9jcmVhdGVNZW51UGFnZS5qc1wiXG5cblxuZnVuY3Rpb24gcXVlcnlBbGxCdXR0b25zKCl7XG4gICAgbGV0IGFsbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpXG4gICAgYWxsQnV0dG9ucy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggPT09IDApe1xuICAgICAgICAgICAgY3JlYXRlSG9tZVBhZ2UoKVxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IDEpe1xuXG4gICAgICAgICAgICBjcmVhdGVNZW51UGFnZSgpXG4gICAgICAgICAgICBcbiAgICAgICAgfSAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGVsc2UgaWYgKGluZGV4ID09PSAyKXtcblxuICAgICAgICAgICAgY3JlYXRlQ29udGFjdFBhZ2UoKVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICApXG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgcXVlcnlBbGxCdXR0b25zXG5jcmVhdGVIb21lUGFnZSgpXG5cblxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==