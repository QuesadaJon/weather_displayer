import React from 'react';
import PropTypes from 'prop-types';

const DailyTemperature = ({  temp, name, icon, description }) => (
  <figure>
    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={icon}/>
    <figcaption>
      <p>It is currently {description}</p>
      <p>{temp}°F in {name}</p>
    </figcaption>
  </figure>
);

DailyTemperature.propTypes = {
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default DailyTemperature;

