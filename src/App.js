import React, { Component } from 'react';
import './App.css';
import CalculatorDisplay from './components/calculator_display';
import CalculatorButton from './components/calculator_button';
import ClickNHold from 'react-click-n-hold';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {result: null, calculation: "", currentNum: "", prevButtonType: "", firstNum: null, secondNum: null, operator: ""};
    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleControlClick = this.handleControlClick.bind(this);
    this.clearScreen = this.clearScreen.bind(this);
  }

  handleInputClick(number) {
    let stringNum = number.toString();
    let result = "";
    let str = this.state.calculation + stringNum;
    str = str.replace(/x/g, '*').replace(/÷/g, '/');
    if (this.state.operator) {
      result = eval(str);
    }
    this.setState(
                  {
                    calculation: this.state.calculation + number,
                    currentNum: this.state.currentNum + stringNum,
                    result: result,
                    prevButtonType: 'number'
                  }
                  );
  }

  handleControlClick(control) {
    switch(control) {
      case 'DEL': {
        this.setState({calculation: this.state.calculation.slice(0, this.state.calculation.length - 1), result: null, operator: false});
        break;
      }
      case '+': {
        this.setState({calculation: this.state.calculation.concat('+'), operator: true});
        break;
      }
      case '=': {
        let str = this.state.calculation;
        str = str.replace(/x/g, '*').replace(/÷/g, '/');
        let result = eval(str);
        this.setState({calculation: parseFloat(result.toFixed(5)).toString(), result: "", operator: false });
        break;
      }
      case '-': {
        this.setState({calculation: this.state.calculation.concat('-'), operator: true});
        break;
      }
      case 'x': {
        this.setState({calculation: this.state.calculation.concat('x'), operator: true});
        break;
      }
      case '÷': {
        this.setState({calculation: this.state.calculation.concat('÷'), operator: true});
        break;
      }
    }
  }

  clearScreen() {
    this.setState({calculation: "", result: null, currentNum: ""});
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
                <ClickNHold
                  time={0.5}
                  onClickNHold={this.clearScreen}
                >
                  <CalculatorButton 
                    value="DEL" 
                    className="calculator-control" 
                    onClick={this.handleControlClick}
                  />
                </ClickNHold>
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
