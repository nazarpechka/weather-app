import weatherData from './weather';
import displayWeather from './view';

const button = document.querySelector('#search');
const input = document.querySelector('input');

button.addEventListener('click', () => {
  const data = weatherData(input.value);
  data.then(console.log);
  data.then(displayWeather);
});
