import React, { useState } from 'react';
import DailyTemperature from '../components/dailyTemperature/DailyTemperature';
import FetchWeather from '../components/FetchWeather/FetchWeather';
import ForecastList from '../components/ForecastList/ForecastList';
import styles from '../containers/CoordsPage.css';

const CoordsPage = () => {
  const [emptyData, setEmptyData] = useState(true);
  const [temperature, setTemperature] = useState(0);
  const [location, setLocation] = useState('');
  const [icon, setIcon] = useState('');
  const [weatherDescription, setWeatherDescription] = useState('');
  const [forecast, setForecast] = useState({});
  const [loading, setLoading] = useState(false);

  if(emptyData) return <FetchWeather 
    setTemperature={setTemperature}
    setLocation={setLocation}
    setIcon={setIcon}
    setWeatherDescription={setWeatherDescription}
    setEmptyData={setEmptyData}
    setForecast={setForecast}
    setLoading={setLoading}
    loading={loading}
  />;
  if (Object.entries(forecast).length === 0) return <DailyTemperature 
    temp={temperature}
    location={location}
    icon={icon}
    description={weatherDescription}
  />;
  return <ForecastList forecast={forecast} location={location} />;
};

export default CoordsPage;
