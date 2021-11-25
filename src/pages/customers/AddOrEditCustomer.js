import React, { useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PageHeader from '../../components/layout/PageHeader';
import CustomerForm from './CustomerForm';
import { useParams } from 'react-router';
import { addCustomer, updateCustomer } from '../../store/actions/customers';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
})
)

const getSubTitle = (editMode = false) =>
  !editMode ? "Yeni Musteri Ekle" : "Mevcut Musteri Guncelleme"



const AddOrEditCustomer = () => {
    const classes = useStyles();
    const [editMode, setEditMode] = useState(false);
    const [customer, setCustomer] = useState(null);
    const {customers} = useSelector(state => state.customers)
    const params = useParams()
    const  dispatch = useDispatch();
    const navigate = useNavigate();

    const postCustomer = (customer, resetForm) => {
       if (customer.id === 0)
         dispatch(addCustomer(customer))
         else
         dispatch(updateCustomer(customer))

        resetForm()
        navigate('/customers')
    }
    
    useEffect(() => {
        console.log('params:', params)
        if (params.id){
            setEditMode(true)
            const customer = customers.find(customer => customer.id === params?.id)
            console.log('customer:', customer)
            setCustomer(customer)
        }
    }, [])

    return (
        <>
        <PageHeader title="Musteriler"
         subTitle={getSubTitle(editMode)} />
        <Paper className={classes.pageContent}>
          <CustomerForm customer={customer} postCustomer= {postCustomer} />
        </Paper>
        </>
    )
}

export default AddOrEditCustomer
