import React from 'react';
import PropTypes from 'prop-types';
import { getCurrentWeather } from '../../services/openWeatherAPI';

export default function FetchWeather({
  setTemperature,
  setLocation,
  setIcon,
  setWeatherDescription,
  setEmptyData }) {
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
    getData();
  }

  return (
    <div>
      <button onClick={onClick}>Fetch Weather</button>
    </div>
  );
}

FetchWeather.propTypes = {
  setTemperature: PropTypes.func.isRequired,
  setLocation: PropTypes.func.isRequired,
  setIcon: PropTypes.func.isRequired,
  setWeatherDescription: PropTypes.func.isRequired,
  setEmptyData: PropTypes.func.isRequired,
};
