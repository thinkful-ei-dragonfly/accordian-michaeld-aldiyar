import React from 'react';
import './App.css';
// import HelloWorld from './states-drills/HelloWorld';
// import Bomb from './states-drills/Bomb';
// import RouletteGun from './states-drills/RouletteGun';
import Accordion from './states-drills/Accordion';

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
class App extends React.Component {
  render() {
    return (
      // <>
      //   <HelloWorld />
      //   <Bomb />
      //   <RouletteGun />
      // </>
        <div>
        <Accordion sections={sections} />
        </div>
    );
  }
}

export default App