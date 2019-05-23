import React from 'react';
import ReactDOM from 'react-dom';
import Accordian from './Accordion';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

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
    ReactDOM.render(<Accordian sections={sections} />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders empty <li>', () => {
    const tree = renderer.create(<Accordian />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('component renders no sections as active by def', () => {
    const tree = renderer.create(<Accordian sections={sections}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('component opens a clicked section', () => {
    const wrapper = shallow(<Accordian sections={sections}/>)
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('component only opens the last section when mult section clicked', () => {
    const wrapper = shallow(<Accordian sections={sections}/>)
    wrapper.find('button').at(1).simulate('click')
    wrapper.find('button').at(2).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })

})