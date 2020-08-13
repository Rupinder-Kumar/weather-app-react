import React from 'react';
import {Provider} from 'react-redux';
import store from './configureStore';
import Dashboard from "./containers/Dashboard";

const App = () => {
  return(
  <Provider store={store}>
    <Dashboard/>
  </Provider>
  )
}

export default App;
