import { Paper } from '@material-ui/core'
import React from 'react'
import Customer from './Customer'

const CustomerList = ({customers, onEdit, onClickDelete}) => {

    return (
        <Paper elevation={0} square>
            <div style={{  display: 'flex' }}>
                {(customers && customers.length) ? 
                 customers.map(customer => (
                    <Customer key={customer.id}
                              customer={customer}
                              onEdit= {onEdit}
                              onClickDelete= {onClickDelete} />
                 )) :
                 <div>Müşteri bulunamadı</div>  
                 }
            </div>
        </Paper>
    )
}

export default CustomerList
