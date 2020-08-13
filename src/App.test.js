import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Dashboard from "./containers/Dashboard";

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const dashboard = <Dashboard/>;
  expect(wrapper.contains(dashboard)).toEqual(true);
})