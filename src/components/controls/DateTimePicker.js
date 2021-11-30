import React from 'react'
import { MuiPickersUtilsProvider, KeyboardDateTimePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const DateTimePicker = (props) => {

    const { name, label, value, onChange } = props


    const convertToDefEventParam = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDateTimePicker disableToolbar variant="inline" inputVariant="outlined"
                label={label}
                format="MMM/dd/yyyy HH:mm"
                name={name}
                value={value}
                onChange={date =>onChange(convertToDefEventParam(name, date))}
            />
        </MuiPickersUtilsProvider>
    )
}

export default DateTimePicker