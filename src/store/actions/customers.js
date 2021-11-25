import { actionTypes } from "../actionTypes"

export const getAllCustomers = () =>  
({ type: actionTypes.GET_CUSTOMERS })

export const addCustomer = (customer) => (
 { type: actionTypes.ADD_CUSTOMER,
   payload: customer
 }
)

export const updateCustomer = (customer) => (
    { type: actionTypes.ADD_CUSTOMER,
      payload: customer
    }
) 

export const deleteCustomer = (id) =>(  
{ type: actionTypes.ADD_CUSTOMER,
  payload: id 
})