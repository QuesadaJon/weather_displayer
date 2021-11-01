export const getCurrentWeather = (lat, long, apiKey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`
  ).then((response) => response.json())
    .then(data => data);
};

export const getFiveDayForecast = (lat, long, apiKey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`
  )
    .then(res => res.json());
  
};
