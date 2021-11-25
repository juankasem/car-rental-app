import { actionTypes } from "../actionTypes"

export const getAllVehicles = () =>  
({ type: actionTypes.GET_VEHICLES })

export const addvehicle = (vehicle) => (
 { type: actionTypes.ADD_VEHICLE,
   payload: vehicle
 }
)

export const updateVehicle = (vehicle) => (
    { type: actionTypes.UPDATE_VEHICLE,
      payload: vehicle
    }
) 

export const deletevehicle = (id) =>(  
{ type: actionTypes.DELETE_VEHICLE,
  payload: id 
})