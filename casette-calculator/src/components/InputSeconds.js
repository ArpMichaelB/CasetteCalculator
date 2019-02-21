import React, { Component } from 'react';

class InputSeconds extends Component 
{
    constructor(){
        super();
        this.increment = this.increment.bind(this);
    }
    increment(event)
    {
        event.target.value = event.target.value.replace(/[^0-9]/g,"");
        //so turns out regular expressions are a whole argument type in JS instead of having strings of the given regex
        var value = parseInt(event.target.value,10);
        if(value>60)
        {
            event.target.value = 60;
        }
        //these lines are only used in the case of the input box not being a number type
        if(parseInt(event.target.value,10) === 60)
        {
            event.target.value = 0;
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
        onChange={this.increment.bind(this)}>
        </input>)
    }
}
export default InputSeconds;