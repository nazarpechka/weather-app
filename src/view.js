const body = document.querySelector('body');
const temp = document.querySelector('#temp');
const city = document.querySelector('#city');

function displayWeather(data) {
  body.style.backgroundImage = 'url("img/cloudy.jpg")';
  temp.textContent = `${data.temp}°`;
  city.textContent = data.city;
}

export default displayWeather;
