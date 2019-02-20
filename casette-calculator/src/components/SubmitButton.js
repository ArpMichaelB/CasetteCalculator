import React, { Component } from 'react';

class SubmitButton extends Component 
{
    totalInputs()
    {
        //get the list of everything from the parent element (the input form) and for each row, total the times
        //then compare it to the total available from lengthpicker
        //and add a text line to the bottom of the page that says how much time you've used
        //maybe even add a side marker @half of the total
        console.log("finish this");
    }
    render()
    {
        
        return(
            <input type = "button"
            value = "Calculate"
            onClick={this.totalInputs.bind(this)}>
            </input>
        )
    }
}
export default SubmitButton;