import React from 'react';
import ReactDOM from 'react-dom';
import Accordian from './Accordion';
import renderer from 'react-test-renderer';
import { exportAllDeclaration } from '@babel/types';

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

describe(`Accordian Component`, () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordian />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders empty <li>', () => {
    const tree = renderer.create(<Accordian />).toJSON()
    exportAllDeclaration(tree).toMatchSnaposhot()
  })
})