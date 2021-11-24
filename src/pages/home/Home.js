import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
        <div>
            This is home page
        </div>
        <div>      
         <Link to='/customers'>All Customers</Link>
         <Link to='/vehicles'>All Vehicles</Link>
        </div>
        </>
    )
}

export default Home
