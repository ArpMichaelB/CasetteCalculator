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
                {/* todo: make it so clicking on the last input row to type makes another input row.
                 to make this dynamically add rows,  if the second to last child's last child (i.e. the last input seconds) has a value of ""
                on focus of it, append a child to this element of type input row*/}
                <SubmitButton>

                </SubmitButton>
            </div>
        )
    }
}
export default InputForm;