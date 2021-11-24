import React from 'react'
import { FormControl, FormControlLabel, FormLabel, RadioGroup as MuiRadioGroup, Radio } from '@material-ui/core'

const RadioGroup = (props) => {
    const { label, name, value, onChange, items } = props

    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup row
                name={name}
                value= {value} 
                onChange= {onChange}>
                    {items && items.map((item) => 
                    (<FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.title} />)
                    )}
            </MuiRadioGroup>
        </FormControl>
)
}

export default RadioGroup
