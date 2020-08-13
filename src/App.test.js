import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('starts with a count of 0', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('p').text();
    // expect(text).toEqual('Count: 0');
  });
});

// import React from 'react';
// import { shallow } from 'enzyme';
// import App from './App';
// import { render } from '@testing-library/react';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// describe('First React component test with Enzyme', () => {
//   it('renders without crashing', () => {
//      shallow(<App />);
//    });
// });

