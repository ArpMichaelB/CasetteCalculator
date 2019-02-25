import React, { Component } from 'react';
import InputRow from './InputRow/InputRow.js/index.js';
import SubmitButton from '../components/SubmitButton.js';


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