import React from 'react'
import { Card, Typography } from '@material-ui/core'

const Vehicle = ({vehicle}) => {
    const { plateNo, manufacturer, model, productionYear,
            engineCapacity, color, status} = vehicle

    return (
        <Card>
            <Typography
            variant="h4"
            component="div">{manufacturer}</Typography>   
            <div><span>{model}</span></div>
            <div><span>{productionYear}</span></div>
            <div><span>{engineCapacity}</span></div>
            <div><span>{color}</span></div>
            <div><span>{status}</span></div>
            <Typography
            variant="h6"
            component="div"
            >{plateNo}
            </Typography>
        </Card>
    )
}

export default Vehicle
