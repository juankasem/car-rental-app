import { actionTypes } from "../actionTypes"

export const addVehicle = (vehicle) => (
 { type: actionTypes.ADD_VEHICLE,
   payload: vehicle
 }
)

export const updateVehicle = (vehicle) => (
    { type: actionTypes.UPDATE_VEHICLE,
      payload: vehicle
    }
) 

export const deleteVehicle = (id) =>(  
{ type: actionTypes.DELETE_VEHICLE,
  payload: id 
})