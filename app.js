const apiKey = "19fb28e9ab3fff63ad622debad176e1c";
let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");
let info = document.querySelector(".weather")
let error = document.querySelector(".error");

async function checkWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );

  if(response.status == 404){
    error.style.display = "block";
    info.style.display = "none";
  }else{
    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    }else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }
  
  
    info.style.display = "block";
    error.style.display = "none"
  }
  
  
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
