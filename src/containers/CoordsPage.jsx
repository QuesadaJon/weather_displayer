import React, { useState, useEffect } from 'react';
import DailyTemperature from '../components/dailyTemperature/DailyTemperature';
import { getCurrentWeather } from '../services/openWeatherAPI';

const CoordsPage = () => {
  const [loading, setLoading] = useState(true);
  const [temperature, setTemperature] = useState('');
  const [location, setLocation] = useState('');

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    const long = pos.coords.longitude;
    const lat = pos.coords.latitude;
    setLoading(false);
    getCurrentWeather(lat, long, process.env.REACT_APP_OPEN_WEATHER_API_KEY)
      .then((data) => {
        setTemperature(data.main.temp);
        setLocation(data.name);
      });
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  if(loading) return <h1>Loading...</h1>;
  return  <DailyTemperature temperature={temperature} location={location} />;  
};

export default CoordsPage;
