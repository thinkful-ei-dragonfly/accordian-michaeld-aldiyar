
import React from 'react'

export default class Accordion extends React.Component {
  static defaultProps = { sections: [] };
  
    
    state = {
      // this would let the program know which section to expand
      activeSectionIndex: null,
    }

  handleSetActiveSection = (index) => {
    this.setState({ activeSectionIndex: index});
  }

  renderButtons(section, index, activeSectionIndex) {
    return (
      <li className='Accordion__item' key={index}>
        <button type='button'
          onClick={() => this.handleSetActiveSection(index)}
        >
          {section.title}
        </button>
        {(activeSectionIndex === index) && <p>{section.content}</p>}
      </li>
    )
  }

  render() {
    const { activeSectionIndex } = this.state
    const { sections } = this.props
    let emptyli
    if (sections.length === 0) {
      emptyli= <li></li>
    }
    return (
      <ul className="Accordion"> {emptyli}
        {sections.map((section, index) =>
          this.renderButtons(section, index, activeSectionIndex)
          )}
      </ul>
    )
  }
}
