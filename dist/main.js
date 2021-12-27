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
  wind.textContent = data.wind;
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
  console.log(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=${units}`);
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
    wind: `${Math.round(weather.wind.speed)} ${units === 'metric' ? 'meter/s' : 'miles/h'}`,
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
const mode = document.querySelector('#mode');
(0,_view__WEBPACK_IMPORTED_MODULE_1__.loadIcons)();
button.addEventListener('click', () => {
  const data = (0,_weather__WEBPACK_IMPORTED_MODULE_0__["default"])(input.value, mode.checked ? 'metric' : 'imperial');
  data.then(console.log);
  data.then(_view__WEBPACK_IMPORTED_MODULE_1__.displayWeather);
});
button.click();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YXBwLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wJyk7XG5jb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKTtcbmNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xuY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpY29uJyk7XG5jb25zdCBlcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcicpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtaWRpdHktdmFsdWUnKTtcbmNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZC12YWx1ZScpO1xuY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWxzTGlrZS12YWx1ZScpO1xuY29uc3QgdGVtcE1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wTWluLXZhbHVlJyk7XG5jb25zdCB0ZW1wTWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBNYXgtdmFsdWUnKTtcbmxldCBpY29ucztcblxuZnVuY3Rpb24gZ2V0SWNvbihpZCkge1xuICBjb25zdCBwcmVmaXggPSAnd2kgd2ktJztcbiAgbGV0IGljb25DbGFzcyA9IGljb25zW2lkXS5pY29uO1xuXG4gIGlmICghKGlkID4gNjk5ICYmIGlkIDwgODAwKSAmJiAhKGlkID4gODk5ICYmIGlkIDwgMTAwMCkpIHtcbiAgICBpY29uQ2xhc3MgPSBgZGF5LSR7aWNvbkNsYXNzfWA7XG4gIH1cblxuICBpY29uQ2xhc3MgPSBwcmVmaXggKyBpY29uQ2xhc3M7XG4gIHJldHVybiBbaWNvbkNsYXNzLCBpY29uc1tpZF0ubGFiZWxdO1xufVxuXG5mdW5jdGlvbiBnZXRJbWFnZShpZCkge1xuICBsZXQgaW1nO1xuICBpZiAoaWQgPCA2MDApIHtcbiAgICBpbWcgPSAncmFpbnkuanBnJztcbiAgfSBlbHNlIGlmIChpZCA8IDcwMCkge1xuICAgIGltZyA9ICdzbm93LmpwZyc7XG4gIH0gZWxzZSBpZiAoaWQgPCA4MDApIHtcbiAgICBpbWcgPSAnZm9nLmpwZyc7XG4gIH0gZWxzZSBpZiAoaWQgPT09IDgwMCkge1xuICAgIGltZyA9ICdjbGVhci5qcGcnO1xuICB9IGVsc2Uge1xuICAgIGltZyA9ICdjbG91ZHkuanBnJztcbiAgfVxuXG4gIHJldHVybiBgdXJsKFwiaW1nLyR7aW1nfVwiKWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5V2VhdGhlcihkYXRhKSB7XG4gIGlmICghZGF0YSkge1xuICAgIGVycm9yLnRleHRDb250ZW50ID0gJ0NpdHkgbm90IGZvdW5kISc7XG4gICAgcmV0dXJuO1xuICB9XG4gIGVycm9yLnRleHRDb250ZW50ID0gJyc7XG5cbiAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBnZXRJbWFnZShkYXRhLmlkKTtcbiAgdGVtcC50ZXh0Q29udGVudCA9IGAke2RhdGEudGVtcH3CsGA7XG4gIGNpdHkudGV4dENvbnRlbnQgPSBgJHtkYXRhLmNpdHl9LCAke2RhdGEuY291bnRyeX1gO1xuICBbaWNvbi5jbGFzc05hbWUsIG5hbWUudGV4dENvbnRlbnRdID0gZ2V0SWNvbihkYXRhLmlkKTtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtkYXRhLmh1bWlkaXR5fSVgO1xuICB3aW5kLnRleHRDb250ZW50ID0gZGF0YS53aW5kO1xuICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtkYXRhLmZlZWxzTGlrZX3CsGA7XG4gIHRlbXBNaW4udGV4dENvbnRlbnQgPSBgJHtkYXRhLnRlbXBNaW59wrBgO1xuICB0ZW1wTWF4LnRleHRDb250ZW50ID0gYCR7ZGF0YS50ZW1wTWF4fcKwYDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRJY29ucygpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdpY29ucy5qc29uJyk7XG4gIGljb25zID0gYXdhaXQgZGF0YS5qc29uKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlXZWF0aGVyO1xuIiwiY29uc3QgYXBpS2V5ID0gJ2NmYzE4NmQzNjBiNjE4M2QyZWZhMDVkZjBlYjM4NDk3JztcblxuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdFdlYXRoZXIoY2l0eSwgdW5pdHMpIHtcbiAgY29uc29sZS5sb2coXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZBUFBJRD0ke2FwaUtleX0mdW5pdHM9JHt1bml0c31gXG4gICk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZBUFBJRD0ke2FwaUtleX0mdW5pdHM9JHt1bml0c31gXG4gICk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5hc3luYyBmdW5jdGlvbiB3ZWF0aGVyRGF0YShjaXR5ID0gJ0t5aXYnLCB1bml0cyA9ICdtZXRyaWMnKSB7XG4gIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCByZXF1ZXN0V2VhdGhlcihjaXR5LCB1bml0cyk7XG4gIGlmICh3ZWF0aGVyLmNvZCAhPT0gMjAwKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHtcbiAgICBjaXR5OiB3ZWF0aGVyLm5hbWUsXG4gICAgY291bnRyeTogd2VhdGhlci5zeXMuY291bnRyeSxcbiAgICB0ZW1wOiBNYXRoLnJvdW5kKHdlYXRoZXIubWFpbi50ZW1wKSxcbiAgICBmZWVsc0xpa2U6IE1hdGgucm91bmQod2VhdGhlci5tYWluLmZlZWxzX2xpa2UpLFxuICAgIHRlbXBNaW46IE1hdGgucm91bmQod2VhdGhlci5tYWluLnRlbXBfbWluKSxcbiAgICB0ZW1wTWF4OiBNYXRoLnJvdW5kKHdlYXRoZXIubWFpbi50ZW1wX21heCksXG4gICAgaHVtaWRpdHk6IHdlYXRoZXIubWFpbi5odW1pZGl0eSxcbiAgICB3aW5kOiBgJHtNYXRoLnJvdW5kKHdlYXRoZXIud2luZC5zcGVlZCl9ICR7dW5pdHMgPT09ICdtZXRyaWMnID8gJ21ldGVyL3MnIDogJ21pbGVzL2gnfWAsXG4gICAgaWQ6IHdlYXRoZXIud2VhdGhlclswXS5pZCxcbiAgICBuYW1lOiB3ZWF0aGVyLndlYXRoZXJbMF0ubWFpbixcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2VhdGhlckRhdGE7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB3ZWF0aGVyRGF0YSBmcm9tICcuL3dlYXRoZXInO1xuaW1wb3J0IHsgZGlzcGxheVdlYXRoZXIsIGxvYWRJY29ucyB9IGZyb20gJy4vdmlldyc7XG5cbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gnKTtcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbmNvbnN0IG1vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kZScpO1xuXG5sb2FkSWNvbnMoKTtcblxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBkYXRhID0gd2VhdGhlckRhdGEoaW5wdXQudmFsdWUsIG1vZGUuY2hlY2tlZCA/ICdtZXRyaWMnIDogJ2ltcGVyaWFsJyk7XG4gIGRhdGEudGhlbihjb25zb2xlLmxvZyk7XG4gIGRhdGEudGhlbihkaXNwbGF5V2VhdGhlcik7XG59KTtcblxuYnV0dG9uLmNsaWNrKCk7XG4iXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlbXAiLCJjaXR5IiwibmFtZSIsImljb24iLCJlcnJvciIsImh1bWlkaXR5Iiwid2luZCIsImZlZWxzTGlrZSIsInRlbXBNaW4iLCJ0ZW1wTWF4IiwiaWNvbnMiLCJnZXRJY29uIiwiaWQiLCJwcmVmaXgiLCJpY29uQ2xhc3MiLCJsYWJlbCIsImdldEltYWdlIiwiaW1nIiwiZGlzcGxheVdlYXRoZXIiLCJkYXRhIiwidGV4dENvbnRlbnQiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImNvdW50cnkiLCJjbGFzc05hbWUiLCJsb2FkSWNvbnMiLCJmZXRjaCIsImpzb24iLCJhcGlLZXkiLCJyZXF1ZXN0V2VhdGhlciIsInVuaXRzIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwid2VhdGhlckRhdGEiLCJ3ZWF0aGVyIiwiY29kIiwic3lzIiwiTWF0aCIsInJvdW5kIiwibWFpbiIsImZlZWxzX2xpa2UiLCJ0ZW1wX21pbiIsInRlbXBfbWF4Iiwic3BlZWQiLCJidXR0b24iLCJpbnB1dCIsIm1vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwidmFsdWUiLCJjaGVja2VkIiwidGhlbiIsImNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==