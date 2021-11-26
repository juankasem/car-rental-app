import { Paper } from '@material-ui/core'
import React from 'react'
import Customer from './Customer'

const CustomerList = ({customers}) => {

    return (
        <Paper elevation={0} square>
            <div style={{  display: 'flex', justifyContent: 'space-between' }}>
                {(customers && customers.length) ? 
                 customers.map(customer => (
                    <Customer key={customer.id} customer={customer} />
                 )) :
                 <div>Müşteri bulunamadı</div>  
                 }
            </div>
        </Paper>
    )
}

export default CustomerList
