import React, { Component } from 'react';
import { increment } from '../../scripts/IncrementScripts';
import "./InputMinutes.css";
class InputMinutes extends Component 
{
    
    render()
    {
        return(
        <input type="number" min="0" className="minute"
        onChange={increment}>
        </input>)
    }
}
export default InputMinutes;