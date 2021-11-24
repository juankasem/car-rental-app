import { createTheme, CssBaseline, makeStyles, MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/layout/Header';
import SideMenu from '../components/layout/SideMenu';
import AddCustomer from '../pages/customers/AddCustomer';
import CustomerList from '../pages/customers/CustomerList';
import Home from '../pages/home/Home';
import AddVehicle from '../pages/vehicles/AddVehicle';
import VehicleList from '../pages/vehicles/VehicleList';
import { vehicles } from '../services/vehicles/VehicleService';
import './App.css';

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
      disablePipple: true
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
    <SideMenu />
    <div className={classes.appMain}>
     <Header />
     <Router>
       <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/vehicles' element={<VehicleList vehicles={vehicles}/>} exact />
        <Route path='/vehicles/new' element={<AddVehicle/>}/>
        <Route path='/vehicles/edit/:id' element={<AddVehicle />} />
        <Route path='/customers' element={<CustomerList/>} exact />
        <Route path='/customers/new' element={<AddCustomer/>}  />
        <Route path='/customers/edit?:id' element={<AddCustomer/>} />
       </Routes>
      </Router>
      </div>
     <CssBaseline />
    </MuiThemeProvider>
  );
}

export default App;
