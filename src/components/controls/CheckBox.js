import { FormControl, FormControlLabel, Checkbox as MuiCheckBox } from '@material-ui/core'
import React from 'react'

const CheckBox = (props) => {
    const { name, value, onChange } = props

    const convertToDefaultEventParam = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
       <FormControl>
           <FormControlLabel control={<MuiCheckBox 
              name={name}
              color="primary"
              checked={value}
              onChange={e => onChange(convertToDefaultEventParam(name, e.target.checked))}
           />} 
           />
       </FormControl>
    )
}

export default CheckBox
