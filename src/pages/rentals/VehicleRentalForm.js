import React, { useEffect }  from 'react'
import { useSelector }  from 'react-redux'
import { Grid } from '@material-ui/core'
import {Form, useForm } from '../../components/custom-hooks/useForm';
import Controls from '../../components/controls/Controls';


const initialFieldValues = {
    id : 0,
    customerId: 0,
    vehicleId: 0, 
    startDate: new Date(),
    endDate: new Date(),
    totalCost: 1
}

const VehicleRentalForm = (props) => {
    const {vehicleRental, postVehicleRental} = props
    const {customers} = useSelector(state => state.customers)
    const {vehicles} = useSelector(state => state.vehicles)

    const customerFullNames = customers.map(customer => 
                             ({value: customer.id, 
                               title: customer.fullName})) 
        
    const plateNos = vehicles.map(vehicle => 
                        ({value: vehicle.id,
                          title: vehicle.plateNo + ` (${vehicle.manufacturer} ${vehicle.model})`}))
        
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
            if ('customerId' in fieldValues)
            temp.customerId = fieldValues.customerId ? "" : "Bu alan gereklidir."
            if ('vehicleId' in fieldValues)
            temp.vehicleId = fieldValues.vehicleId ? "" : "Bu alan gereklidir."
            if ('startDate' in fieldValues)
            temp.startDate = fieldValues.startDate ? "" : "Bu alan gereklidir."
            if ('endDate' in fieldValues)
            temp.endDate = fieldValues.endDate ? "" : "Bu alan gereklidir."
       
        setErrors({
            ...temp
        })
    
        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
        }
    
        const {values, setValues, handleInputChange,
           resetForm, errors, setErrors} = useForm(initialFieldValues, true, validate);
    
    useEffect(() => {
        if (vehicleRental){
            setValues(vehicleRental)
        }
        }, [vehicleRental, setValues])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (validate()){
            postVehicleRental(values, resetForm)
        }  
    } 

    return (      
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Select
                     label="Plaka Numarası"
                     placeholder="Plaka numarası giriniz"
                     name="vehicleId"
                     value= {values.vehicleId}
                     onChange= {handleInputChange}
                     options= {plateNos}
                     error={errors.vehicleId} />

                    <Controls.DatePicker
                     label="Kira başlama Tarihi"
                     placeholder="Kira başlama tarihi giriniz"
                     name="startDate"
                     value= {values.startDate} 
                     onChange= {handleInputChange} />         
                </Grid>
                <Grid xs={6}>   
                    <Controls.Select
                     label="Müşteri Adı"
                     placeholder="Müşteri adı giriniz"
                     name="customerId"
                     value= {values.customerId}
                     onChange= {handleInputChange}
                     options= {customerFullNames}
                     error={errors.customerId} />
                        
                    <Controls.DatePicker
                     label="Kira son Tarihi"
                     placeholder="Kira son tarihi giriniz"
                     name="endDate"
                     value= {values.endDate} 
                     onChange= {handleInputChange} />  

                    <Controls.Input
                     label="Toplam Tuttar (TL)"
                     type="number"
                     inputProps={{ min: 1 }}
                     placeholder="Toplam tuttarı adı giriniz"
                     name="totalCost"
                     value= {values.totalCost}
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

export default VehicleRentalForm

