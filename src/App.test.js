import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import {Provider} from 'react-redux';
import store from './configureStore';

import Dashboard from "./containers/Dashboard";

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const dashboard = <Provider store={store}><Dashboard/></Provider>;
  expect(wrapper.contains(dashboard)).toEqual(true);
})