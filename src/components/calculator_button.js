import React, { Component } from 'react';
import Ink from 'react-ink';

class CalculatorButton extends Component {
  render() {
    return (
      <div className={`button ${this.props.className}`} onClick={() => this.props.onClick(this.props.value)}>
        {this.props.value}
        <Ink background={false} />
      </div>
    );
  }
}

export default CalculatorButton;