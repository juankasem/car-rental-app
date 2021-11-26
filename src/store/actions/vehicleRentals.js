import { actionTypes } from "../actionTypes"

export const addVehicleRental = (vehicleRental) => (
 { type: actionTypes.ADD_VEHICLE_RENTAL,
   payload: vehicleRental
 }
)

export const updateVehicleRental = (vehicleRental) => (
    { type: actionTypes.UPDATE_VEHICLE_RENTAL,
      payload: vehicleRental
    }
) 

export const deleteVehicleRental = (id) =>(  
{ type: actionTypes.DELETE_VEHICLE_RENTAL,
  payload: id 
})