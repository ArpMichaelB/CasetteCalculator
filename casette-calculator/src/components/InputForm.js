import React, { Component } from 'react';
import InputRow from '../components/InputRow.js';
import SubmitButton from '../components/SubmitButton.js';


class InputForm extends Component 
{
    render()
    {
        
        return(
            <div className="inputform">                
                <InputRow>
                
                </InputRow>
                <InputRow>
                
                </InputRow>
                {/* todo: make it so clicking on the last input row to type makes another input row */}
                <SubmitButton>

                </SubmitButton>
            </div>
        )
    }
}
export default InputForm;