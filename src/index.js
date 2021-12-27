import weatherData from './weather';
import { displayWeather, loadIcons } from './view';

const button = document.querySelector('#search');
const input = document.querySelector('input');
const mode = document.querySelector('#mode');

loadIcons();

button.addEventListener('click', () => {
  const data = weatherData(input.value, mode.checked ? 'metric' : 'imperial');
  data.then(console.log);
  data.then(displayWeather);
});

button.click();
