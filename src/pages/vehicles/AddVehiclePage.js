import React, { useState } from 'react'
import { Grid, Topography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
         '& MuiformControl-root': {
             width : '80%',
             margin: theme.spacing(1)
         }
    }
})
)

const initialFieldValues = {
    id : 0,
    manufacturer: '',
    model: '',
    productionYear: '',
    engineCapacity: '',
    color: '',
    OperationDate: new Date(),
    isAvailable : false
}

const AddVehiclePage = () => {
   const [values, setValues] = useState(initialFieldValues);
   const classes = useStyles();

   const handleInputChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
   }

    return (
        <>
        <Header />
        
        <form className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                     variant= "outlined"
                     label="Marka"
                     placeholder="Marka adi giriniz"
                     name="manufacturer"
                     value= {values.manufacturer}
                     onChange= {handleInputChange} />

                    <TextField
                     variant= "outlined"
                     label="Model"
                     placeholder="Model adi giriniz"
                     name="model"
                     value= {values.model}
                     onChange= {handleInputChange} />        
                     
                    <TextField
                     variant= "outlined"
                     label="Uretim Yili"
                     placeholder="Uretim Yili adi giriniz"
                     name="productionYear"
                     value= {values.productionYear}
                     onChange= {handleInputChange}
                      />         
                     
                    <TextField
                     variant= "outlined"
                     label="Motor Kapasitesi"
                     placeholder="Motor kapasitesi giriniz"
                     name="engineCapacity"
                     value= {values.engineCapacity} 
                     onChange= {handleInputChange}/>
                </Grid>
                <Grid xs={6}>
                    <Select
                     variant="outlined"
                     label= "Renk"
                     placeholder="Arac Rengi giriniz"
                     value= {values.color}
                     onChange= {handleInputChange} />  
                        
                    <TextField
                     variant= "outlined"
                     label="Calisma baslama Tarihi"
                     placeholder="Calisma baslama giriniz"
                     name="operationDate"
                     value= {values.operationDate} 
                     onChange= {handleInputChange} />      
                     
                    <RadioGroup
                     variant= "outlined"
                     label="Musaigiti Durumu"
                     placeholder="Musaigiti Durumu giriniz"
                     value= {values.isAvailable}
                     onChange= {handleInputChange} />   
                </Grid>
            </Grid>
        </form>
        </>
    )
}

export default AddVehiclePage
