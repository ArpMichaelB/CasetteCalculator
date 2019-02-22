import React, { Component } from 'react';
import { totalTime } from '../scripts/TotalTime';

class SubmitButton extends Component 
{
    render()
    {
        
        return(
            <input type = "button"
            value = "Calculate"
            onClick={totalTime}>
            </input>
        )
    }
}
export default SubmitButton;