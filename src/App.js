import React, { Component } from 'react';
import './App.css';
import CalculatorDisplay from './components/calculator_display';
import CalculatorButton from './components/calculator_button';
import ClickNHold from 'react-click-n-hold';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {result: null, calculation: "", currentNum: "", operator: ""};
    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleControlClick = this.handleControlClick.bind(this);
    this.clearScreen = this.clearScreen.bind(this);
  }

  handleInputClick(number) {
    let stringNum = number.toString();
    let result = "";
    let str = this.state.calculation.concat(stringNum);
    str = str.replace(/x/g, '*').replace(/÷/g, '/');
    if (this.state.operator) {
      result = parseFloat(eval(str).toFixed(6));
    }
    this.setState(
                  {
                    calculation: this.state.calculation.concat(number),
                    currentNum: this.state.currentNum + stringNum,
                    result: result,
                    prevButtonType: 'number'
                  }
                  );
  }

  handleControlClick(control) {
    let result = '';
    let str = this.state.calculation.slice(0, this.state.calculation.length - 1);
    let calculation = str.replace(/x/g, '*').replace(/÷/g, '/').replace(/[/+*-]$/, "");

    switch(control) {
      case 'DEL': {
        result = eval(calculation)
        this.setState({calculation: str, result: result});
        break;
      }
      case '+': {
        str = this.state.calculation.replace(/[+÷x-]$/, "");
        this.setState({calculation: str.concat('+'), operator: true});
        break;
      }
      case '=': {
        let str = this.state.calculation;
        str = str.replace(/x/g, '*').replace(/÷/g, '/');
        let result = eval(str);
        this.setState({calculation: parseFloat(result.toFixed(6)).toString(), result: "", operator: false });
        break;
      }
      case '-': {
        str = this.state.calculation.replace(/[+÷x-]$/, "");
        this.setState({calculation: str.concat('-'), operator: true});
        break;
      }
      case 'x': {
        str = this.state.calculation.replace(/[+÷x-]$/, "");
        this.setState({calculation: str.concat('x'), operator: true});
        break;
      }
      case '÷': {
        str = this.state.calculation.replace(/[+÷x-]$/, "");
        this.setState({calculation: str.concat('÷'), operator: true});
        break;
      }
    }
  }

  clearScreen() {
    this.setState({calculation: "", result: null, currentNum: "", operator: false});
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
