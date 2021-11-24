import React from 'react'
import { Grid } from '@material-ui/core'
import { useForm, Form } from '../../components/custom-hooks/useForm'
import  Controls  from '../../components/controls/Controls'

const initialFieldValues = {
    id : 0,
    fullName: '',
    age: '', 
    email: '',
    phone: '',
    gender: 'male',
    registrationDate: new Date(),
    address: ''
}

const genderOptions = [{value: 'male', title: 'Erkek'},
{value: 'female', title: 'Kadin'},
{value: 'other', title: 'diger'}]

const handleSubmit = () => {

}

const CustomerForm = () => {
   const {values, setValues, handleInputChange} = useForm(initialFieldValues)

    return (    
        <Form onSubmit={handleSubmit}>    
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                     label="Musteri Adi"
                     placeholder="Musteri Adi giriniz"
                     name="fullName"
                     value= {values.fullName}
                     onChange= {handleInputChange} />

                    <Controls.Input
                     label="Yas"
                     placeholder="Yas giriniz"
                     name="age"
                     value= {values.age}
                     onChange= {handleInputChange} />

                    <Controls.Input
                     label="E-posta"
                     placeholder="E-posta giriniz"
                     name="email"
                     value= {values.email}
                     onChange= {handleInputChange} />        
                     
                    <Controls.Input
                     label="Telefon"
                     placeholder="Telefon numarasi giriniz"
                     name="phone"
                     value= {values.phone}
                     onChange= {handleInputChange}
                      />         
                </Grid>
                <Grid xs={6}>
                    <Controls.RadioGroup
                      label= "Cinsiyet"
                      name="gender"
                      value= {values.gender} 
                      onChange= {handleInputChange}
                      items= {genderOptions}
                    />

                    <Controls.Input
                     label="Kayit Tarihi"
                     placeholder="Kayit Tarihi giriniz"
                     name="registrationDate"
                     value= {values.registrationDate} 
                     onChange= {handleInputChange} />      
                     
                    <Controls.Input
                     variant= "outlined"
                     label="Adres"
                     placeholder="Musteri Adresi giriniz"
                     value= {values.adres}
                     onChange= {handleInputChange} />

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
            </Grid>
        </Form>
    )
}

export default CustomerForm
