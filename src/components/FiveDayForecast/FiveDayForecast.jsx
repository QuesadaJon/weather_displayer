import React from 'react';
import PropTypes from 'prop-types';
import { getFiveDayForecast } from '../../services/openWeatherAPI';


export default function FiveDayForecast({
  setLocation,
  setForecast,
  setEmptyData, 
  setNewArray,
  setLoading
}) {
  
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    const long = pos.coords.longitude;
    const lat = pos.coords.latitude;
    setEmptyData(false);
    getFiveDayForecast(lat, long, process.env.REACT_APP_OPEN_WEATHER_API_KEY)
      .then((res) => {
        console.log(res.list);
        setNewArray(res.list);
        setLoading(false);
      });
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  function getData() {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  function convertDT() {
    
  }

  function FetchFiveDay() {
    getData();
    setLoading(true);
  }

  return<button onClick={FetchFiveDay}>Fetch Five Day Forecast</button>
  ;
}
FiveDayForecast.propTypes = {
  setLocation: PropTypes.func.isRequired,
  setForecast: PropTypes.func.isRequired,
  setEmptyData: PropTypes.func.isRequired,
  setNewArray: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};
