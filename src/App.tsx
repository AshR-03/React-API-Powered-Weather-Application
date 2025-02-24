import { use, useEffect, useState } from "react"
import Header from "./components/Header"
import Search from "./components/Search"
import WeatherStats from "./components/WeatherStats"

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [maxTemperatures, setMaxTemperatures] = useState([]);
  const [minTemperatures, setMinTemperatures] = useState([]);
  const [dates, setDates] = useState([]);
  const [precipitationProbability, setprecipitationProbability] = useState([]);

  const fetchGeoLocation = async () => {
    try {
      const endpoint = `https://geocoding-api.open-meteo.com/v1/search?name=${searchTerm}`;
      const response = await fetch(endpoint);
      const data = await response.json();
      const { latitude, longitude, name, country } = data.results[0];

      const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Europe/Berlin`)
      const weatherData = await weatherResponse.json();
      console.log(weatherData)

      setCountry(country)
      setCity(name)
      setMaxTemperatures(weatherData.daily.temperature_2m_max)
      setMinTemperatures(weatherData.daily.temperature_2m_min)
      setDates(weatherData.daily.time)
      setprecipitationProbability(weatherData.daily.precipitation_probability_max)

    } catch(error) {
      console.error(error)
    }
  }


  return (
    <main>
      <Header/> 
      <Search onSearch={() => fetchGeoLocation()} setSearchTerm={(term) => setSearchTerm(term)}/>
        
      {!(country.length > 0) && 
      <div className="text-2xl font-bold text-center"> Begin your search for weather. </div>
      }

      {(country.length > 0) && ( <>
        <div className="text-2xl font-bold text-center"> This Week in {city}, {country} </div>
        <WeatherStats maxT={maxTemperatures} minT={minTemperatures} dates={dates} precipitation={precipitationProbability}/>
        </>
      )
      }
    </main>
  )
}

export default App
