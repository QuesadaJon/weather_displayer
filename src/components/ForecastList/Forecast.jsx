import React from 'react';
import PropTypes from 'prop-types';

export default function Forecast({ location, main, weather, time }) {
  return <figure>
    <img
      src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
      alt={weather[0].icon}
    />
    <figcaption>
      <p>{time}</p>
      <p>{weather[0].description}</p>
      <p>{main.temp} in {location}</p>
    </figcaption>
  </figure>;
}

Forecast.propTypes = {
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  main: PropTypes.object.isRequired,
  weather: PropTypes.array.isRequired,
};
