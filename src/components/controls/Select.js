import React from 'react'
import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core'

const Select = (props) => {
    const { label, name, value, onChange, options } = props

    return (
        <FormControl
         variant="outlined">
        <InputLabel>{label}</InputLabel>
        <MuiSelect 
                    label= {label}
                    value={value}
                    name={name}  
                    onChange={onChange}>
           <MenuItem value="">None</MenuItem>
            {options && options.map(option => (
           <MenuItem key={option.value} value={option.value}>{option.title}</MenuItem>
            ))}
        </MuiSelect>
        </FormControl>
    )
}

export default Select
