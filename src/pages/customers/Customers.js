import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles, Paper } from '@material-ui/core'
import CustomerList from '../../components/customer/CustomerList'
import PageHeader from '../../components/layout/PageHeader'
import CustomerForm from './CustomerForm'
import { updateCustomer, deleteCustomer } from '../../store/actions/customers'
import Popup from '../../components/layout/Popup'
import ConfirmDialog from '../../components/layout/ConfirmDialog'
import Notification from '../../components/layout/Notification'

const useStyles = makeStyles({
    customers: {
      padding: '2rem'
    }
  })
  
const Customers = () => {
    const classes = useStyles()
    const dispatch = useDispatch();
    const {customers} = useSelector(state => state.customers)
    const [customerToEdit, setCustomerToEdit] = useState(null)
    const [openPopup, setOpenPopup] = useState(false)
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: ''});
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: ''});

    const openPopupToEdit = (customer) => {
      setOpenPopup(true)
      setCustomerToEdit(customer)
    }

    const onUpdate = (customer, resetForm) => {
          dispatch(updateCustomer(customer))
          setNotify({
              isOpen: true,
              message: 'Başarılı güncelledi',
              type: 'success'
            })
          
          setOpenPopup(false)
          resetForm()
     }
     
    const onDelete = (id) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        dispatch(deleteCustomer(id))
        setNotify({
            isOpen: true,
            message: 'Başarılı sildi',
            type: 'error'
            })
    }

    const showConfirmDialog = (id) => {
      setConfirmDialog({
        isOpen: true,
        title: 'Bu müşteri silmek istediğinizden emin misiniz?',
        subTitle: 'bu işlemi geri alamazsınız',
        onConfirm: () => { onDelete(id)}
    })
    }

    return (
        <>
        <PageHeader title="Müşteriler"
                    subTitle="Tüm Müşteriler"
                    buttonText="Yeni Müşteri Ekle"
                    url="/customers/new" />
                    
        <Paper className={classes.customers}>
         <CustomerList  customers={customers}
                        onEdit={openPopupToEdit}
                        onClickDelete={showConfirmDialog} />
        </Paper>
        <Popup openPopup={openPopup}
               setOpenPopup= {setOpenPopup}
               title="Müşteri detayları">
         <CustomerForm customer={customerToEdit} postCustomer={onUpdate} />
        </Popup>
        <Notification
                      notify={notify}
                      setNotify={setNotify} />
        <ConfirmDialog
                        confirmDialog={confirmDialog}
                        setConfirmDialog={setConfirmDialog} />
        </>
    )
}

export default Customers
