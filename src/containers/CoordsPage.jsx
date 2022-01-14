import React, { useState, useEffect } from 'react';
import DailyTemperature from '../components/dailyTemperature/DailyTemperature';
import FetchWeather from '../components/FetchWeather/FetchWeather';
import { getCurrentWeather } from '../services/openWeatherAPI';
import styles from'./CoordsPage.css';

const CoordsPage = () => {
  const [emptyData, setEmptyData] = useState(true);
  const [temperature, setTemperature] = useState(0);
  const [location, setLocation] = useState('');
  const [icon, setIcon] = useState('');
  const [weatherDescription, setWeatherDescription] = useState('');
  const [childData, setChildData] = useState({});

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    const long = pos.coords.longitude;
    const lat = pos.coords.latitude;
    setEmptyData(false);
    getCurrentWeather(lat, long, process.env.REACT_APP_OPEN_WEATHER_API_KEY)
      .then(({ main, name, weather }) => {
        setTemperature(main.temp);
        setLocation(name);
        setIcon(weather[0].icon);
        setWeatherDescription(weather[0].description);
      });
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  function getData() {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  function onClick() {
    getData().then(setChildData);
    console.log(childData);
  }

  
  

  if(emptyData) return <button onClick={onClick}>Fetch Weather</button>;
  return  <DailyTemperature 
    temp={temperature}
    name={location}
    icon={icon}
    description={weatherDescription}
  />;
};

export default CoordsPage;
