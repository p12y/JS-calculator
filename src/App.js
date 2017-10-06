import React, { Component } from 'react';
import './App.css';
import CalculatorDisplay from './components/calculator_display';
import CalculatorButton from './components/calculator_button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {result: null, calculation: "", currentNum: "", prevButtonType: "", firstNum: null, secondNum: null, operator: ""};
    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleControlClick = this.handleControlClick.bind(this);
  }

  handleInputClick(number) {
    let stringNum = number.toString();
    this.setState(
                  {
                    calculation: this.state.calculation + number,
                    currentNum: this.state.currentNum + stringNum,
                    prevButtonType: 'number'
                  }
                  );
  }

  handleControlClick(control) {
    switch(control) {
      case 'DEL': {
        this.setState({calculation: "", result: null});
        break;
      }
      case '+': {
        this.setState({calculation: this.state.calculation.concat('+')});
        break;
      }
      case '=': {
        let str = this.state.calculation;
        str = str.replace(/x/g, '*').replace(/÷/g, '/');
        let result = eval(str);
        this.setState({calculation: result.toString() });
        break;
      }
      case '-': {
        this.setState({calculation: this.state.calculation.concat('-')});
        break;
      }
      case 'x': {
        this.setState({calculation: this.state.calculation.concat('x')});
        break;
      }
      case '÷': {
        this.setState({calculation: this.state.calculation.concat('÷')});
        break;
      }
    }
  }

  render() {
    return (
        <div className="App">
        <div className="Calculator">
            <div className="calculator-display">
              <CalculatorDisplay result={this.state.result} calculation={this.state.calculation} />
            </div>
            <div className="calculator-inputs">
              <div className="column">
                <CalculatorButton 
                  value="DEL" 
                  className="calculator-control" 
                  onClick={this.handleControlClick}
                />
                <CalculatorButton 
                  value="&divide;" 
                  className="calculator-control" 
                  onClick={this.handleControlClick}
                />
                <CalculatorButton 
                  value="x" 
                  className="calculator-control" 
                  onClick={this.handleControlClick}
                />
                <CalculatorButton 
                  value="-" 
                  className="calculator-control" 
                  onClick={this.handleControlClick}
                />
                <CalculatorButton 
                  value="+" 
                  className="calculator-control" 
                  onClick={this.handleControlClick}
                />
              </div>
              <div className="row">
                <CalculatorButton onClick={this.handleInputClick} value={7} />
                <CalculatorButton onClick={this.handleInputClick} value={8} />
                <CalculatorButton onClick={this.handleInputClick} value={9} />
              </div>
              <div className="row">
                <CalculatorButton onClick={this.handleInputClick} value={4} />
                <CalculatorButton onClick={this.handleInputClick} value={5} />
                <CalculatorButton onClick={this.handleInputClick} value={6} />
              </div>
              <div className="row">
                <CalculatorButton onClick={this.handleInputClick} value={1} />
                <CalculatorButton onClick={this.handleInputClick} value={2} />
                <CalculatorButton onClick={this.handleInputClick} value={3} />
              </div>
              <div className="row">
                <CalculatorButton onClick={this.handleInputClick} value='.' />
                <CalculatorButton onClick={this.handleInputClick} value={0} />
                <CalculatorButton value="=" onClick={this.handleControlClick} />
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
