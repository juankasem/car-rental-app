import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useNavigate } from "react-router-dom";
import Controls from '../controls/Controls';

const useStyles = makeStyles({
    sideMenu: {
     display: 'flex',
     flexDirection: 'column',
     paddingTop:"50px",
     position: 'absolute',
     left: 0,
     width: '240px',
     height: '100%',
     backgroundColor: '#253053'
    }
})

const SideMenu = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
    <div className={classes.sideMenu}>
         <Controls.Button
          text="Ana Sayfa"
          onClick={() => navigate('/') }>
        </Controls.Button>  
        <Controls.Button
          text="Tüm Müşteriler"
          onClick={() => navigate('/customers') }>
        </Controls.Button>  
        <Controls.Button
          text="Yeni Müşteri Ekle"
          onClick={() => navigate('/customers/new') }>
        </Controls.Button> 
        <Controls.Button
          text="Tüm Araçlar"
          onClick={() => navigate('/vehicles') }>
        </Controls.Button>  
        <Controls.Button
          text="Yeni Araç Ekle"
          onClick={() => navigate('/vehicles/new') }>
        </Controls.Button>   
        <Controls.Button
          text="Tüm Kiralar Araç "
          onClick={() => navigate('/vehicle-rentals') }>
        </Controls.Button>
        <Controls.Button
          text="Kira Araç Ekle"
          onClick={() => navigate('/vehicle-rentals/new') }>
        </Controls.Button>     
     </div>
    )
}

export default SideMenu
