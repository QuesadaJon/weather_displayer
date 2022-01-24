import React from 'react';
import PropTypes from 'prop-types';
import Forecast from './Forecast';

export default function ForecastList({ forecast, location }) {
  const forecastElements = forecast.map((daily) => (
    <li key={daily.dt}>
      <Forecast 
        time={daily.dt_txt}
        main={daily.main}
        weather={daily.weather}
        location={location}
      />
    </li>
  ));
  return <ul>{forecastElements}</ul>;
}

ForecastList.propTypes = {
  location: PropTypes.string.isRequired,
  forecast: PropTypes.arrayOf(
    PropTypes.shape({
      dt: PropTypes.string.isRequired,
      main: PropTypes.object.isRequired,
      weather: PropTypes.object.isRequired,
    })
  ).isRequired
};
