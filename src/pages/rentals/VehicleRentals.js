import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles, Paper } from '@material-ui/core'
import PageHeader from '../../components/layout/PageHeader'
import VehicleRentalCard from '../../components/vehicle-rental/VehicleRentalCard'
import VehicleRentalForm from './VehicleRentalForm'
import { updateVehicleRental, deleteVehicleRental } from '../../store/actions/vehicleRentals'
import Popup from '../../components/layout/Popup'
import ConfirmDialog from '../../components/layout/ConfirmDialog'
import Notification from '../../components/layout/Notification'

const useStyles = makeStyles(theme => ({
    vehicles: {
      padding: theme.spacing(2)
    },
    notFound: {
        margin: 'auto',
        padding: theme.spacing(1),
        fontWeight: 'bold'
    }
  }))

const VehicleRentals = () => {
    const classes = useStyles()
    const dispatch = useDispatch();
    const {customers} = useSelector(state => state.customers)
    const {vehicles} = useSelector(state => state.vehicles)
    const {vehicleRentals} = useSelector(state => state.vehicleRentals)
    const [vehicleRentalToEdit, setVehicleRentalToEdit] = useState(null)
    const [openPopup, setOpenPopup] = useState(false)
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: ''});
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: ''});
    
    const openPopupToEdit = (vehicleRental) => {
        setOpenPopup(true)
        setVehicleRentalToEdit(vehicleRental)
      }
  
      const onUpdate = (rental, resetForm) => {
            dispatch(updateVehicleRental(rental))
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
          dispatch(deleteVehicleRental(id))
          setNotify({
              isOpen: true,
              message: 'Başarılı sildi',
              type: 'error'
              })
      }
  
      const showConfirmDialog = (id) => {
        setConfirmDialog({
          isOpen: true,
          title: 'Bu arac kirası silmek istediğinizden emin misiniz?',
          subTitle: 'bu işlemi geri alamazsınız',
          onConfirm: () => { onDelete(id)}
      })
      }
  
    return (
        <>
        <PageHeader title="Araç Kiralar" 
                    subTitle="Tüm Araç Kiralar"
                    buttonText="Yeni Araç kirası Ekle"
                    url="/vehicle-rentals/new"  />

        <Paper className={classes.rentals}>
            <div style={{  display: 'flex' }}>
                {(vehicleRentals && vehicleRentals.length) ? 
                 vehicleRentals.map(rental => {
                    rental.customerFullName = customers.find(customer => customer.id === rental.customerId)?.fullName
                    rental.phone = customers.find(customer => customer.id === rental.customerId)?.phone
                    rental.vehiclePlateNo = vehicles.find(vehicle => vehicle.id === rental.vehicleId)?.plateNo
                    rental.vehicleManufacturer = vehicles.find(vehicle => vehicle.id === rental.vehicleId)?.manufacturer
                    rental.vehicleModel = vehicles.find(vehicle => vehicle.id === rental.vehicleId)?.model
                  
                return <VehicleRentalCard  key={rental.id}
                                           rental={rental}
                                           onEdit= {openPopupToEdit}
                                           onClickDelete= {showConfirmDialog} />
                 }) :
                 <div className={classes.notFound}>Hiç Araç Kiralar bulunamadı</div>  
                 }
            </div>
        </Paper>

        <Popup openPopup={openPopup}
               setOpenPopup= {setOpenPopup}
               title="Araç Kirası detayları">
         <VehicleRentalForm vehicleRental={vehicleRentalToEdit} postVehicleRental={onUpdate} />
        </Popup>
        <Notification   notify={notify}
                        setNotify={setNotify} />
        <ConfirmDialog  confirmDialog={confirmDialog}
                        setConfirmDialog={setConfirmDialog} />
        </>
    )
}

export default VehicleRentals
