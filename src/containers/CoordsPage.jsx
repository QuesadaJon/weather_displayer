import React, { useState } from 'react';
import DailyTemperature from '../components/dailyTemperature/DailyTemperature';
import FetchWeather from '../components/FetchWeather/FetchWeather';
import styles from '../containers/CoordsPage.css';

const CoordsPage = () => {
  const [emptyData, setEmptyData] = useState(true);
  const [temperature, setTemperature] = useState(0);
  const [location, setLocation] = useState('');
  const [icon, setIcon] = useState('');
  const [weatherDescription, setWeatherDescription] = useState('');

  if(emptyData) return <FetchWeather 
    setTemperature={setTemperature}
    setLocation={setLocation}
    setIcon={setIcon}
    setWeatherDescription={setWeatherDescription}
    setEmptyData={setEmptyData}
  />;
  return  <DailyTemperature 
    temp={temperature}
    location={location}
    icon={icon}
    description={weatherDescription}
  />;
};

export default CoordsPage;
