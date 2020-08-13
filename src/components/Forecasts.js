import React from 'react';
import { toCelsius, convertDate, findFrequent } from "../helper";


const Forecasts = (props) => {
    const {forecasts} = props;
    
    const averageHigh = forecasts.reduce((accumulator, temperature) => {return accumulator + temperature.high },0);
    const averageLow = forecasts.reduce((accumulator, temperature) => {return accumulator + temperature.low },0);

    const highs = forecasts.map((forecast) => forecast.high);
    const lows = forecasts.map((forecast) => forecast.low);

    return (
        <>
        <p>Average High: <b>{toCelsius(averageHigh/forecasts.length).toString()}</b>, Average Low: <b>{toCelsius(averageLow/forecasts.length).toString()}</b> </p>
        <hr/>
        <p>Middle High: <b>{toCelsius(highs[Math.round((highs.length - 1) / 2)]).toString()}</b>,  Middle Low: <b>{toCelsius(lows[Math.round((lows.length - 1) / 2)]).toString()}</b> </p>
        <hr/>
        <p>Frequent High: <b>{toCelsius(findFrequent(highs)).toString()}</b>, Frequent Low: <b>{toCelsius(findFrequent(lows)).toString()}</b> </p>
        <hr/>
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
      </>
    );
}

export default Forecasts;