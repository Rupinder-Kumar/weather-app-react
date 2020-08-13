import {
  FETCH_CITIES,
  SELECT_CITY,
  RECEIVE_FORECASTS,
  SET_CURRENT_WEATHER
} from './types';


const initialState = {
    cities: [],
    forecasts: [],
    currentWeather: [],
    selectedCity: null
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_CITIES:
            return { ...state, cities: payload};
        case SELECT_CITY:
                return { ...state, selectedCity: payload};
        case RECEIVE_FORECASTS:
                return { ...state, forecasts: payload};
        case SET_CURRENT_WEATHER: 
                return { ...state, currentWeather: payload};
        default:
            return state;
    }
}

export default rootReducer;