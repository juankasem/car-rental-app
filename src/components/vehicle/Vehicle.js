import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { Card, makeStyles, Typography } from '@material-ui/core'
import Controls from '../controls/Controls';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import { useNavigate } from "react-router-dom";
import Popup from '../layout/Popup';
import VehicleForm from '../../pages/vehicles/VehicleForm';
import  { updateVehicle } from '../../store/actions/vehicles'


const useStyles = makeStyles({
    customers: {
      padding: '2rem'
    },
    buttons: {
        display: 'flex'
    }
  })

const Vehicle = ({vehicle}) => {
    const classes = useStyles();
    const {id, plateNo, manufacturer, model, productionYear,
            engineCapacity, color, costPerHour} = vehicle
    const navigate = useNavigate();
    const [openPopup, setOpenPopup] = useState(false)
    const dispatch = useDispatch();
    
    const postVehicle = (updatedVehicle, resetForm) => {
         dispatch(updateVehicle(updatedVehicle))
 
         resetForm()
         navigate('/vehicles')
     }

    return (
        <>
        <Card>
            <Typography
            variant="h6"
            component="div">{manufacturer} {model}</Typography>   
            <div><span>Uretim Yili: </span><b>{productionYear}</b></div>
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
                text="Edit"
                color="primary"
                onClick={() => setOpenPopup(true)}>
                <EditOutlinedIcon fontSize="small" />
            </Controls.Button>
             <Controls.Button
                text="Delete"
                color="secondary">
                <CloseIcon fontSize="small" />
            </Controls.Button>
            </div>
        </Card>
        <Popup openPopup={openPopup}
               setOpenPopup= {setOpenPopup}
               title="Arac Detayli">
         <VehicleForm vehicle={vehicle} postVehicle={postVehicle} />
        </Popup>
        </>
    )
}

export default Vehicle
