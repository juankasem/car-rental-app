import { Paper } from '@material-ui/core'
import React from 'react'
import PageHeader from '../../components/layout/PageHeader'
import VehicleForm from './VehicleForm'

const AddVehicle = () => {
    return (
        <>
        <PageHeader title="Arac" subTitle="Yeni Arac forma" />
        <Paper>
         <VehicleForm />
        </Paper>
        </>
    )
}

export default AddVehicle
