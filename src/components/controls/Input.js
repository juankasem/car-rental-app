import React from 'react'
import { TextField } from '@material-ui/core'

const Input = (props) => {
    const { label, type, placeholder, name, value, onChange, error = null, ...other } = props
    
    return (
        <TextField
            variant= "outlined"
            type={type || "text"}
            label={label}
            placeholder={placeholder}
            name={name}
            value= {value}
            onChange= {onChange}
            {...other}
            {...(error && {error:true,helperText:error})} />
    )
}

export default Input
