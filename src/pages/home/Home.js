import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    links: {
        display: 'flex',
        margin: theme.spacing(3)

    },
    link: {
        textDecoration: 'none',
        marginRight: theme.spacing(3)
    }
})
)

const Home = () => {
    const classes = useStyles()
    return (
        <div className={classes.links}>      
         <Link to='/customers' className={classes.link}>All Customers</Link>
         <Link to='/vehicles' className={classes.link}>All Vehicles</Link>
         <Link to='/vehicle-rentals' className={classes.link}>All Vehicle Rentals</Link>
        </div>
    )
}

export default Home
