/* eslint-disable react/require-render-return */
import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0};
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log('tick')
      this.setState ({
        count: this.state.count+1
      })
    }, 1000)
  }
  
  componentWillUnmount() {
    clearInterval(this.interval)

  }

  setDisplayString () {
    const theCount = this.state.count
    if (theCount >=8) {
      this.componentWillUnmount();
      return 'boom'
    } else if (theCount % 2 === 0) {
      return 'tick'
    } else {
      return 'tock'
    }
  }

  render() {
    console.log(this.state)
 
    return (
      <div>
        <p>

          {this.setDisplayString()}
        </p>
      </div>
    )
  }
}

export default Bomb