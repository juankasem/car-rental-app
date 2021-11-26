import { actionTypes } from '../actionTypes'
import { getAllCustomers } from '../../services/customers/CustomerService'

const customers = getAllCustomers()

const initialState = {
  customers
} 

const customersReducer = (state = initialState, action ) => {
    
    switch(action.type) {
        case actionTypes.ADD_CUSTOMER:
            return{
                customers: [...state.customers, action.payload]
            }

        case actionTypes.UPDATE_CUSTOMER:
            return{
                customers: state.customers.map(customer => 
                    customer.id === action.payload.id ? 
                     action.payload : customer
                    )
            }

        case actionTypes.DELETE_CUSTOMER:
            return{
                customers: state.customers.filter(customer => 
                    customer.id !== action.payload)
             }

        default:
        return state
    }
}
 
export default customersReducer
