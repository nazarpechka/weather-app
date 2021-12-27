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
/* harmony export */   "displayWeather": () => (/* binding */ displayWeather),
/* harmony export */   "loadIcons": () => (/* binding */ loadIcons),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const body = document.querySelector('body');
const temp = document.querySelector('#temp');
const city = document.querySelector('#city');
const name = document.querySelector('#name');
const icon = document.querySelector('#icon');
const error = document.querySelector('#error');
const humidity = document.querySelector('#humidity-value');
const wind = document.querySelector('#wind-value');
const feelsLike = document.querySelector('#feelsLike-value');
const tempMin = document.querySelector('#tempMin-value');
const tempMax = document.querySelector('#tempMax-value');
let icons;

function getIcon(id) {
  const prefix = 'wi wi-';
  let iconClass = icons[id].icon;

  if (!(id > 699 && id < 800) && !(id > 899 && id < 1000)) {
    iconClass = `day-${iconClass}`;
  }

  iconClass = prefix + iconClass;
  return [iconClass, icons[id].label];
}

function getImage(id) {
  let img;

  if (id < 600) {
    img = 'rainy.jpg';
  } else if (id < 700) {
    img = 'snow.jpg';
  } else if (id < 800) {
    img = 'fog.jpg';
  } else if (id === 800) {
    img = 'clear.jpg';
  } else {
    img = 'cloudy.jpg';
  }

  return `url("img/${img}")`;
}

