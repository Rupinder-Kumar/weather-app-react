import React from 'react';
import { shallow } from 'enzyme';
import Select from "../components/Select";


describe('List tests', () => {

    it('renders select-items', () => {
      const cities =  ["Bengaluru", "Pune", "Mumbai","Hyderabad","Chennai"];

      const wrapper = shallow(<Select options={cities} />);
  
      // Expect the wrapper object to be defined
      expect(wrapper.find('.form-control')).toBeDefined();
      expect(wrapper.find('.single-item')).toHaveLength(cities.length);
    });
});