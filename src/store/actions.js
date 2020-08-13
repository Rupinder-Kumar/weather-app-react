import {
  FETCH_CITIES,
  SELECT_CITY,
  RECEIVE_FORECASTS,
  SET_CURRENT_WEATHER
} from "./types";
import { result } from "../api/response";
import { extractCities, extractForecasts, extractCurrentWeather } from "../helper";

export const fetchCities = () => {
    return async (dispatch) => {
    const cities = extractCities(result);
    dispatch({ type: FETCH_CITIES, payload: cities });
  };
};

export const selectCity = (city) => {
    return async (dispatch) => {
        dispatch({type: SELECT_CITY, payload: city})
    }
}

export const setCurrentWeather = (city) => {
    const currentWeather = extractCurrentWeather(city, result);
    return async (dispatch) => {
        dispatch({type: SET_CURRENT_WEATHER, payload: currentWeather})
    }
}

export const fetchForeCasts = (city) => {
    const forecasts = extractForecasts(city, result)
    return async (dispatch) => {
        dispatch({ type: RECEIVE_FORECASTS, payload: forecasts })
    }
}