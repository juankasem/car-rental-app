import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, makeStyles, IconButton } from '@material-ui/core'
import Controls from '../controls/Controls'
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';

const useStyles = makeStyles(theme => ({
  dialog: {
      padding: theme.spacing(2),
      position: 'absolute',
      top: theme.spacing(5)
  },
  dialogTitle: {
    textAlign: 'center'
  },
  dialogContent: {
    textAlign: 'center'
  },
  dialogActions: {
    justifyContent: 'center'
  },
  titleIcon: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.main,
    '&:hover': {
        backgroundColor: theme.palette.secondary.light,
        cursor: 'default'
    },
    '& .MuiSvgIcon-root': {
        fontSize: '2rem',
    }
}
}))

const ConfirmDialog = (props) => {
    const classes = useStyles();
    const { confirmDialog, setConfirmDialog } = props

    return (
       <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
         <DialogTitle className={classes.dialogTitle}>
           <IconButton disableRipple className={classes.titleIcon}>
               <NotListedLocationIcon />
           </IconButton>
         </DialogTitle>
         <DialogContent className={classes.dialogContent}>
         <Typography
                variant="h6"
                component="div"> 
                {confirmDialog.title}
            </Typography>
            <Typography
                variant="subtitle2"
                component="div"> 
                {confirmDialog.subTitle}
            </Typography>
         </DialogContent>
         <DialogActions className={classes.dialogActions}>
           <Controls.Button
           text="Hayir"
            color="default"
            onClick={() => setConfirmDialog({
              ...confirmDialog,
              isOpen: false
            })}
            >
           </Controls.Button>
           <Controls.Button
           text="Evet"
            color="secondary"
            onClick={confirmDialog.onConfirm}>
           </Controls.Button>
         </DialogActions>
       </Dialog>
    )
}

export default ConfirmDialog
