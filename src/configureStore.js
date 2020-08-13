import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './store/reducer';

const initialState = {
  cities: [],
  forecasts: [],
  selectedCity: null,
  currentWeather: [],
}
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware    
    )
  );

  export default store;