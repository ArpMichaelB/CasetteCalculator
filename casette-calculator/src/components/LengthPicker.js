import  React, { Component } from 'react';
import { setLength } from '../scripts/LengthSetter';


class LengthPicker extends Component 
{
    render()
    {
        
        return(
            <div className="lengthselector">
                <input type="radio" name="length" value="60" onChange={setLength}/>
                <label htmlFor="60">60</label>
                <input type="radio" name="length" value="74" onChange={setLength}/>
                <label htmlFor="74">74</label>
                <input type="radio" name="length" value="90" onChange={setLength}/>
                <label htmlFor="90">90</label>
                <input type="radio" name="length" value="110" onChange={setLength}/>
                <label htmlFor="110">110</label>
            </div>
        )
    }
}
export default LengthPicker;