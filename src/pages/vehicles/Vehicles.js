import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles, Paper } from '@material-ui/core'
import PageHeader from '../../components/layout/PageHeader'
import VehicleList from '../../components/vehicle/VehicleList'
import VehicleForm from './VehicleForm'
import { updateVehicle, deleteVehicle } from '../../store/actions/vehicles'
import Popup from '../../components/layout/Popup'
import ConfirmDialog from '../../components/layout/ConfirmDialog'
import Notification from '../../components/layout/Notification'

const useStyles = makeStyles({
    vehicles: {
      padding: '2rem'
    }
  })
  
const Vehicles = () => {
    const classes = useStyles()
    const dispatch = useDispatch();
    const {vehicles} = useSelector(state => state.vehicles)
    const [vehicleToEdit, setVehicleToEdit] = useState(null)
    const [openPopup, setOpenPopup] = useState(false)
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: ''});
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: ''});

   const openPopupToEdit = (vehicle) => {
      setOpenPopup(true)
      setVehicleToEdit(vehicle)
    }

    const onUpdate = (vehicle, resetForm) => {
          dispatch(updateVehicle(vehicle))
          setNotify({
              isOpen: true,
              message: 'Başarılı güncelledi',
              type: 'success'
            })
          
          setOpenPopup(false)
          resetForm()
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

    const showConfirmDialog = (id) => {
      setConfirmDialog({
        isOpen: true,
        title: 'Bu aracı silmek istediğinizden emin misiniz?',
        subTitle: 'bu işlemi geri alamazsınız',
        onConfirm: () => { onDelete(id)}
    })
    }

    return (
        <>
        <PageHeader title="Araçlar" 
                    subTitle="Tüm Araçlar"
                    buttonText="Yeni Araç Ekle"
                    url="/vehicles/new"  />
        <Paper className={classes.vehicles}>
          <VehicleList vehicles={vehicles}
                       onEdit={openPopupToEdit}
                       onClickDelete={showConfirmDialog} />
        </Paper>
        <Popup openPopup={openPopup}
               setOpenPopup= {setOpenPopup}
               title="Araç detayları">
         <VehicleForm vehicle={vehicleToEdit} postVehicle={onUpdate} />
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

export default Vehicles
