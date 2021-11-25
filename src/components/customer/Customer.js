import React from 'react'
import { Card, makeStyles, Typography } from '@material-ui/core'
import Controls from '../controls/Controls';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    customers: {
      padding: '2rem'
    },
    buttons: {
        display: 'flex'
    }
  })

const Customer = ({customer}) => {
    const classes = useStyles();
    const { id, fullName, age, gender,
            email, phone, address} = customer
    const navigate = useNavigate();

    return (
        <Card>
            <Typography
                variant="h6"
                component="div">Musteri Adi: {fullName}</Typography>   
                <div><span><b>Yas:</b> {age}</span></div>
                <div><span>E-posta: {email}</span></div>
                <div><span>Telefon Numarasi: {phone}</span></div>
                <div><span>Cinsiyet: {gender}</span></div>
                <div><span>Adres: {address}</span></div>
                <div className={classes.buttons}>
            <Controls.ActionButton
                color="primary"
                onClick={() => navigate(`/customers/edit/${id}`)}>
                <EditOutlinedIcon fontSize="small" />
            </Controls.ActionButton>
             <Controls.ActionButton
                color="secondary">
                <CloseIcon fontSize="small" />
            </Controls.ActionButton>
            </div>
        </Card>
    )
}

export default Customer
