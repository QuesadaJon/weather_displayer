import React, { useState, useEffect } from 'react';

export default function CoordsPage() {
  const [long, setLong] = useState('current longitude');
  const [lat, setLat] = useState('current latitude');

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    setLong(pos.coords.longitude);
    setLat(pos.coords.latitude);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  return (
    <>
      <h1>LONGITUDE:{long}</h1>
      <h1>LATITUDE:{lat}</h1>
    </>
  );
}
