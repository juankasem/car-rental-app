import React from 'react'
import { Card, makeStyles, Typography } from '@material-ui/core'
import Controls from '../controls/Controls';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme =>({
    customers: {
      margin: theme.spacing(1),
      padding: theme.spacing(1)
    },
    buttons: {
        display: 'flex'
    }
  }))

const Customer = ({customer, onEdit, onClickDelete}) => {
    const classes = useStyles();
    const { id, fullName, age, gender,
            email, phone, address} = customer

    return (
        <>
        <Card className={classes.customers}>
            <Typography
                variant="h6"
                component="div"> {fullName}</Typography>   
                <div><span><b>Yaş:</b> {age}</span></div>
                <div><span>E-posta: {email}</span></div>
                <div><span>Telefon: {phone}</span></div>
                <div><span>Cinsiyet: {gender}</span></div>
                <div><span>Adres: {address}</span></div>
                <div className={classes.buttons}>
            <Controls.ActionButton
                text="Düzenle"
                color="primary"
                onClick={() => onEdit(customer)}>
                <EditOutlinedIcon fontSize="small" />
            </Controls.ActionButton>
             <Controls.ActionButton
                text="Sil"
                color="secondary"
                onClick={() => onClickDelete(customer.id)}>
                <CloseIcon fontSize="small" />
            </Controls.ActionButton>
            </div>
        </Card>
     </>
    )
}

export default Customer
