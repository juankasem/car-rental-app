import { combineReducers } from 'redux'
import customersReducer from './customersReducer'
import vehicleRentalsReducer from './vehicleRentalsReducer'
import vehiclesReducer from './vehiclesReducer'

const rootReducer = combineReducers({
      customers: customersReducer,
      vehicles: vehiclesReducer,
      vehicleRentals: vehicleRentalsReducer
})

export default rootReducer
