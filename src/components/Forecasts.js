import React from 'react';
import { toCelsius, convertDate } from "../helper";


const Forecasts = (props) => {
    const {forecasts} = props;
    return (
      <ul className="forecasts">
        {forecasts.map((forecast, i) => {

          const weather = [
              <div key={i}>
              <p>Date: <b>{convertDate(forecast.date)}</b> </p>
              <p>Weather Condition: <b>{forecast.text}</b></p>
              <p>High: <b>{toCelsius(forecast.high)}</b>, Low: <b>{toCelsius(forecast.low)}</b></p>
              </div>
          ]
          return (<li key={i}>{weather}</li>);
        })}
      </ul>
    );
}

export default Forecasts;