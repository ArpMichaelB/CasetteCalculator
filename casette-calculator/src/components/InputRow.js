import React, { Component } from 'react';
import InputSeconds from '../components/InputSeconds.js';
import InputMinutes from '../components/InputMinutes.js';


class InputRow extends Component 
{
    render()
    {
        
        return(
            <div className="inputrow">                
                <InputMinutes className="minute">
                
                </InputMinutes>
                :
                <InputSeconds className="second">
                
                </InputSeconds>
            </div>
        )
    }
}
export default InputRow;