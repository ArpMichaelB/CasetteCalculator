import React, { Component } from 'react';

class Input extends Component 
{
    constructor(){
        super();
        this.updateState = this.updateState.bind(this);
        this.checkInput = this.checkInput.bind(this);
        this.state={currentKey:-1};
    }
    checkInput()
    {
        console.log(this.state.currentKey);
    }
    updateState(event)
    {
        var code = event.keyCode || event.which;
        //what is this which? Obviously it's saying the keycode or this mysterious which
        this.setState({
            currentKey: code
        });
        this.checkInput();
    }
    render()
    {
        //todo: make this input only allow numbers, up to 60
        //if the js for this is too fiddly/difficult just make a number tag with step of 60
        return(
        <input type="text"
        onKeyPress={this.updateState.bind(this)}>
        </input>)
    }
}
export default Input;