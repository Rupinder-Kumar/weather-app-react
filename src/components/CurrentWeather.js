import React from "react";
import { toCelsius, convertDate } from "../helper";
import "./currentWeather.css";

const CurrentWeather = (props) => {
  const { city, weather } = props;

  const temperature =
    weather.length &&
    weather.map((weather, index) => {
      return (
        <div key={index}>
          <h5 className="current-weather">
            Weather Condition{" "}
            <span>
              {weather.current_observation.condition.text},{" "}
              {toCelsius(weather.current_observation.condition.temperature)}
            </span>
          </h5>
          <p>{convertDate(weather.current_observation.pubDate)}</p>
        </div>
      );
    });
  return (
    <>
      <h1>{city}</h1>
      {temperature}
    </>
  );
};

export default CurrentWeather;
