import React from 'react';
import logo from './logo.svg';
import {CalculatorScreen} from './components/calculatorScreen.js'
import {CalculatorBody} from './components/calculatorBody.js'
import './App.css';
import './bootstrap.css' //THIS FILE HAS BEEN EDITED

class Calculator extends React.Component {
  constructor(){
    super()
    this.state = {calcScreen:''}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    let expression = this.state.expression;

    switch(e.target.value) {
      case ('C'): this.clearInput();
      case ('+'): expression = this.state.firstNum +;
      case ('-'): pass;
      case ('*'): pass;
      case ('/'): pass;
      case ('='): pass;
      default:
        let firstNum = this.state.firstNum + e.target.value
        this.setState({calcScreen})
    }




    // if(e.target.value === 'C'){
    //   this.clearInput()
    // }else{
    //   let calcString = this.state.calcScreen + e.target.value
    //   this.setState({calcScreen:calcString})
    // }
  }
  //switch cases: save number when any of these are pressed
  //+: add a plus to expression
  // -: add a minus to expression
  // *: add *
  // /:
  // =: return expression

  clearInput(){
    this.setState({calcScreen:''})
  }

  handleCalculation() {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-6 margin-center">
              <CalculatorScreen screenVal={this.state.calcScreen}/>
              <CalculatorBody onClick={this.handleClick}/>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Calculator;
