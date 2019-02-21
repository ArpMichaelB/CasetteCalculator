import React, { Component } from 'react';

class InputMinutes extends Component 
{
    constructor(){
        super();
        this.increment = this.increment.bind(this);
    }
    increment(event)
    {
        event.target.value = event.target.value.replace(/[^0-9]/g,"");
        //so turns out regular expressions are a whole argument type in JS instead of having strings of the given regex
        //unlike the seconds input, this only needs to be numbers, so we don't need nearly as much bells and whistles in the fallback 
    }
    render()
    {
        return(
        <input type="number" min="0"
        onChange={this.increment.bind(this)}>
        </input>)
    }
}
export default InputMinutes;