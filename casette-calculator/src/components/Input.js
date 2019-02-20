import React, { Component } from 'react';

class Input extends Component 
{
    constructor(){
        super();
        this.updateState = this.updateState.bind(this);
        this.checkInput = this.checkInput.bind(this);
        this.state={currentKey:-2};
    }
    checkInput()
    {
        if(this.state.currentKey === -2)
        {
            console.log("startup");
        }
        else if(this.state.currentKey <0)
        {
            console.log("incorrect");
            this.state.eventTarget.value = this.state.eventTarget.value.slice(0,this.state.eventTarget.value.length-1);
        }
        else
        {
            this.state.eventTarget.value = this.state.eventTarget.value.slice(0,this.state.eventTarget.value.length-1) + this.state.currentKey;
            console.log(this.state.currentKey);
        }
    }
    updateState(event)
    {
        var code = event.key;
        //so turns out which is the system dependant keycode
        //but I lean p heavily on us getting event.key's results
        //so rather than having some unpredicted actions I'm not gonna include which
        if(code>=0 && code <= 9)
        {
            this.setState({
                currentKey: code,
                eventTarget: event.target
            });
        }
        else
        {
            this.setState({
                currentKey:-1,
                eventTarget: event.target
            });
        }        
        this.checkInput();
    }
    render()
    {
        //todo: make this input only allow numbers, up to 60
        //if the js for this is too fiddly/difficult just make a number tag with step of 60
        return(
        <input type="text"
        onKeyDown={this.updateState.bind(this)}>
        </input>)
    }
}
export default Input;