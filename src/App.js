import React, { Component } from 'react';
import './App.css';
import CalculatorDisplay from './components/calculator_display';
import CalculatorButton from './components/calculator_button';

class App extends Component {
  render() {
    return (
        <div className="App">
        <div className="Calculator">
            <div className="calculator-display">
              <CalculatorDisplay />
            </div>
            <div className="calculator-inputs">
              <div className="row">
                <CalculatorButton char="7" />
                <CalculatorButton char="8" />
                <CalculatorButton char="9" />
                <CalculatorButton char="/" className="calculator-control" />
              </div>
              <div className="row">
                <CalculatorButton char="4" />
                <CalculatorButton char="5" />
                <CalculatorButton char="6" />
                <CalculatorButton char="x" className="calculator-control" />
              </div>
              <div className="row">
                <CalculatorButton char="1" />
                <CalculatorButton char="2" />
                <CalculatorButton char="3" />
                <CalculatorButton char="-" className="calculator-control" />
              </div>
              <div className="row">
                <CalculatorButton char="." />
                <CalculatorButton char="0" />
                <CalculatorButton char="=" />
                <CalculatorButton char="+" className="calculator-control" />
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
