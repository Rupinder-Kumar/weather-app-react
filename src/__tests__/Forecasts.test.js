import React from 'react';
import { shallow } from 'enzyme';
import Forecasts from "../components/Forecasts";


describe('List tests', () => {

    it('renders list-items', () => {
      const forecasts =  [
        {
            "day": "Thu",
            "date": 1597257000,
            "low": 72,
            "high": 76,
            "text": "Scattered Thunderstorms",
            "code": 47
        },
        {
            "day": "Fri",
            "date": 1597343400,
            "low": 71,
            "high": 74,
            "text": "Scattered Thunderstorms",
            "code": 47
        },
        {
            "day": "Sat",
            "date": 1597429800,
            "low": 71,
            "high": 74,
            "text": "Showers",
            "code": 11
        },
        {
            "day": "Sun",
            "date": 1597516200,
            "low": 71,
            "high": 76,
            "text": "Showers",
            "code": 11
        },
        {
            "day": "Mon",
            "date": 1597602600,
            "low": 72,
            "high": 81,
            "text": "Cloudy",
            "code": 26
        },
        {
            "day": "Tue",
            "date": 1597689000,
            "low": 72,
            "high": 83,
            "text": "Cloudy",
            "code": 26
        },
        {
            "day": "Wed",
            "date": 1597775400,
            "low": 72,
            "high": 82,
            "text": "Scattered Thunderstorms",
            "code": 47
        },
        {
            "day": "Thu",
            "date": 1597861800,
            "low": 73,
            "high": 80,
            "text": "Cloudy",
            "code": 26
        },
        {
            "day": "Fri",
            "date": 1597948200,
            "low": 73,
            "high": 81,
            "text": "Scattered Thunderstorms",
            "code": 47
        },
        {
            "day": "Sat",
            "date": 1598034600,
            "low": 72,
            "high": 83,
            "text": "Scattered Thunderstorms",
            "code": 47
        }
    ];

      const wrapper = shallow(<Forecasts forecasts={forecasts} />);
  
      // Expect the wrapper object to be defined
      expect(wrapper.find('.forecasts')).toBeDefined();
      expect(wrapper.find('.forecast-item')).toHaveLength(forecasts.length);
    });
});