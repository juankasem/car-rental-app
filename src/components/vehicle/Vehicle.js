import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { Card, makeStyles, Typography } from '@material-ui/core'
import Controls from '../controls/Controls';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import { useNavigate } from "react-router-dom";
import Popup from '../layout/Popup';
import VehicleForm from '../../pages/vehicles/VehicleForm';
import  { deleteVehicle, updateVehicle } from '../../store/actions/vehicles'
import ConfirmDialog from '../layout/ConfirmDialog';
import Notification from '../layout/Notification';


const useStyles = makeStyles({
    customer: {
        margin: '1rem',
      padding: '1rem'
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
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: ''});
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: ''});

    const postVehicle = (updatedVehicle, resetForm) => {
         dispatch(updateVehicle(updatedVehicle))
         setNotify({
            isOpen: true,
            message: 'Başarılı güncelledi',
            type: 'success'
          })

         resetForm()
         navigate('/vehicles')
     }
     
    const onDelete = (id) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        dispatch(deleteVehicle(id))
        setNotify({
            isOpen: true,
            message: 'Başarılı sildi',
            type: 'error'
            })
    }

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
                onClick={() => setOpenPopup(true)}>
                <EditOutlinedIcon fontSize="small" />
            </Controls.Button>
             <Controls.Button
                text="Sil"
                color="secondary"
                onClick={() => setConfirmDialog({
                    isOpen: true,
                    title: 'Bu aracı silmek istediğinizden emin misiniz?',
                    subTitle: 'bu işlemi geri alamazsınız',
                    onConfirm: () => { onDelete(vehicle.id)}
                })
            }>
                <CloseIcon fontSize="small" />
            </Controls.Button>
            </div>
        </Card>
        <Popup openPopup={openPopup}
               setOpenPopup= {setOpenPopup}
               title="Araç detayları">
         <VehicleForm vehicle={vehicle} postVehicle={postVehicle} />
        </Popup>
        <Notification
                      notify={notify}
                      setNotify={setNotify} />
        <ConfirmDialog
                        confirmDialog={confirmDialog}
                        setConfirmDialog={setConfirmDialog} />
        </>
    )
}

export default Vehicle
