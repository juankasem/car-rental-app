import { actionTypes } from "../actionTypes"

export const addCustomer = (customer) => (
 { type: actionTypes.ADD_CUSTOMER,
   payload: customer
 }
)

export const updateCustomer = (customer) => (
    { type: actionTypes.UPDATE_CUSTOMER,
      payload: customer
    }
) 

export const deleteCustomer = (id) =>(  
{ type: actionTypes.DELETE_CUSTOMER,
  payload: id 
})