function displayWeather(data) {
  if (!data) {
    error.textContent = 'City not found!';
    return;
  }

  error.textContent = '';
  body.style.backgroundImage = getImage(data.id);
  temp.textContent = `${data.temp}°`;
  city.textContent = `${data.city}, ${data.country}`;
  [icon.className, name.textContent] = getIcon(data.id);
  humidity.textContent = `${data.humidity}%`;
  wind.textContent = `${data.wind} km/h`;
  feelsLike.textContent = `${data.feelsLike}°`;
  tempMin.textContent = `${data.tempMin}°`;
  tempMax.textContent = `${data.tempMax}°`;
}
async function loadIcons() {
  const data = await fetch('icons.json');
  icons = await data.json();
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
    feelsLike: Math.round(weather.main.feels_like),
    tempMin: Math.round(weather.main.temp_min),
    tempMax: Math.round(weather.main.temp_max),
    humidity: weather.main.humidity,
    wind: Math.round(weather.wind.speed),
    id: weather.weather[0].id,
    name: weather.weather[0].main
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
(0,_view__WEBPACK_IMPORTED_MODULE_1__.loadIcons)();
button.addEventListener('click', () => {
  const data = (0,_weather__WEBPACK_IMPORTED_MODULE_0__["default"])(input.value);
  data.then(console.log);
  data.then(_view__WEBPACK_IMPORTED_MODULE_1__.displayWeather);
});
button.click();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQSxNQUFNVyxNQUFNLEdBQUc3QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtBQUNBLE1BQU02QyxLQUFLLEdBQUc5QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZDtBQUVBMEIsZ0RBQVM7QUFFVGtCLE1BQU0sQ0FBQ0UsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsTUFBTTtBQUNyQyxRQUFNMUIsSUFBSSxHQUFHYSxvREFBVyxDQUFDWSxLQUFLLENBQUNFLEtBQVAsQ0FBeEI7QUFDQTNCLEVBQUFBLElBQUksQ0FBQzRCLElBQUwsQ0FBVUMsT0FBTyxDQUFDQyxHQUFsQjtBQUNBOUIsRUFBQUEsSUFBSSxDQUFDNEIsSUFBTCxDQUFVN0IsaURBQVY7QUFDRCxDQUpEO0FBTUF5QixNQUFNLENBQUNPLEtBQVAsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAnKTtcbmNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eScpO1xuY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG5jb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ljb24nKTtcbmNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yJyk7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZGl0eS12YWx1ZScpO1xuY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kLXZhbHVlJyk7XG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlbHNMaWtlLXZhbHVlJyk7XG5jb25zdCB0ZW1wTWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBNaW4tdmFsdWUnKTtcbmNvbnN0IHRlbXBNYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcE1heC12YWx1ZScpO1xubGV0IGljb25zO1xuXG5mdW5jdGlvbiBnZXRJY29uKGlkKSB7XG4gIGNvbnN0IHByZWZpeCA9ICd3aSB3aS0nO1xuICBsZXQgaWNvbkNsYXNzID0gaWNvbnNbaWRdLmljb247XG5cbiAgaWYgKCEoaWQgPiA2OTkgJiYgaWQgPCA4MDApICYmICEoaWQgPiA4OTkgJiYgaWQgPCAxMDAwKSkge1xuICAgIGljb25DbGFzcyA9IGBkYXktJHtpY29uQ2xhc3N9YDtcbiAgfVxuXG4gIGljb25DbGFzcyA9IHByZWZpeCArIGljb25DbGFzcztcbiAgcmV0dXJuIFtpY29uQ2xhc3MsIGljb25zW2lkXS5sYWJlbF07XG59XG5cbmZ1bmN0aW9uIGdldEltYWdlKGlkKSB7XG4gIGxldCBpbWc7XG4gIGlmIChpZCA8IDYwMCkge1xuICAgIGltZyA9ICdyYWlueS5qcGcnO1xuICB9IGVsc2UgaWYgKGlkIDwgNzAwKSB7XG4gICAgaW1nID0gJ3Nub3cuanBnJztcbiAgfSBlbHNlIGlmIChpZCA8IDgwMCkge1xuICAgIGltZyA9ICdmb2cuanBnJztcbiAgfSBlbHNlIGlmIChpZCA9PT0gODAwKSB7XG4gICAgaW1nID0gJ2NsZWFyLmpwZyc7XG4gIH0gZWxzZSB7XG4gICAgaW1nID0gJ2Nsb3VkeS5qcGcnO1xuICB9XG5cbiAgcmV0dXJuIGB1cmwoXCJpbWcvJHtpbWd9XCIpYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyKGRhdGEpIHtcbiAgaWYgKCFkYXRhKSB7XG4gICAgZXJyb3IudGV4dENvbnRlbnQgPSAnQ2l0eSBub3QgZm91bmQhJztcbiAgICByZXR1cm47XG4gIH1cbiAgZXJyb3IudGV4dENvbnRlbnQgPSAnJztcblxuICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGdldEltYWdlKGRhdGEuaWQpO1xuICB0ZW1wLnRleHRDb250ZW50ID0gYCR7ZGF0YS50ZW1wfcKwYDtcbiAgY2l0eS50ZXh0Q29udGVudCA9IGAke2RhdGEuY2l0eX0sICR7ZGF0YS5jb3VudHJ5fWA7XG4gIFtpY29uLmNsYXNzTmFtZSwgbmFtZS50ZXh0Q29udGVudF0gPSBnZXRJY29uKGRhdGEuaWQpO1xuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2RhdGEuaHVtaWRpdHl9JWA7XG4gIHdpbmQudGV4dENvbnRlbnQgPSBgJHtkYXRhLndpbmR9IGttL2hgO1xuICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtkYXRhLmZlZWxzTGlrZX3CsGA7XG4gIHRlbXBNaW4udGV4dENvbnRlbnQgPSBgJHtkYXRhLnRlbXBNaW59wrBgO1xuICB0ZW1wTWF4LnRleHRDb250ZW50ID0gYCR7ZGF0YS50ZW1wTWF4fcKwYDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRJY29ucygpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdpY29ucy5qc29uJyk7XG4gIGljb25zID0gYXdhaXQgZGF0YS5qc29uKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlXZWF0aGVyO1xuIiwiY29uc3QgYXBpS2V5ID0gJ2NmYzE4NmQzNjBiNjE4M2QyZWZhMDVkZjBlYjM4NDk3JztcblxuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdFdlYXRoZXIoY2l0eSwgdW5pdHMpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JkFQUElEPSR7YXBpS2V5fSZ1bml0cz0ke3VuaXRzfWBcbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHdlYXRoZXJEYXRhKGNpdHkgPSAnS3lpdicsIHVuaXRzID0gJ21ldHJpYycpIHtcbiAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IHJlcXVlc3RXZWF0aGVyKGNpdHksIHVuaXRzKTtcbiAgaWYgKHdlYXRoZXIuY29kICE9PSAyMDApIHJldHVybiBudWxsO1xuICByZXR1cm4ge1xuICAgIGNpdHk6IHdlYXRoZXIubmFtZSxcbiAgICBjb3VudHJ5OiB3ZWF0aGVyLnN5cy5jb3VudHJ5LFxuICAgIHRlbXA6IE1hdGgucm91bmQod2VhdGhlci5tYWluLnRlbXApLFxuICAgIGZlZWxzTGlrZTogTWF0aC5yb3VuZCh3ZWF0aGVyLm1haW4uZmVlbHNfbGlrZSksXG4gICAgdGVtcE1pbjogTWF0aC5yb3VuZCh3ZWF0aGVyLm1haW4udGVtcF9taW4pLFxuICAgIHRlbXBNYXg6IE1hdGgucm91bmQod2VhdGhlci5tYWluLnRlbXBfbWF4KSxcbiAgICBodW1pZGl0eTogd2VhdGhlci5tYWluLmh1bWlkaXR5LFxuICAgIHdpbmQ6IE1hdGgucm91bmQod2VhdGhlci53aW5kLnNwZWVkKSxcbiAgICBpZDogd2VhdGhlci53ZWF0aGVyWzBdLmlkLFxuICAgIG5hbWU6IHdlYXRoZXIud2VhdGhlclswXS5tYWluLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyRGF0YTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHdlYXRoZXJEYXRhIGZyb20gJy4vd2VhdGhlcic7XG5pbXBvcnQgeyBkaXNwbGF5V2VhdGhlciwgbG9hZEljb25zIH0gZnJvbSAnLi92aWV3JztcblxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaCcpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuXG5sb2FkSWNvbnMoKTtcblxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBkYXRhID0gd2VhdGhlckRhdGEoaW5wdXQudmFsdWUpO1xuICBkYXRhLnRoZW4oY29uc29sZS5sb2cpO1xuICBkYXRhLnRoZW4oZGlzcGxheVdlYXRoZXIpO1xufSk7XG5cbmJ1dHRvbi5jbGljaygpO1xuIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wIiwiY2l0eSIsIm5hbWUiLCJpY29uIiwiZXJyb3IiLCJodW1pZGl0eSIsIndpbmQiLCJmZWVsc0xpa2UiLCJ0ZW1wTWluIiwidGVtcE1heCIsImljb25zIiwiZ2V0SWNvbiIsImlkIiwicHJlZml4IiwiaWNvbkNsYXNzIiwibGFiZWwiLCJnZXRJbWFnZSIsImltZyIsImRpc3BsYXlXZWF0aGVyIiwiZGF0YSIsInRleHRDb250ZW50Iiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb3VudHJ5IiwiY2xhc3NOYW1lIiwibG9hZEljb25zIiwiZmV0Y2giLCJqc29uIiwiYXBpS2V5IiwicmVxdWVzdFdlYXRoZXIiLCJ1bml0cyIsInJlc3BvbnNlIiwid2VhdGhlckRhdGEiLCJ3ZWF0aGVyIiwiY29kIiwic3lzIiwiTWF0aCIsInJvdW5kIiwibWFpbiIsImZlZWxzX2xpa2UiLCJ0ZW1wX21pbiIsInRlbXBfbWF4Iiwic3BlZWQiLCJidXR0b24iLCJpbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2YWx1ZSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiY2xpY2siXSwic291cmNlUm9vdCI6IiJ9