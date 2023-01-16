/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
// import logo from './logo.svg';
// import getWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';
import './App.css';
import Forcast from './components/Forcast';
import Inputs from './components/Inputs';
import TemparatureAndDetails from './components/TemparatureAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';
import getFormattedWeatherData from './services/weatherService';
// import UilReact from '@iconscout/react-unicons/icons/uil-react'



function App() {

  const [query, setQuery] = useState({ q: 'kyoto' })
  const [units, setUnits] = useState('metric')
  // const [units1, setUnits1] = useState('impirial')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeatherData = async () => {
      await getFormattedWeatherData({ ...query, ...units }).then(data => {
        setWeather(data)
      })
    }

    fetchWeatherData();
  }, [query, units])

  const formatBackground = () => {
    if (!weather) {
      return ' from-cyan-600 to to-blue-500';
      const threshold = units === 'metric' ? 20 : 60;
      if (weather.temp <= threshold) {
        return 'from-cyan-600 to to-blue-500'
      }
    }
    else {
      return 'from-yellow-700 to-orange-700'
    }

  }


  return (
    <>
      <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br ${formatBackground()} h-fit shadow-xl shadow-gray-400`}>
        <TopButtons setQuery={setQuery} />
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

