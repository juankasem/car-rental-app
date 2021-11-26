import React from 'react'
import { Card, makeStyles, Typography } from '@material-ui/core'
import Controls from '../controls/Controls';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';



const useStyles = makeStyles({
    customer: {
        margin: '1rem',
      padding: '1rem'
    },
    buttons: {
        display: 'flex'
    }
  })

const Vehicle = ({vehicle, onEdit, onClickDelete}) => {
    const classes = useStyles();
    const {id, plateNo, manufacturer, model, productionYear,
            engineCapacity, color, costPerHour} = vehicle

    return (
        <>
        <Card className={classes.customer}>
            <Typography
            variant="h6"
            component="div">{manufacturer} {model}</Typography>   
            <div><span>üretim yılı: </span><b>{productionYear}</b></div>
            <div><span>Motor kapasitesi: </span><b>{engineCapacity}</b></div>
            <div><span>Renk: </span><b>{color}</b></div>
            <div><span>Saat ücreti: </span><b>{costPerHour} TL</b></div>
            <div>
            <span>Plaka No:</span>
            <Typography
            variant="h6"
            component="div"
            > {plateNo}
            </Typography>
            </div>
            
            <div className={classes.buttons}>
            <Controls.Button
                text="Düzenle"
                color="primary"
                onClick={() => onEdit(vehicle)}>
                <EditOutlinedIcon fontSize="small" />
            </Controls.Button>
             <Controls.Button
                text="Sil"
                color="secondary"
                onClick={() => onClickDelete(vehicle.id)
            }>
                <CloseIcon fontSize="small" />
            </Controls.Button>
            </div>
        </Card>
        </> 
    )
}

export default Vehicle
