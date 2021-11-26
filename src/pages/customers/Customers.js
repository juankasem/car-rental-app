import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles, Paper } from '@material-ui/core'
import CustomerList from '../../components/customer/CustomerList'
import PageHeader from '../../components/layout/PageHeader'

const useStyles = makeStyles({
    customers: {
      padding: '2rem'
    }
  })
  
const Customers = () => {
    const classes = useStyles()
    const {customers} = useSelector(state => state.customers)
    
    return (
        <>
        <PageHeader title="Müşteriler"
                    subTitle="Tüm Müşteriler"
                    buttonText="Yeni Müşteri Ekle"
                    url="/customers/new" />
                    
        <Paper className={classes.customers}>
         <CustomerList customers={customers} />
        </Paper>
        </>
    )
}

export default Customers
