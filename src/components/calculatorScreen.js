import React from 'react'

export class CalculatorScreen extends React.Component{

  render(){
    return(
        <div className="input-group input-group-lg extra-padded">
          <input type="text" value={this.props.screenVal} className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
        </div>)
  }
}
