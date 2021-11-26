import React, {useEffect}  from 'react'
import { Grid } from '@material-ui/core'
import {Form, useForm } from '../../components/custom-hooks/useForm';
import Controls from '../../components/controls/Controls';
import { getEngineCapacityOptions, getColorOptions } from '../../services/vehicles/VehicleService';

const initialFieldValues = {
    id : 0,
    plateNo: '',
    manufacturer: '', 
    model: '',
    productionYear: '',
    engineCapacity: '',
    color: '',
    operationDate: new Date(),
    costPerHour: 1
}


const VehicleForm = (props) => {
    const {vehicle, postVehicle} = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
            if ('plateNo' in fieldValues)
            temp.plateNo = fieldValues.plateNo ? "" : "Bu alan gereklidir."
            if ('manufacturer' in fieldValues)
            temp.manufacturer = fieldValues.manufacturer ? "" : "Bu alan gereklidir."
            if ('model' in fieldValues)
            temp.model = fieldValues.model ? "" : "Bu alan gereklidir."
            if ('productionYear' in fieldValues)
            temp.productionYear = fieldValues.productionYear ? "" : "Bu alan gereklidir."
       
        setErrors({
            ...temp
        })
    
        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
        }
    
    const {values, setValues, handleInputChange,
           resetForm, errors, setErrors} = useForm(initialFieldValues, true, validate);
    
    useEffect(() => {
    if (vehicle){
        setValues({...vehicle})
    }
    }, [vehicle, setValues])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (validate()){
            postVehicle(values, resetForm)
        }
    } 

    return (      
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                     label="Plaka Numarası"
                     placeholder="Plaka numarası giriniz"
                     name="plateNo"
                     value= {values.plateNo}
                     onChange= {handleInputChange}
                     error={errors.plateNo} />

                    <Controls.Input
                     label="Marka"
                     placeholder="Marka adı giriniz"
                     name="manufacturer"
                     value= {values.manufacturer}
                     onChange= {handleInputChange}
                     error={errors.manufacturer} />

                    <Controls.Input
                     label="Model"
                     placeholder="Model adi giriniz"
                     name="model"
                     value= {values.model}
                     onChange= {handleInputChange}
                     error={errors.model} />        
                     
                    <Controls.Input
                     label="Üretim Yılı"
                     placeholder="Üretim Yılı adı giriniz"
                     name="productionYear"
                     value= {values.productionYear}
                     onChange= {handleInputChange}
                     error={errors.productionYear} />         
                </Grid>
                <Grid xs={6}>
                    <Controls.Select
                     label="Motor Kapasitesi"
                     placeholder="Motor kapasitesi giriniz"
                     name="engineCapacity"
                     value= {values.engineCapacity} 
                     onChange= {handleInputChange}
                     options= {getEngineCapacityOptions()} />

                    <Controls.Select
                     label= "Renk"
                     placeholder="Araç Rengi giriniz"
                     name="color"
                     value= {values.color}
                     onChange= {handleInputChange}
                     options= {getColorOptions()} />  
                        
                     <Controls.DatePicker
                     label="Calışma başlama Tarihi"
                     placeholder="Calışma başlama giriniz"
                     name="operationDate"
                     value= {values.operationDate} 
                     onChange= {handleInputChange} />  

                    <Controls.Input
                    label="Saat ücreti (TL)"
                    type="number"
                    inputProps={{ min: 1 }}
                    placeholder="Saat ücreti adı giriniz"
                    name="costPerHour"
                    value= {values.costPerHour}
                    onChange= {handleInputChange} />    
                </Grid>
                   <div style={{margin: 'auto'}}>
                        <Controls.Button
                         type="submit"
                         color="primary"
                         text= "Tamam" />

                        <Controls.Button
                         text= "Sıfırla"
                         onClick={resetForm}
                         />               
                    </div> 
            </Grid>
        </Form>
    )
}

export default VehicleForm
