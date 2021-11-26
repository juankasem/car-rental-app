import React from 'react'
import { Dialog, DialogTitle, DialogContent, Typography, makeStyles } from '@material-ui/core'
import Controls from '../controls/Controls'

const useStyles = makeStyles(theme => ({
    dialogTitle: {
        display: 'flex',
         justifyContent: 'space-between',
        alignItems:'center'
    }
})
)

const Popup = (props) => {
    const classes = useStyles()
    const {title, children, openPopup, setOpenPopup } = props
    
    return (
        <Dialog open={openPopup} maxWidth="md">
            <DialogTitle>
                <div className={classes.dialogTitle} >
                <Typography
            variant="h6"
            component="div"
            > {title}
            </Typography>
            <Controls.ActionButton
              text="X"
              color="secondary"
              onClick={() => setOpenPopup(false)}
            >
            </Controls.ActionButton>
                </div>
             
            </DialogTitle>
            <DialogContent dividers>
               {children}
            </DialogContent>
        </Dialog>
    )
}

export default Popup
