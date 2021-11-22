import React, { useState } from 'react'
import { Grid, TextField } from '@material-ui/core';
 
const initialFieldValues = {
    id : 0,
    manufacturer: '',
    model: '',
    productionYear: '',
    engineCapacity: '',
    color: '',
    OperateDate: new Date()
}

const AddCustomerPage = () => {

    const [values, setValues] = useState(initialFieldValues);
    return (
        <>
        <Header />
        <form>
            <Grid container>
                <Grid item>
                    <TextField
                     variant= "outlined"
                     label="Kurucu"
                     placeholder="Kurucu adi giriniz"
                     value= {values.manufacturer} />
                </Grid>
            </Grid>
        </form>
        </>
    )
}

export default AddCustomerPage
