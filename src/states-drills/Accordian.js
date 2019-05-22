/* eslint-disable react/require-render-return */
/* eslint-disable no-useless-constructor */
import React from 'react'

export default class Accordian extends React.Component {
  static defaultProps = { sections: [] }
  constructor (props) {
    super(props)
    this.state = {
      // this would let the program know which section to expand
      activeSectionIndex: null
    }
  }

  handleButtonClick = (index) => {
    // this method changes the state.activeSectionIndex to a section's index
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
        {/*<!-- This is conditional rendering. if 2 conditions are true,then we render <p>{section.content}</p>! -->*/}
        {this.state.activeSectionIndex === index && <p>{section.content}</p>}
        
      </li>
    ))
  }

  

  render () {
    return <ul>{this.renderButtons()}</ul>
  }
}
