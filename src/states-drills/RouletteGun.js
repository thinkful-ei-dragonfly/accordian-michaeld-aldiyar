import React from 'react';

class RouletteGun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chamber: null,
      spinningTheChamber: false,
    };
    this.bulletInChamber = 8;
  };


  handleClick = () => {
    this.setState({
      spinningTheChamber: true,
    })
    
    this.timeout = setTimeout(() => {
      const number = Math.ceil(Math.random() * 8)
      this.setState({
        chamber: number,
        spinningTheChamber: false,
      })
    }, 2000);    
  };

  setDisplayString() {
    const result = this.state.chamber
    
    if (this.state.spinningTheChamber === true){
      // console.log('loading')
      return 'spinning the chamber and pulling the trigger'
    } else if (result === this.bulletInChamber) {
        // console.log('shot')
        return 'BANG'
    } else if (result === null){
        // console.log('luck')
        return 'Pull the Trigger!'
    } else {
      return 'You are safe'
    }

  }
  

  
  render() {
    return (
      <div>
        <p>{this.setDisplayString()}</p>
        <button onClick={this.handleClick}>Pull the trigger!</button>
      </div>
    )
  }
}

export default RouletteGun