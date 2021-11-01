import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <div>
      <button onClick={() => 
        props.findCoords()
      }>
        Get your coordinates
      </button>
    </div>
  );
}

Button.propTypes = {
  findCoords: PropTypes.func.isRequired,
};

export default Button;
