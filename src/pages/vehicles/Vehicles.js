import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles, Paper } from '@material-ui/core'
import PageHeader from '../../components/layout/PageHeader'
import VehicleList from '../../components/vehicle/VehicleList'

const useStyles = makeStyles({
    vehicles: {
      padding: '2rem'
    }
  })
  
const Vehicles = () => {
    const classes = useStyles()
    const {vehicles} = useSelector(state => state.vehicles)
    
    return (
        <>
        <PageHeader title="Araçlar" 
                    subTitle="Tüm Araçlar"
                    buttonText="Yeni Araç Ekle"
                    url="/vehicles/new"  />
        <Paper className={classes.vehicles}>
          <VehicleList vehicles={vehicles} />
        </Paper>
       
        </>
    )
}

export default Vehicles
