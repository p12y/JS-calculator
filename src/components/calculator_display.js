import React, { Component } from 'react';

class CalculatorDisplay extends Component {
  render() {
    const maxSize = 1;
    const minSize = 0.5;
    const charCount = this.props.charCount;
    let value;

    return (
      <div style={{'fontSize': `${value}em`}}>
        <div className="calculation">{this.props.calculation}</div>
        <div className="result">{this.props.result}</div>
      </div>
    );
  }
}

export default CalculatorDisplay;