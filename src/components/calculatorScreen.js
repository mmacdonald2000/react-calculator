import React from 'react'

export const CalculatorScreen = function(props){
  return(
    <div className="input-group input-group-lg extra-padded">
      <input type="text" value={props.screenVal} className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
    </div>
)
}
