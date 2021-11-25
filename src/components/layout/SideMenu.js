import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    sideMenu: {
     display: 'flex',
     flexDirection: 'column',
     padding:0,
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
         <button type="button" onClick={() => navigate('/') }>
           Go home
        </button>       
     </div>
    )
}

export default SideMenu
