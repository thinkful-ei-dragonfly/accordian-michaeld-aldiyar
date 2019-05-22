/* eslint-disable react/require-render-return */
/* eslint-disable no-useless-constructor */
import React from 'react';


export default class Accordian extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const buttons= this.props.sections.map((section, index) => (
      <button key={index}>
        {section.title}
      </button>

    ))
    return (
      <ul>
        {buttons}
      </ul>
    )
  }
}
