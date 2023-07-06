
const search = document.querySelector('#search');
const send = document.querySelector('.send')

export async function changeWeatherData() {
  send.addEventListener('click', () => {
   getWeatherData(search.value);
   gatherData(search.value);
   dailyData(search.value);
  })
}

export async function defaultWeatherData() {
  getWeatherData('toledo');
  gatherData('toledo');
  dailyData('toledo')
}


 export async function getWeatherData(city) {
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=868de8a34c164de5981150921232206&q=${city}&days=7` , {mode: 'cors'})
   let weatherData = await response.json();
  console.log(weatherData);
  return weatherData;
}

export async function gatherData(city) {
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=868de8a34c164de5981150921232206&q=${city}&days=7` , {mode: 'cors'})
  let weatherData = await response.json();
  let weatherObj = {
    weatherData
  }
  const sky = document.querySelector('.sky');
  const location = document.querySelector('.city');
  const time = document.querySelector('.time');
  const temp = document.querySelector('.current-temp');
  const icon = document.querySelector('.icon');
  const feel = document.querySelector('.feel');
  const humid = document.querySelector('.humid');
  const rain = document.querySelector('.precip');
  const wind = document.querySelector('.wind-spd');
  sky.textContent = weatherObj.weatherData.current.condition.text;
  location.textContent = weatherObj.weatherData.location.name;
  time.textContent = weatherObj.weatherData.location.localtime;
  temp.textContent = weatherObj.weatherData.current.temp_f + 'F';
  icon.src = 'https:' + weatherObj.weatherData.current.condition.icon;
  feel.textContent = weatherObj.weatherData.current.feelslike_f + 'F';
  humid.textContent = weatherObj.weatherData.current.humidity + '%';
  rain.textContent = weatherObj.weatherData.forecast.forecastday[0].day.daily_chance_of_rain + '%';
  wind.textContent = weatherObj.weatherData.current.wind_mph + 'mph';
  console.log(weatherObj);
}

async function dailyData(city) {
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=868de8a34c164de5981150921232206&q=${city}&days=7` , {mode: 'cors'})
  let dailyData = await response.json();
  let dailyDataObj = {
    dailyData
  }
  const dayOne = document.querySelector('.dayOne')
  const dayTwo = document.querySelector('.dayTwo')
  const dayThree = document.querySelector('.dayThree')
  const dailyHigh1 = document.querySelector('.daily-high1')
  const dailyHigh2 = document.querySelector('.daily-high2')
  const dailyHigh3 = document.querySelector('.daily-high3')
  const dailyLow1 = document.querySelector('.daily-low1')
  const dailyLow2 = document.querySelector('.daily-low2')
  const dailyLow3 = document.querySelector('.daily-low3')
  const weatherIcon1 = document.querySelector('.weather-icon1')
  const weatherIcon2 = document.querySelector('.weather-icon2')
  const weatherIcon3 = document.querySelector('.weather-icon3')
  weatherIcon1.src = 'https:' + dailyDataObj.dailyData.forecast.forecastday[0].day.condition.icon;
  weatherIcon2.src = 'https:' + dailyDataObj.dailyData.forecast.forecastday[1].day.condition.icon;
  weatherIcon3.src = 'https:' + dailyDataObj.dailyData.forecast.forecastday[2].day.condition.icon;
  dailyHigh1.textContent = dailyDataObj.dailyData.forecast.forecastday[0].day.maxtemp_f + 'F';
  dailyHigh2.textContent = dailyDataObj.dailyData.forecast.forecastday[1].day.maxtemp_f + 'F';
  dailyHigh3.textContent = dailyDataObj.dailyData.forecast.forecastday[2].day.maxtemp_f + 'F';
  dailyLow1.textContent = dailyDataObj.dailyData.forecast.forecastday[0].day.mintemp_f + 'F';
  dailyLow2.textContent = dailyDataObj.dailyData.forecast.forecastday[1].day.mintemp_f + 'F';
  dailyLow3.textContent = dailyDataObj.dailyData.forecast.forecastday[2].day.mintemp_f + 'F';
  dayOne.textContent = dailyDataObj.dailyData.forecast.forecastday[0].date;
  dayTwo.textContent = dailyDataObj.dailyData.forecast.forecastday[1].date;
  dayThree.textContent = dailyDataObj.dailyData.forecast.forecastday[2].date;
  console.log(dailyDataObj);
}
