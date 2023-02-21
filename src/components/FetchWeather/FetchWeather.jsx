import React from 'react';
import PropTypes from 'prop-types';
import styles from './FetchWeather.css';
import CurrentForecast from '../CurrentForecast/CurrentForecast';
import FiveDayForecast from '../FiveDayForecast/FiveDayForecast';

export default function FetchWeather({
  setTemperature,
  setLocation,
  setIcon,
  setWeatherDescription,
  setForecast,
  setEmptyData,
  setLoading,
  setNewArray,
  loading   }) {
  
  if(loading) return <h1 className={styles.Loading}>Loading...</h1>;  
  return (
    <figure className={styles.FetchWeather}>
      <p>Choose Your Forecast!</p>
      <p>
        <CurrentForecast 
          setTemperature={setTemperature}
          setLocation={setLocation}
          setIcon={setIcon}
          setWeatherDescription={setWeatherDescription}
          setEmptyData={setEmptyData}
          setLoading={setLoading}
        />
        <FiveDayForecast
          setLocation={setLocation}
          setForecast={setForecast}
          setEmptyData={setEmptyData}
          setLoading={setLoading}
          setNewArray={setNewArray}
        />
      </p>
    </figure>
  );
}

FetchWeather.propTypes = {
  setTemperature: PropTypes.func.isRequired,
  setLocation: PropTypes.func.isRequired,
  setIcon: PropTypes.func.isRequired,
  setWeatherDescription: PropTypes.func.isRequired,
  setForecast:PropTypes.func.isRequired,
  setEmptyData: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  setNewArray: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
