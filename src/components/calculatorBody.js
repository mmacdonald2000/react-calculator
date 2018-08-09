import React from 'react'


export class CalculatorBody extends React.Component{
  render(){
    return(<div className= "container">
      <div className="row padded">
        <div className="col-md-3">
          <button onClick={this.props.onClick} value='7' type="button" className="btn btn-secondary btn-lg">7</button>
        </div>
        <div className="col-md-3">
          <button onClick={this.props.onClick} value='8' type="button" className="btn btn-secondary btn-lg">8</button>
        </div>
        <div className="col-md-3">
          <button onClick={this.props.onClick} value='9' type="button" className="btn btn-secondary btn-lg">9</button>
        </div>
        <div className="col-md-3">
          <button onClick={this.props.onClick} value='/' type="button" className="btn btn-secondary btn-lg">/</button>
        </div>
      </div>
      <div className="row padded">
        <div className="col-md-3">
          <button onClick={this.props.onClick} value='4' type="button" className="btn btn-secondary btn-lg">4</button>
        </div>
        <div className="col-md-3">
          <button onClick={this.props.onClick} value='5' type="button" className="btn btn-secondary btn-lg">5</button>
        </div>
        <div className="col-md-3">
          <button onClick={this.props.onClick} value='6' type="button" className="btn btn-secondary btn-lg">6</button>
        </div>
        <div className="col-md-3">
          <button onClick={this.props.onClick} value='*' type="button" className="btn btn-secondary btn-lg">*</button>
        </div>
      </div>
      <div className="row padded">
        <div className="col-md-3">
          <button onClick={this.props.onClick} value='1' type="button" className="btn btn-secondary btn-lg">1</button>
        </div>
        <div className="col-md-3">
          <button onClick={this.props.onClick} value='2' type="button" className="btn btn-secondary btn-lg">2</button>
        </div>
        <div className="col-md-3">
          <button onClick={this.props.onClick} value='3' type="button" className="btn btn-secondary btn-lg">3</button>
        </div>
        <div className="col-md-3">
          <button onClick={this.props.onClick} value='+' type="button" className="btn btn-secondary btn-lg">+</button>
        </div>
      </div>
      <div className="row padded">
        <div className="col-md-3">
          <button onClick={this.props.onClick} value='0' type="button" className="btn btn-secondary btn-lg">0</button>
        </div>
        <div className="col-md-3">
          <button onClick={this.props.onClick} value='.' type="button" className="btn btn-secondary btn-lg">.</button>
        </div>
        <div className="col-md-3">
          <button onClick={this.props.onClick} value='C' type="button" className="btn btn-secondary btn-lg">C</button>
        </div>
        <div className="col-md-3">
          <button onClick={this.props.onClick} value='-' type="button" className="btn btn-secondary btn-lg">-</button>
        </div>
      </div>
      <div className="row padded">
        <div className="col-md-12">
          <button onClick={this.props.onClick} value='=' type="button" className="btn btn-secondary btn-lg">=</button>
        </div>
      </div>
    </div>)
  }
}
