import React from 'react'
import { FormControl, InputLabel, MenuItem, Select as MuiSelect, FormHelperText } from '@material-ui/core'

const Select = (props) => {
    const { label, name, value, error=null, onChange, options } = props

    return (
        <FormControl
         variant="outlined"
         {...(error && {error:true})}>
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
        {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}

export default Select
