import React from 'react'
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PageHeader from '../../components/layout/PageHeader';
import CustomerForm from './CustomerForm';
 
const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
})
)
const AddCustomer = () => {
    const classes = useStyles();

    return (
        <>
        <PageHeader title="Musteriler" subTitle="Yeni Musteri Ekle" />
        <Paper className={classes.pageContent}>
          <CustomerForm />
        </Paper>
        </>
    )
}

export default AddCustomer
