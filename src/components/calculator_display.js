import React, { Component } from 'react';

class CalculatorDisplay extends Component {
  render() {
    const maxSize = 40;
    const charCount = this.props.charCount / 1.5;
    const size = maxSize - charCount;

    return (
      <div style={{'fontSize': `${size}px`}}>
        <div className="calculation">{this.props.calculation}</div>
        <div className="result">{this.props.result}</div>
      </div>
    );
  }
}

export default CalculatorDisplay;