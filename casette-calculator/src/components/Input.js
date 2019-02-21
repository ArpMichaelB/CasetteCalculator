import React, { Component } from 'react';

class Input extends Component 
{
    render()
    {
        //okay so after a great deal of fiddling it's become clear that what I'm trying to do isn't exactly tenable
        //when I type a "wrong" input in the middle then keep typing correct things it's alternating between what's actually been placed
        //and the string with the wrong input in the middle with the key appended at the end
        //plus everything is a step behind keystroke wise because of the way I'm handling state here
        //so I'm just going to do a number tag
        //potentially to still have some neat javascript happening bts, I might tie something to the change event
        //so that if the class is seconds, and we're incrementing to 60, it increments the minutes of it's compatriot in the input row

        return(
        <input type="number" min="0" max="60">
        </input>)
    }
}
export default Input;