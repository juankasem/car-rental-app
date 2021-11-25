import React  from 'react'
import { Grid } from '@material-ui/core'
import {Form, useForm } from '../../components/custom-hooks/useForm';
import Controls from '../../components/controls/Controls';
import { getColorOptions } from '../../services/vehicles/VehicleService';

const initialFieldValues = {
    id : 0,
    plateNo: '',
    manufacturer: '', 
    model: '',
    productionYear: '',
    engineCapacity: '',
    color: '',
    OperationDate: new Date()
}

const resetForm = () => {

}

const handleSubmit = (e) => {
   e.preventDefault()

     }    

const VehicleForm = () => {
   const {values, setValues, handleInputChange} = useForm(initialFieldValues);

    return (      
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                     label="Plaka Numarasi"
                     placeholder="Plaka numarasi giriniz"
                     name="plateNo"
                     value= {values.plateNo}
                     onChange= {handleInputChange} />

                    <Controls.Input
                     label="Marka"
                     placeholder="Marka adi giriniz"
                     name="manufacturer"
                     value= {values.manufacturer}
                     onChange= {handleInputChange} />

                    <Controls.Input
                     label="Model"
                     placeholder="Model adi giriniz"
                     name="model"
                     value= {values.model}
                     onChange= {handleInputChange} />        
                     
                    <Controls.Input
                     label="Uretim Yili"
                     placeholder="Uretim Yili adi giriniz"
                     name="productionYear"
                     value= {values.productionYear}
                     onChange= {handleInputChange}
                      />         

                    <Controls.Input
                     label="Motor Kapasitesi"
                     placeholder="Motor kapasitesi giriniz"
                     name="engineCapacity"
                     value= {values.engineCapacity} 
                     onChange= {handleInputChange}/>
                </Grid>
                <Grid xs={6}>
                    <Controls.Select
                     label= "Renk"
                     placeholder="Arac Rengi giriniz"
                     name="color"
                     value= {values.color}
                     onChange= {handleInputChange}
                     options= {getColorOptions()} />  
                        
                    <Controls.DatePicker
                     label="Calisma baslama Tarihi"
                     placeholder="Calisma baslama giriniz"
                     name="operationDate"
                     value= {values.operationDate} 
                     onChange= {handleInputChange} />        
                </Grid>
                   <div>
                        <Controls.Button
                         type="submit"
                         text= "Submit" />

                        <Controls.Button
                         text= "Reset"
                         color="default"
                         onClick={resetForm}
                         />               
                    </div> 
            </Grid>
        </Form>
    )
}

export default VehicleForm
