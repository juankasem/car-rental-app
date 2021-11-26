import React, { useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { Paper, makeStyles } from '@material-ui/core';
import PageHeader from '../../components/layout/PageHeader';
import CustomerForm from './CustomerForm';
import { useParams } from 'react-router';
import { addCustomer, updateCustomer } from '../../store/actions/customers';
import Notification from '../../components/layout/Notification';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
})
)

const getSubTitle = (editMode = false) =>
  !editMode ? "Yeni Müşteri Ekle" : "Mevcut Müşteri Güncelleme"


const AddOrEditCustomer = () => {
    const classes = useStyles();
    const [editMode, setEditMode] = useState(false);
    const [customer, setCustomer] = useState(null);
    const {customers} = useSelector(state => state.customers)
    const params = useParams()
    const  dispatch = useDispatch();
    const navigate = useNavigate();
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: ''});

    const postCustomer = (customer, resetForm) => {
       if (customer.id === 0){
         customer.id = customers.length + 1
         dispatch(addCustomer(customer))
         setNotify({
           isOpen: true,
           message: 'Başarılı ekledi',
           type: 'success'
         })
       }
         else {
          dispatch(updateCustomer(customer))
          setNotify({
            isOpen: true,
            message: 'Başarılı güncelledi',
            type: 'success'
          })
         }

        resetForm()
        navigate('/customers')
    }
    
    useEffect(() => {
        if (params.id){
            setEditMode(true)
            const customer = customers.find(customer => customer.id === +params.id)
            setCustomer(customer)
        }
    }, [customers, params])

    return (
        <>
        <PageHeader title="Müşteriler"
         subTitle={getSubTitle(editMode)} />
        <Paper className={classes.pageContent}>
          <CustomerForm customer={customer} postCustomer= {postCustomer} />
        </Paper>
        <Notification notify={notify} setNotify={setNotify} />
        </>
    )
}

export default AddOrEditCustomer
