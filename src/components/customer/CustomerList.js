import { Paper } from '@material-ui/core'
import React from 'react'
import Customer from './Customer'

const CustomerList = ({customers, onEdit, onClickDelete}) => {

    return (
            <div style={{width: '100%', display: 'flex' }}>
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
    )
}

export default CustomerList
