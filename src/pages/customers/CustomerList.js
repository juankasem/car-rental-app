import { Paper } from '@material-ui/core'
import React from 'react'
import Customer from '../../components/customer/Customer'

const CustomerList = ({customers}) => {

    return (
        <Paper elevation={0} square>
            <div>
                {(customers && customers.length) ? 
                 customers.map(customer => (
                    <Customer key={customer.id} customer={customer} />
                 )) :
                 <div>No customers found</div>  
                 }
            </div>
        </Paper>
    )
}

export default CustomerList
