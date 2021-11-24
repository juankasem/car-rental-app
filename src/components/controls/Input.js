import React from 'react'
import { TextField } from '@material-ui/core'

const Input = (props) => {
    const { label, placeholder, name, value, onChange } = props
    
    return (
        <TextField
            variant= "outlined"
            label={label}
            placeholder={placeholder}
            name={name}
            value= {value}
            onChange= {onChange} />
    )
}

export default Input
