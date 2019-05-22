/* eslint-disable react/require-render-return */
/* eslint-disable no-useless-constructor */
import React from 'react'

export default class Accordian extends React.Component {
  static defaultProps = { sections: [] }
  constructor (props) {
    super(props)
    this.state = {
      activeSectionIndex: null
    }
  }

  handleButtonClick = (index) => {
    this.setState({
      activeSectionIndex: index,
    })
  }
  renderButtons () {
    return this.props.sections.map((section, index) => (
      <li key={index}>
        <button className={section.title} onClick={() => this.handleButtonClick(index)}>
          {section.title}
        </button>
        {this.state.activeSectionIndex === index && <p>{section.content}</p>}
        
      </li>
    ))
  }

  

  render () {
    return <ul>{this.renderButtons()}</ul>
  }
}
