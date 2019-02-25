import React, { Component } from 'react';
import InputSeconds from '../components/InputSeconds.js';
import InputMinutes from '../InputMinutes.js';
import { addRow } from '../../scripts/RowScripts.js';


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
                <input type="button" onClick={addRow} className="newRow" value="New Row"></input>
            </div>
        )
    }
}
export default InputRow;