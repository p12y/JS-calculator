import React, { Component } from 'react';

class CalculatorDisplay extends Component {
  render() {
    return (
      <div>
        <div className="calculation">{this.props.calculation}</div>
        <div className="result">{this.props.result}</div>
      </div>
    );
  }
}

export default CalculatorDisplay;