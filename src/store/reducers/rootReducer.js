import { combineReducers } from 'redux'
import customersReducer from './customersReducer'
import vehiclesReducer from './vehiclesReducer'

const rootReducer = combineReducers({
    customers: customersReducer,
    vehicles: vehiclesReducer
})

export default rootReducer
