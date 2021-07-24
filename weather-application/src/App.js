import React, { useState } from 'react';

function App() {
  const api_key = process.env.REACT_APP_WEATHER_API_KEY;
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${api_key}`)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        setQuery('');
        setWeather(result);
      }).catch(error => {
        alert(error.message);
        //console.log(error);
      });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Nevember", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  }

  return (
    // if temperature is over 16°C show warm
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app' }>
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Enter location.." 
                 onChange={event => setQuery(event.target.value)} value={query} onKeyPress={search}/>
        </div>
        {/* Get these fields from json result {weather.name}, {weather.sys.country}*/}
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">{weather.main.temp}°C</div>
            <div className="weather"><h6>feels like</h6>{weather.main.feels_like}°C</div>
            <div className="weather"><br/>{weather.weather[0].main}</div>
            <div className="description">
              <h4>{weather.weather[0].description}</h4>
            </div>
            <div className="information">
              <br />
              <h4>Wind speed: {weather.wind.speed} km/h</h4>
              <h5>Geolocation: lon:{weather.coord.lon} lat:{weather.coord.lat}</h5>
              </div>
            </div>          
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;