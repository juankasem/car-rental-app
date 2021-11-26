import { actionTypes } from '../actionTypes'
import { getAllVehicles } from '../../services/vehicles/VehicleService'

const vehicles = getAllVehicles()

const initialState = {
  vehicles 
} 

const vehiclesReducer = (state = initialState, action ) => {

        switch(action.type) {
            case actionTypes.ADD_VEHICLE:
                return{
                    vehicles: [...state.vehicles, action.payload]
                }

            case actionTypes.UPDATE_VEHICLE:
                return{
                    vehicles: state.vehicles.map(vehicle => 
                        vehicle.id === action.payload.id ? 
                         action.payload : vehicle
                        )
                }

            case actionTypes.DELETE_VEHICLE:
                return{
                    vehicles: state.vehicles.filter(vehicle => 
                        vehicle.id !== action.payload.id)             
                 }

            default:
            return state
        }
}

export default vehiclesReducer