const weather = document.querySelector(".js-weather");
const weatherName = document.querySelector(".weather-name");

// openweathermap API
// const API_KEY = "6aed41e5b3ce963021d620ce9e1df8f1";

// SK open API
const API_KEY = "l7xxcb78dbf0928a4c2192bca17d66625278";
const COORDS = "coords";

function getWeatherIcon(sky_code) {
  if (sky_code === "SKY_O07" || sky_code === "SKY_O03") {
    return `<i class="fas fa-cloud"></i>`;
  } else if (sky_code === "SKY_O01") {
    return `<i class="far fa-sun"></i>`;
  } else if (sky_code === "SKY_O02") {
    return `<i class="fas fa-cloud-sun"></i>`;
  } else if (sky_code === "SKY_O04" || sky_code === "SKY_O08") {
    return `<i class="fas fa-cloud-rain"></i>`;
  } else if (sky_code === "SKY_O05" || sky_code === "SKY_O09") {
    return `<i class="far fa-snowflake"></i>`;
  } else if (sky_code === "SKY_O06" || sky_code === "SKY_O10") {
    return `<i class="fas fa-umbrella"></i> <span> / </span> <i class="far fa-snowflake"></i>`;
  } else {
    return `<i class="fas fa-bolt"></i>`;
  }
}

function getWeather(lat, lon) {
  //   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric
  //         `)
  //     .then(function(response) {
  //       return response.json();
  //     })
  //     .then(function(json) {
  //       const temperature = json.main.temp;
  //       const place = json.name;
  //       const nation = json.sys.country;
  //       weather.innerText = `${temperature}°C @ ${place}, ${nation}`;
  //     });
  fetch(`https://apis.openapi.sk.com/weather/current/hourly?appKey=${API_KEY}&version=1&lat=${lat}&lon=${lon}
    `)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const temperature = json.weather.hourly[0].temperature.tc;
      const place = json.weather.hourly[0].grid.county;
      const weatherCode = json.weather.hourly[0].sky.code;
      weatherName.innerHTML = getWeatherIcon(weatherCode);
      weather.innerText = `${temperature}°C @ ${place}`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("Geo location error");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (!loadedCoords) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
