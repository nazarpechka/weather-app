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

export function displayWeather(data) {
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

export async function loadIcons() {
  const data = await fetch('icons.json');
  icons = await data.json();
}

export default displayWeather;
