import React, { Component } from 'react';
import InputSeconds from '../components/InputSeconds.js';
import InputMinutes from '../components/InputMinutes.js';


class InputRow extends Component 
{
    constructor(){
        super();
        this.addRow = this.addRow.bind(this);
    }
    addRow(event)
    {
        //this following thing is bonkers
        //event.target.parentElement.parentElement.childNodes[event.target.parentElement.parentElement.childElementCount-2].lastChild
        //but what it's intended to mean is the last input row on the page's last child (i.e. the add a row button)
        if(event.target.parentElement.parentElement.childNodes[event.target.parentElement.parentElement.childElementCount-2].lastChild === event.target)
        {
            //first of all, add another row
            event.target.parentElement.parentElement.insertBefore(event.target.parentElement.cloneNode(true),event.target.parentElement.parentElement.lastChild);
            //then since none of the scripts got copied over, bind them
            //then, for each row except for the newest one, hide the add a new row button
        }
    }
    render()
    {
        return(
            <div className="inputrow">                
                <InputMinutes className="minute">
                
                </InputMinutes>
                :
                <InputSeconds className="second">
                
                </InputSeconds>
                <input type="button" onClick={this.addRow.bind(this)} className="newRow" value="✓"></input>
            </div>
        )
    }
}
export default InputRow;