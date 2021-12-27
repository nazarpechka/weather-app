/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const body = document.querySelector('body');
const temp = document.querySelector('#temp');
const city = document.querySelector('#city');

function displayWeather(data) {
  body.style.backgroundImage = 'url("img/cloudy.jpg")';
  temp.textContent = `${data.temp}°`;
  city.textContent = data.city;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayWeather);

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const apiKey = 'cfc186d360b6183d2efa05df0eb38497';

async function requestWeather(city, units) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=${units}`);
  const data = await response.json();
  return data;
}

async function weatherData(city = 'Kyiv', units = 'metric') {
  const weather = await requestWeather(city, units);
  if (weather.cod !== 200) return null;
  return {
    city: weather.name,
    country: weather.sys.country,
    temp: Math.round(weather.main.temp),
    humidity: weather.main.humidity,
    windSpeed: weather.wind.speed,
    weatherId: weather.weather[0].id,
    weatherName: weather.weather[0].main
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherData);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/weather.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view.js");


const button = document.querySelector('#search');
const input = document.querySelector('input');
button.addEventListener('click', () => {
  const data = (0,_weather__WEBPACK_IMPORTED_MODULE_0__["default"])(input.value);
  data.then(console.log);
  data.then(_view__WEBPACK_IMPORTED_MODULE_1__["default"]);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF4QjtBQUNBN0IsRUFBQUEsSUFBSSxDQUFDOEIsSUFBTCxDQUFVQyxPQUFPLENBQUNDLEdBQWxCO0FBQ0FoQyxFQUFBQSxJQUFJLENBQUM4QixJQUFMLENBQVUvQiw2Q0FBVjtBQUNELENBSkQsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAnKTtcbmNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eScpO1xuXG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlcihkYXRhKSB7XG4gIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcImltZy9jbG91ZHkuanBnXCIpJztcbiAgdGVtcC50ZXh0Q29udGVudCA9IGAke2RhdGEudGVtcH3CsGA7XG4gIGNpdHkudGV4dENvbnRlbnQgPSBkYXRhLmNpdHk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlXZWF0aGVyO1xuIiwiY29uc3QgYXBpS2V5ID0gJ2NmYzE4NmQzNjBiNjE4M2QyZWZhMDVkZjBlYjM4NDk3JztcblxuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdFdlYXRoZXIoY2l0eSwgdW5pdHMpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JkFQUElEPSR7YXBpS2V5fSZ1bml0cz0ke3VuaXRzfWBcbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHdlYXRoZXJEYXRhKGNpdHkgPSAnS3lpdicsIHVuaXRzID0gJ21ldHJpYycpIHtcbiAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IHJlcXVlc3RXZWF0aGVyKGNpdHksIHVuaXRzKTtcbiAgaWYgKHdlYXRoZXIuY29kICE9PSAyMDApIHJldHVybiBudWxsO1xuICByZXR1cm4ge1xuICAgIGNpdHk6IHdlYXRoZXIubmFtZSxcbiAgICBjb3VudHJ5OiB3ZWF0aGVyLnN5cy5jb3VudHJ5LFxuICAgIHRlbXA6IE1hdGgucm91bmQod2VhdGhlci5tYWluLnRlbXApLFxuICAgIGh1bWlkaXR5OiB3ZWF0aGVyLm1haW4uaHVtaWRpdHksXG4gICAgd2luZFNwZWVkOiB3ZWF0aGVyLndpbmQuc3BlZWQsXG4gICAgd2VhdGhlcklkOiB3ZWF0aGVyLndlYXRoZXJbMF0uaWQsXG4gICAgd2VhdGhlck5hbWU6IHdlYXRoZXIud2VhdGhlclswXS5tYWluLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyRGF0YTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHdlYXRoZXJEYXRhIGZyb20gJy4vd2VhdGhlcic7XG5pbXBvcnQgZGlzcGxheVdlYXRoZXIgZnJvbSAnLi92aWV3JztcblxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaCcpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB3ZWF0aGVyRGF0YShpbnB1dC52YWx1ZSk7XG4gIGRhdGEudGhlbihjb25zb2xlLmxvZyk7XG4gIGRhdGEudGhlbihkaXNwbGF5V2VhdGhlcik7XG59KTtcbiJdLCJuYW1lcyI6WyJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGVtcCIsImNpdHkiLCJkaXNwbGF5V2VhdGhlciIsImRhdGEiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsInRleHRDb250ZW50IiwiYXBpS2V5IiwicmVxdWVzdFdlYXRoZXIiLCJ1bml0cyIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwid2VhdGhlckRhdGEiLCJ3ZWF0aGVyIiwiY29kIiwibmFtZSIsImNvdW50cnkiLCJzeXMiLCJNYXRoIiwicm91bmQiLCJtYWluIiwiaHVtaWRpdHkiLCJ3aW5kU3BlZWQiLCJ3aW5kIiwic3BlZWQiLCJ3ZWF0aGVySWQiLCJpZCIsIndlYXRoZXJOYW1lIiwiYnV0dG9uIiwiaW5wdXQiLCJhZGRFdmVudExpc3RlbmVyIiwidmFsdWUiLCJ0aGVuIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=