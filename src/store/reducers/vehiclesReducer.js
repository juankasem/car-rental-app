import { actionTypes } from '../actionTypes'
import { getAllVehicles } from '../../services/vehicles/VehicleService'

const vehicles = getAllVehicles()

const initialState = {
  vehicles 
} 

const vehiclesReducer = (state = initialState, action ) => {

        switch(action.type) {
            case actionTypes.GET_VEHICLES:
            return{
                ...state
            }

            case actionTypes.ADD_VEHICLE:
                return{
                    vehicles: [...state.vehicles, action.vehicle]
                }

            case actionTypes.UPDATE_VEHICLE:
                return{
                    vehicles: state.vehicles.map(vehicle => 
                        vehicle.id === action.vehicle.id ? 
                         action.vehicle : vehicle
                        )
                }

            case actionTypes.DELETE_VEHICLE:
                return{
                    vehicles: state.vehicles.filter(vehicle => 
                        vehicle.id !== action.vehicle.id)             
                 }

            default:
            return state
        }
}

export default vehiclesReducer