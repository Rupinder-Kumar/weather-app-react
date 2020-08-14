import axios from "axios";
import {
  FETCH_CITIES,
  SELECT_CITY,
  RECEIVE_FORECASTS,
  SET_CURRENT_WEATHER,
} from "./types";
import {
  extractCities,
  extractForecasts,
  extractCurrentWeather,
} from "../helper";

export const fetchCities = () => {
  return async (dispatch) => {
    axios
      .get("http://localhost:3000/services/response.json")
      .then((res) => {
        const cities = extractCities(res.data);
        dispatch({ type: FETCH_CITIES, payload: cities });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const selectCity = (city) => {
  return async (dispatch) => {
    dispatch({ type: SELECT_CITY, payload: city });
  };
};

export const setCurrentWeather = (city) => {
  return async (dispatch) => {
    axios
      .get("http://localhost:3000/services/response.json")
      .then((res) => {
        const currentWeather = extractCurrentWeather(city, res.data);
        dispatch({ type: SET_CURRENT_WEATHER, payload: currentWeather });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchForeCasts = (city) => {
  return async (dispatch) => {
    axios
      .get("http://localhost:3000/services/response.json")
      .then((res) => {
        const forecasts = extractForecasts(city, res.data);
        dispatch({ type: RECEIVE_FORECASTS, payload: forecasts });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
