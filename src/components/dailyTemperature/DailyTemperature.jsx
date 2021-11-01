import React from 'react';
import PropTypes from 'prop-types';

const DailyTemperature = ({ temperature, location }) => (
  <p>It is currently {temperature}° in {location}</p>
);

DailyTemperature.propTypes = {
  temperature: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default DailyTemperature;
