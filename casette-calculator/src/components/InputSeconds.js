import React, { Component } from 'react';
import { increment } from '../scripts/IncrementScripts';

class InputSeconds extends Component 
{
    render()
    {
        return(
        <input type="number" min="0" max="60" className="second" 
        onChange={increment}>
        </input>)
    }
}
export default InputSeconds;