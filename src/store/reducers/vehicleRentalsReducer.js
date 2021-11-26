import { actionTypes } from '../actionTypes'

const initialState = {
  vehicleRentals: []
} 

const vehicleRentalsReducer = (state = initialState, action ) => {
    
    switch(action.type) {
        case actionTypes.ADD_VEHICLE_RENTAL:
            return{
                vehicleRentals: [...state.vehicleRentals, action.payload]
            }

        case actionTypes.UPDATE_VEHICLE_RENTAL:
            return{
                vehicleRentals: state.vehicleRentals.map(vehicleRental => 
                                vehicleRental.id === action.payload.id ? 
                                action.payload : vehicleRental
                                )
            }

        case actionTypes.DELETE_VEHICLE_RENTAL:
            return{
                vehicleRentals: state.vehicleRentals.filter(vehicleRental => 
                                vehicleRental.id !== action.payload)
             }

        default:
        return state
    }
}
 
export default vehicleRentalsReducer