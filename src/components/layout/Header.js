import React from 'react'
import { AppBar, Grid, Typography, InputBase, makeStyles, Toolbar } from '@material-ui/core'

const useStyles = makeStyles({
     root: {
     backgroundColor: '#fff'
    },
    title: {
     color: '#000'
    },
    searchInput: {
        opacity: '0.6',
        padding: '0 8px',
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: '8px'
        }
    }
})

const Header = () => {
    const classes = useStyles();

    return (
       <AppBar position="static" className={classes.root}>
           <Toolbar>
             <Grid container>       
                <Grid item >
                    <InputBase className={classes.searchInput}
                    placeholder="Search vehicles"
                    />
                </Grid>   
                <Grid sm={6}>
                    <Typography className={classes.title} variant='h4' >
                     Araç Kiralama Sistemi
                     </Typography>
                   </Grid>       
                <Grid item>
                </Grid> 
             </Grid>    
           </Toolbar>
       </AppBar>
    )
}

export default Header
