import React from 'react'
import Vehicle from './Vehicle'
import { Paper } from '@material-ui/core'

const VehicleList = ({vehicles, onEdit, onClickDelete}) => {

    return (
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
    )
}

export default VehicleList
