import React from 'react';

const Button = () => {
  function handleClick() {
    console.log('click!');
  }

  return <button onClick={handleClick}>This is the button</button>;
};

export default Button;
