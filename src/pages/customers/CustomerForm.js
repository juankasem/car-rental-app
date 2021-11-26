import React, { useEffect} from 'react'
import { Grid } from '@material-ui/core'
import { useForm, Form } from '../../components/custom-hooks/useForm'
import  Controls  from '../../components/controls/Controls'

const initialFieldValues = {
    id : 0,
    fullName: '',
    age: 18, 
    email: '',
    phone: '',
    gender: 'Erkek',
    registrationDate: new Date(),
    address: ''
}

const genderOptions = [{value: 'Erkek', title: 'Erkek'},
{value: 'Kadın', title: 'Kadın'},
{value: 'Diğer', title: 'Diğer'}]

const CustomerForm = (props) => {
   const {customer, postCustomer} = props
     


   const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('fullName' in fieldValues)
        temp.fullName = fieldValues.fullName ? "" : "Bu alan gereklidir"
    if ('email' in fieldValues)
        temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "E-posta geçerli değil"
    if ('phone' in fieldValues)
        temp.phone = fieldValues.phone.length > 9 ? "" : "Minimum 10 sayı gereklidir"
   
    setErrors({
        ...temp
    })

    if (fieldValues === values)
        return Object.values(temp).every(x => x === "")
    }

    const {values, setValues, handleInputChange, 
           resetForm, errors, setErrors} = useForm(initialFieldValues, true, validate)

    useEffect(() => {
    if (customer){
        setValues(customer)
    }
    }, [customer, setValues])

   const handleSubmit = e => {
    e.preventDefault()
  
    if (validate()){
        postCustomer(values, resetForm)
    }
  }
  
    return (    
        <Form onSubmit={handleSubmit}>    
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                     label="Müşteri Adı"
                     placeholder="Müşteri Adı giriniz"
                     name="fullName"
                     value= {values.fullName}
                     onChange= {handleInputChange}
                     error={errors.fullName} />

                    <Controls.Input
                     label="Yaş"
                     type="number"
                     inputProps={{ min: 18 }}
                     placeholder="Yaş giriniz"
                     name="age"
                     value= {values.age}
                     onChange= {handleInputChange} />

                    <Controls.Input
                     label="E-posta"
                     placeholder="E-posta giriniz"
                     name="email"
                     value= {values.email}
                     onChange= {handleInputChange}
                     error={errors.email} />        
                     
                    <Controls.Input
                     label="Telefon"
                     placeholder="Telefon numarasi giriniz"
                     name="phone"
                     value= {values.phone}
                     onChange= {handleInputChange}
                     error={errors.phone} />         
                </Grid>
                <Grid xs={6}>
                    <Controls.RadioGroup
                      label= "Cinsiyet"
                      name="gender"
                      value= {values.gender} 
                      onChange= {handleInputChange}
                      items= {genderOptions}
                    />

                     <Controls.DatePicker
                     label="Kayit Tarihi"
                     placeholder="Kayit Tarihi giriniz"
                     name="registrationDate"
                     value= {values.registrationDate} 
                     onChange= {handleInputChange} />  
                     
                    <Controls.Input
                     variant= "outlined"
                     label="Adres"
                     placeholder="Musteri Adresi giriniz"
                     name="address"
                     value= {values.address}
                     onChange= {handleInputChange} />
                    <div>
                        <Controls.Button
                         type="submit"
                         color="primary"
                         text= "Tamam" />

                        <Controls.Button
                         text= "Sıfırla"
                         color="default"
                         onClick={resetForm}
                         />               
                    </div>   
                </Grid>
            </Grid>
        </Form>
    )
}

export default CustomerForm
