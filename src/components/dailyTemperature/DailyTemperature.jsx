import React from 'react';
import PropTypes from 'prop-types';
import styles from './DailyTemperature.css';

const DailyTemperature = ({  temp, location, icon, description }) => (
  <figure className={styles.Forecast} data-testid="weather">
    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={icon}/>
    <figcaption>
      <p>It is currently {description}</p>
      <p>{temp}°F in {location}</p>
    </figcaption>
  </figure>
);

DailyTemperature.propTypes = {
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
};

export default DailyTemperature;
