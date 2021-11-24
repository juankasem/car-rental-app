import React from 'react'
import { Card, Typography } from '@material-ui/core'


const Customer = ({customer}) => {
    const { id, fullName, age, gender,
            email, phone, address} = customer
    return (
        <Card>
            <Typography
            variant="h4"
            component="div">Musteri Adi: {fullName}</Typography>   
            <div><span>Yas: {age}</span></div>
            <div><span>E-posta: {email}</span></div>
            <div><span>Telefon Numarasi: {phone}</span></div>
            <div><span>Cinsiyet: {gender}</span></div>
            <div><span>Adres: {address}</span></div>
        </Card>
    )
}

export default Customer
