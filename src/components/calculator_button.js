import React, { Component } from 'react';
import Ink from 'react-ink';

class CalculatorButton extends Component {
  render() {
    return (
      <div className={`button ${this.props.className}`}>
        <Ink />
        {this.props.char}
      </div>
    );
  }
}

export default CalculatorButton;