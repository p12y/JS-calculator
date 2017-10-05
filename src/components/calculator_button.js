import React, { Component } from 'react';

class CalculatorButton extends Component {
  render() {
    return (
      <div className={`button ${this.props.className}`}>{this.props.char}</div>
    );
  }
}

export default CalculatorButton;