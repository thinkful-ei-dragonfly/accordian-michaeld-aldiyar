import React from 'react';

class HelloWorld extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = { who: '' };
  };

  handleClickWorld = () => {
    this.setState ({
      who: 'world'
    });
  };

  handleClickFriend = () => {
    this.setState({
      who: 'friend'
    });
  };

  handleClickReact = () => {
    this.setState({
      who: 'react'
    });
  };


  render() {
    console.log(this.state);
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button onClick={this.handleClickWorld}>
          World!
        </button>
        <button onClick={this.handleClickFriend}>
          Friend!
        </button>
        <button onClick={this.handleClickReact}>
          React!
        </button>
      </div>
    );
  }
}

export default HelloWorld