import { createTheme, CssBaseline, makeStyles, MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/layout/Header';
import SideMenu from '../components/layout/SideMenu';
import Home from '../pages/home/Home';
import Vehicles from '../pages/vehicles/Vehicles';
import Customers from '../pages/customers/Customers';
import AddOrEditCustomer from '../pages/customers/AddOrEditCustomer';
import AddOrEditVehicle from '../pages/vehicles/AddOrEditVehicle';

import './App.css';
import VehicleRentals from '../pages/rentals/VehicleRentals';
import AddVehicleRental from '../pages/rentals/AddVehicleRental';

const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126"
    },
    background: {
      default: "#f4f5fd"
    }
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      }
    }
  },
  props: {
    MuiIconButton: {
      disableRipple: true
    }
  }
})

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '240px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
    <Router>
    <SideMenu />
    <div className={classes.appMain}>
     <Header />
       <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/vehicles' element={<Vehicles />} exact />
        <Route path='/vehicles/new' element={<AddOrEditVehicle />}/>
        <Route path='/vehicles/edit/:id' element={<AddOrEditVehicle />} />
        <Route path='/customers' element={<Customers />} exact />
        <Route path='/customers/new' element={<AddOrEditCustomer />}  />
        <Route path='/customers/edit/:id' element={<AddOrEditCustomer />} />
        <Route path='/vehicle-rentals' element={<VehicleRentals />} exact />
        <Route path='/vehicle-rentals/new' element={<AddVehicleRental />}  />
       </Routes>
      </div>
      </Router>
     <CssBaseline />
    </MuiThemeProvider>
  );
}

export default App;
