import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { makeStyles, Paper } from '@material-ui/core'
import PageHeader from '../../components/layout/PageHeader'
import VehicleRentalForm from './VehicleRentalForm'
import { addVehicleRental } from '../../store/actions/vehicleRentals'
import Notification from '../../components/layout/Notification';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
})
)

const AddVehicleRental = () => {
    const classes = useStyles();
    const {vehicleRentals} = useSelector(state => state.vehicleRentals)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: ''});
   
    const postVehicleRental = (vehicleRental, resetForm) => {
            vehicleRental.id = vehicleRentals.length + 1
            dispatch(addVehicleRental(vehicleRental))
            setNotify({
                isOpen: true,
                message: 'Başarılı ekledi',
                type: 'success'
              })
        
         resetForm()
         navigate('/vehicle-rentals')
     }

    return (
        <>
        <PageHeader title="Araç Kirası"
         subTitle="Yeni Araç Kirası" />
        <Paper className={classes.pageContent}>
         <VehicleRentalForm  postVehicleRental={postVehicleRental} />
        </Paper>
        <Notification notify={notify} setNotify={setNotify} />
        </>
    )
}

export default AddVehicleRental
