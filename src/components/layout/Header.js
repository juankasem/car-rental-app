import React from 'react'
import { AppBar, Grid, InputBase, makeStyles, Toolbar } from '@material-ui/core'

const useStyles = makeStyles({
     root: {
     backgroundColor: '#fff'
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
                <Grid item sm={6} >
                    <InputBase className={classes.searchInput}
                    placeholder="Search vehicles"
                    />
                </Grid> 
                <Grid item sm={6}  >
                </Grid> 
             </Grid>    
           </Toolbar>
       </AppBar>
    )
}

export default Header
