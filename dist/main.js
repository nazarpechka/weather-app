/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  return {
    city: weather.name,
    country: weather.sys.country,
    temp: weather.main.temp,
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

(0,_weather__WEBPACK_IMPORTED_MODULE_0__["default"])().then(console.log);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLE1BQU0sR0FBRyxrQ0FBZjs7QUFFQSxlQUFlQyxjQUFmLENBQThCQyxJQUE5QixFQUFvQ0MsS0FBcEMsRUFBMkM7QUFDekMsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FDekIscURBQW9ESCxJQUFLLFVBQVNGLE1BQU8sVUFBU0csS0FBTSxFQUQvRCxDQUE1QjtBQUdBLFFBQU1HLElBQUksR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQVQsRUFBbkI7QUFDQSxTQUFPRCxJQUFQO0FBQ0Q7O0FBRUQsZUFBZUUsV0FBZixDQUEyQk4sSUFBSSxHQUFHLE1BQWxDLEVBQTBDQyxLQUFLLEdBQUcsUUFBbEQsRUFBNEQ7QUFDMUQsUUFBTU0sT0FBTyxHQUFHLE1BQU1SLGNBQWMsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLENBQXBDO0FBQ0EsU0FBTztBQUNMRCxJQUFBQSxJQUFJLEVBQUVPLE9BQU8sQ0FBQ0MsSUFEVDtBQUVMQyxJQUFBQSxPQUFPLEVBQUVGLE9BQU8sQ0FBQ0csR0FBUixDQUFZRCxPQUZoQjtBQUdMRSxJQUFBQSxJQUFJLEVBQUVKLE9BQU8sQ0FBQ0ssSUFBUixDQUFhRCxJQUhkO0FBSUxFLElBQUFBLFFBQVEsRUFBRU4sT0FBTyxDQUFDSyxJQUFSLENBQWFDLFFBSmxCO0FBS0xDLElBQUFBLFNBQVMsRUFBRVAsT0FBTyxDQUFDUSxJQUFSLENBQWFDLEtBTG5CO0FBTUxDLElBQUFBLFNBQVMsRUFBRVYsT0FBTyxDQUFDQSxPQUFSLENBQWdCLENBQWhCLEVBQW1CVyxFQU56QjtBQU9MQyxJQUFBQSxXQUFXLEVBQUVaLE9BQU8sQ0FBQ0EsT0FBUixDQUFnQixDQUFoQixFQUFtQks7QUFQM0IsR0FBUDtBQVNEOztBQUVELGlFQUFlTixXQUFmOzs7Ozs7VUN2QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBRUFBLG9EQUFXLEdBQUdjLElBQWQsQ0FBbUJDLE9BQU8sQ0FBQ0MsR0FBM0IsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcGlLZXkgPSAnY2ZjMTg2ZDM2MGI2MTgzZDJlZmEwNWRmMGViMzg0OTcnO1xuXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0V2VhdGhlcihjaXR5LCB1bml0cykge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mQVBQSUQ9JHthcGlLZXl9JnVuaXRzPSR7dW5pdHN9YFxuICApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gd2VhdGhlckRhdGEoY2l0eSA9ICdLeWl2JywgdW5pdHMgPSAnbWV0cmljJykge1xuICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgcmVxdWVzdFdlYXRoZXIoY2l0eSwgdW5pdHMpO1xuICByZXR1cm4ge1xuICAgIGNpdHk6IHdlYXRoZXIubmFtZSxcbiAgICBjb3VudHJ5OiB3ZWF0aGVyLnN5cy5jb3VudHJ5LFxuICAgIHRlbXA6IHdlYXRoZXIubWFpbi50ZW1wLFxuICAgIGh1bWlkaXR5OiB3ZWF0aGVyLm1haW4uaHVtaWRpdHksXG4gICAgd2luZFNwZWVkOiB3ZWF0aGVyLndpbmQuc3BlZWQsXG4gICAgd2VhdGhlcklkOiB3ZWF0aGVyLndlYXRoZXJbMF0uaWQsXG4gICAgd2VhdGhlck5hbWU6IHdlYXRoZXIud2VhdGhlclswXS5tYWluLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyRGF0YTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHdlYXRoZXJEYXRhIGZyb20gJy4vd2VhdGhlcic7XG5cbndlYXRoZXJEYXRhKCkudGhlbihjb25zb2xlLmxvZyk7XG4iXSwibmFtZXMiOlsiYXBpS2V5IiwicmVxdWVzdFdlYXRoZXIiLCJjaXR5IiwidW5pdHMiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJ3ZWF0aGVyRGF0YSIsIndlYXRoZXIiLCJuYW1lIiwiY291bnRyeSIsInN5cyIsInRlbXAiLCJtYWluIiwiaHVtaWRpdHkiLCJ3aW5kU3BlZWQiLCJ3aW5kIiwic3BlZWQiLCJ3ZWF0aGVySWQiLCJpZCIsIndlYXRoZXJOYW1lIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9