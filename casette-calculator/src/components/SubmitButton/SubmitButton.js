import React, { Component } from 'react';
import { totalTime } from '../../scripts/TotalTime';
import "./SubmitButton.css";

class SubmitButton extends Component 
{
    render()
    {
        
        return(
            <input type = "button"
            value = "Calculate"
            onClick={totalTime}
            className="calculationButton">
            </input>
        )
    }
}
export default SubmitButton;