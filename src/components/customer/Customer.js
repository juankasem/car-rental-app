import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { Card, makeStyles, Typography } from '@material-ui/core'
import Controls from '../controls/Controls';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import { useNavigate } from "react-router-dom";
import CustomerForm from '../../pages/customers/CustomerForm';
import Popup from '../layout/Popup';
import Notification from '../layout/Notification';
import  { updateCustomer } from '../../store/actions/customers'

const useStyles = makeStyles({
    customers: {
      margin: '0.5rem',
      padding: '1rem'
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
    const [openPopup, setOpenPopup] = useState(false)
    const dispatch = useDispatch();
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: ''});
   
    const postCustomer = (updatedCustomer, resetForm) => {
        dispatch(updateCustomer(updatedCustomer))
        setNotify({
            isOpen: true,
            message: 'Başarılı güncelledi',
            type: 'success'
            })

        resetForm()
        navigate('/customers')
    }

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
                onClick={() => setOpenPopup(true)}>
                <EditOutlinedIcon fontSize="small" />
            </Controls.ActionButton>
             <Controls.ActionButton
                text="Sil"
                color="secondary">
                <CloseIcon fontSize="small" />
            </Controls.ActionButton>
            </div>
        </Card>
            <Popup openPopup={openPopup}
            setOpenPopup= {setOpenPopup}
            title="Müşteri detayları">
           <CustomerForm customer={customer} postCustomer={postCustomer} />
           </Popup>
          <Notification notify={notify} setNotify={setNotify} />
     </>
    )
}

export default Customer
