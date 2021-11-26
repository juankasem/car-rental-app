import React from 'react'
import Vehicle from './Vehicle'
import { Paper } from '@material-ui/core'

const VehicleList = ({vehicles, onEdit, onClickDelete}) => {

    return (
    <Paper elevation={0} square >
        <div style={{ width:'100%', display: 'flex' }}>
            {(vehicles && vehicles.length) ? 
             vehicles.map(vehicle => (
                <Vehicle key={vehicle.id} 
                         vehicle={vehicle}
                         onEdit= {onEdit}
                         onClickDelete= {onClickDelete} />
             )): 
             <div> Araç bulunamadı </div>
             }
        </div>
    </Paper>
    )
}

export default VehicleList
