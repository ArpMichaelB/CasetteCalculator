import React, { Component } from 'react';

class InputSeconds extends Component 
{
    constructor(){
        super();
        this.increment = this.increment.bind(this);
    }
    increment(event)
    {
        if(parseInt(event.target.value,10) === 60)
        {
            event.target.value = 0;
            console.log(event.target.previousElementSibling.value);
            if(event.target.previousElementSibling.value !== "")
            {
                var minutes = parseInt(event.target.previousElementSibling.value, 10);
                minutes +=1;
                event.target.previousElementSibling.value = minutes;
            }
            else
            {
                event.target.previousElementSibling.value = 1;
            }
        }
    }
    render()
    {
        return(
        <input type="number" min="0" max="60" 
        onInput={this.increment.bind(this)}>
        </input>)
    }
}
export default InputSeconds;