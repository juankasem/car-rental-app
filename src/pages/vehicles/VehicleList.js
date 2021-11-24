import React from 'react'
import Vehicle from '../../components/vehicle/Vehicle'
import { Paper } from '@material-ui/core'

const VehicleList = ({vehicles}) => {
    return (
    <Paper elevation={0} square>
        <div>
            {(vehicles && vehicles.length) ? 
             vehicles.map(vehicle => (
                <Vehicle key={vehicle.id} vehicle={vehicle} />
             )): 
             <div>No vehicles found </div>
             }
        </div>
    </Paper>
    )
}

export default VehicleList
