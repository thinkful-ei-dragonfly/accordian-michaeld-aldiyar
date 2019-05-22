import React from 'react';
import ReactDOM from 'react-dom';
import Accordian from './Accordian';

describe(`Accordian Component`, () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordian />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})