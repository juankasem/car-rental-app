import React from 'react'
import { Card, makeStyles, Typography } from '@material-ui/core'
import Controls from '../controls/Controls';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import { useNavigate } from "react-router-dom";

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
    const { plateNo, manufacturer, model, productionYear,
            engineCapacity, color} = vehicle
    const navigate = useNavigate();

    return (
        <Card>
            <Typography
            variant="h6"
            component="div">{manufacturer} {model}</Typography>   
            <div><span>Uretim Yili: {productionYear}</span></div>
            <div><span>Motor kapasitesi: {engineCapacity}</span></div>
            <div><span>Renk: {color}</span></div>
            <Typography
            variant="h6"
            component="div"
            >{plateNo}
            </Typography>
            <div className={classes.buttons}>
            <Controls.ActionButton
                text="Edit"
                color="primary"
                onClick={() => navigate(`/vehicles/edit/${id}`)}>
                <EditOutlinedIcon fontSize="small" />
            </Controls.ActionButton>
             <Controls.ActionButton
                text="Delete"
                color="secondary">
                <CloseIcon fontSize="small" />
            </Controls.ActionButton>
            </div>
        </Card>
    )
}

export default Vehicle
