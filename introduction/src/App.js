import React, { useState, useEffect} from 'react'
//import './App.css'
import axios from 'axios'
import Information from './Information'

const Weather = ({ weather }) => {
  console.log(weather)
  if (!weather) {
    return null
  }

  return (
    <div>
      <h3 className="wlabel">Weather in Helsinki Finland</h3>
      <div className="wlabel2">
         <p><strong>Temperature: </strong> {weather.temperature} °C </p>
         <p><strong>Feels like: </strong> {weather.temperature} °C </p>
      </div>
      <img className="weather" src={weather.weather_icons} alt={weather.weather_descriptions[0]} />
      <div className="wlabel2">
        <strong>Wind:</strong> {weather.wind_speed} mph direction {weather.wind_dir}
      </div>
    </div>
  )
}

const Country = (country) => {
  //console.log(country)
  const [weather, setWeather] = useState(0)
  const api_key = process.env.REACT_APP_WEATHER_API_KEY
  const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=Helsinki`

  useEffect(() => {
    axios.get(url).then(response => {
      setWeather(response.data.current)
    })
  })
  
  return(
    <div>
      <div>
        <Weather weather={weather} />
      </div>
    </div>
  )
}


const App = (country) => {
    return (
      <div>
        <Information />
        <Country country="Finland"/> 
      </div>
    )
}

export default App