const API_KEY = "eb3558734fb2dd3927f710a17a47a7b7";

function onGeoOk(postion) {
  const lat = postion.coords.latitude;
  const lon = postion.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:last-child");
      const temp = document.querySelector("#weather span:nth-child(2)");
      const city = document.querySelector("#weather span:first-child");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = `${Math.round(data.main.temp)}°`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
