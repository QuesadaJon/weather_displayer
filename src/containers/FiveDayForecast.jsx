// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getFiveDayForecast } from '../services/openWeatherAPI';

// const FiveDayForecast = () => {
//   const { long, lat } = useParams();

//   useEffect(() => {
//     getFiveDayForecast(lat, long, process.env.REACT_APP_OPEN_WEATHER_API_KEY)
//       .then((data) => {
//         setTemperature(data.list);
//       });
//   }, []);

//   if(loading) return <h1>Loading...</h1>;
//   return 
// };

// export default FiveDayForecast;
