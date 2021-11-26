import React from 'react'
import { Card, makeStyles, Typography } from '@material-ui/core'
import Controls from '../controls/Controls';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme =>({
    rental: {
      margin: theme.spacing(1),
      padding: theme.spacing(1)
    },
    buttons: {
        display: 'flex'
    }
  }))

const VehicleRentalCard = ({rental, onEdit, onClickDelete}) => {
    const classes = useStyles();
    const { id, customerFullName, phone, vehiclePlateNo,
            vehicleManufacturer, vehicleModel,
            startDate, endDate, totalCost} = rental
    
    return (
        <>
        <Card className={classes.rental}>
            <div><span>Plaka No:</span>
            <Typography
                variant="h6"
                component="div"> {vehiclePlateNo}</Typography>
                <div><span>({vehicleManufacturer} {vehicleModel})</span></div>
            </div>
                <div><span>Kiracı Adı: {customerFullName}</span></div>
                <div><span>Telefon: {phone}</span></div>
                <div><span>Başlangıç Tarihi: {startDate.toLocaleString()}</span></div>
                <div><span>Bitiş tarihi: {endDate.toLocaleString()}</span></div>
                <div><span>Toplam Tuttar: {totalCost} TL</span></div>

            <div className={classes.buttons}>
               <Controls.ActionButton
                    text="Düzenle"
                    color="primary"
                    onClick={() => onEdit(rental)}>
                    <EditOutlinedIcon fontSize="small" />
               </Controls.ActionButton>
             <Controls.ActionButton
                text="Sil"
                color="secondary"
                onClick={() => onClickDelete(rental.id)}>
                <CloseIcon fontSize="small" />
            </Controls.ActionButton>
            </div>
        </Card>
     </>
    )
}

export default VehicleRentalCard
