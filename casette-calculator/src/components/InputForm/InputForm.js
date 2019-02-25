import React, { Component } from 'react';
import InputRow from '../InputRow/InputRow.js';
import SubmitButton from '../SubmitButton/SubmitButton.js';
import "./InputForm.css";


class InputForm extends Component 
{
    render()
    {
        
        return(
            <div className="inputform">                
                <InputRow>
                
                </InputRow>
                <SubmitButton>

                </SubmitButton>
            </div>
        )
    }
}
export default InputForm;