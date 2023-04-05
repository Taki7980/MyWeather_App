/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import './App.css';
import Forcast from './components/Forcast';
import Inputs from './components/Inputs';
import TopNavbar from './components/TopNavbar';
import TemparatureAndDetails from './components/TemparatureAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';
import getFormattedWeatherData from './services/weatherService';




function App() {

  const [query, setQuery] = useState({ q: 'kyoto' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeatherData = async () => {
      await getFormattedWeatherData({ ...query, ...units }).then(data => {
        setWeather(data)
      })
    }

    fetchWeatherData();
  }, [query, units])

  
  return (
    <>
      <div className={`lg:mx-auto lg:max-w-screen-md lg:my-10 lg:py-5 lg:px-32 bg-gradient-to-br from-cyan-600 to to-blue-500 h-fit shadow-xl shadow-gray-400 sm:h-[100%] sm:w-[auto] sm:m-0 `}>
        {/* <TopButtons setQuery={setQuery} /> */}
        <TopNavbar setQuery={setQuery}/>
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        {weather && (
          <div>
            <TimeAndLocation weather={weather} />
            <TemparatureAndDetails weather={weather} />
            <Forcast title="Hourly Weather Forcast" items={weather.hourly} />
            <Forcast title="Daily Weather Forcast" items={weather.daily} />
          </div>
        )}

      </div>
    </>
  );

}

export default App;

