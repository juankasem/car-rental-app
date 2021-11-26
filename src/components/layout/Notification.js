import React from 'react'
import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

const Notification = (props) => {
    const [notify, setNotify] = props
    return (
        <Snackbar>
            <Alert></Alert>
        </Snackbar>
    )
}

export default Notification
