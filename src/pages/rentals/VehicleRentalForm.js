import React, { useEffect }  from 'react'
import { useSelector }  from 'react-redux'
import { Grid } from '@material-ui/core'
import {Form, useForm } from '../../components/custom-hooks/useForm';
import Controls from '../../components/controls/Controls';

const initialFieldValues = {
    id : 0,
    customerId: '',
    vehicleId: '', 
    startDate: new Date(),
    endDate: new Date(),
    totalCost: 1
}

const VehicleRentalForm = (props) => {
    const {vehicleRental, postVehicleRental} = props
    const {customers} = useSelector(state => state.customers)
    const {vehicles} = useSelector(state => state.vehicles)

    const plateNos = vehicles.map(vehicle => 
                        ({value: vehicle.id,
                          title: vehicle.plateNo + ` (${vehicle.manufacturer} ${vehicle.model})`}))

    const customerFullNames = customers.map(customer => 
                        ({value: customer.id, 
                            title: customer.fullName})) 

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
            if ('customerId' in fieldValues)
            temp.customerId = fieldValues.customerId ? "" : "Bu alan gereklidir."
            if ('vehicleId' in fieldValues)
            temp.vehicleId = fieldValues.vehicleId ? "" : "Bu alan gereklidir."
            if ('startDate' in fieldValues)
            temp.startDate = fieldValues.startDate ? "" : "Bu alan gereklidir."
            if ('endDate' in fieldValues) {
                temp.endDate = fieldValues.endDate ? "" : "Bu alan gereklidir."
                if (fieldValues.endDate < fieldValues.startDate)
                temp.endDate = "bitiş tarihi, başlangıç tarihinden küçük olamaz"
            }
       
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
            else{
                setValues({
                    ...values,
                    customerId: customers[0]?.id,
                    vehicleId: vehicles[0]?.id
                })
            }
            }, [vehicleRental, setValues])
        
  
    const calculateTotalCost = () => {
        console.log('values:', values)

        if (values.endDate < values.startDate)
        return
        
        const diffInMonths = values.endDate - values.startDate    
        const diffInHours = Math.floor(diffInMonths / (1000 * 60 * 60));      
        const vehicle = vehicles.find(vehicle => vehicle.id === values.vehicleId)
        console.log('vehicle:',  vehicle)

        if (!vehicle)
        return

        const totalCost = vehicle.costPerHour * diffInHours

        setValues({
            ...values,
            totalCost
        })
        }
    
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

                    <Controls.DateTimePicker
                     label="Kira başlama Tarihi"
                     placeholder="Kira başlama tarihi giriniz"
                     name="startDate"
                     value= {values.startDate} 
                     onChange= {handleInputChange} />         
                  
                   <div style={{ display: 'flex', justifyContent:'flex-end', marginTop:'0.5rem'}}>
                        <Controls.Button
                         text= "Toplam tuttar hesapet"
                         onClick={calculateTotalCost}
                         />               
                    </div> 
                </Grid>
                <Grid item xs={6}>   
                    <Controls.Select
                     label="Müşteri Adı"
                     placeholder="Müşteri adı giriniz"
                     name="customerId"
                     value= {values.customerId}
                     onChange= {handleInputChange}
                     options= {customerFullNames}
                     error={errors.customerId} />
                        
                    <Controls.DateTimePicker
                     label="Kira son Tarihi"
                     placeholder="Kira son tarihi giriniz"
                     name="endDate"
                     value= {values.endDate} 
                     onChange= {handleInputChange}
                     error={errors.endDate} />  

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

