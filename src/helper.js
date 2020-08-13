import moment from "moment";
export const extractCities = (data) => {
  return data.map((item) => item.location.city);
};

export const extractForecasts = (city, data) => {
  const forecasts = data.filter((item) => {
    if (item.location.city === city) {
      return item.forecasts;
    }
  });
  return forecasts[0].forecasts;
};

export const extractCurrentWeather = (city, data) => {
  return data.filter((item) => item.location.city === city);
};

export const toCelsius = (f) => {
  return Math.round((5 / 9) * (f - 32));
};

export const convertDate = (ts) => {
  var time = moment.unix(ts).format("ll");
  return time;
};

export const findFrequent = (data) => {
  const maxValue = data
    .sort(
      (previous, current) =>
        data.filter((item) => item === previous).length -
        data.filter((item) => item === current).length
    )
    .pop();
  return maxValue;
};
