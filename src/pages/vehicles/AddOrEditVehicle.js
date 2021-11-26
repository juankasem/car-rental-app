import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { makeStyles, Paper } from '@material-ui/core'
import PageHeader from '../../components/layout/PageHeader'
import VehicleForm from './VehicleForm'
import { useParams } from 'react-router';
import { addVehicle, updateVehicle } from '../../store/actions/vehicles'

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
})
)

const getSubTitle = (editMode = false) =>
  !editMode ? "Yeni Araç Ekle" : "Mevcut Araç Güncelleme"

const AddOrEditVehicle = () => {
    const classes = useStyles();
    const [editMode, setEditMode] = useState(false);
    const [vehicle, setVehicle] = useState(null);
    const {vehicles} = useSelector(state => state.vehicles)
    const params = useParams()
    const  dispatch = useDispatch();
    const navigate = useNavigate();

    const postVehicle = (vehicle, resetForm) => {
        if (vehicle.id === 0){
            vehicle.id = vehicles.length + 1
            dispatch(addVehicle(vehicle))
        }
          else
          dispatch(updateVehicle(vehicle))
 
         resetForm()
         navigate('/vehicles')
     }

     useEffect(() => {
        if (params.id){
            setEditMode(true)
            const vehicle = vehicles.find(vehicle => vehicle.id === +params.id)
            setVehicle(vehicle)
        }
    }, [vehicles, params])

    return (
        <>
        <PageHeader title="Araç"
         subTitle={getSubTitle(editMode)} />
        <Paper className={classes.pageContent}>
         <VehicleForm vehicle={vehicle} postVehicle={postVehicle} />
        </Paper>
        </>
    )
}

export default AddOrEditVehicle
