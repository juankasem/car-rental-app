export const vehicles = [{
    id : 1,
    plateNo: '342353543',
    manufacturer: 'Toyota', 
    model: 'Land Cruiser',
    productionYear: '2014',
    engineCapacity: '1000cc',
    color: 'white',
    OperationDate: new Date(),
    status : 'available'
},
{
    id : 2,
    plateNo: '534732853',
    manufacturer: 'Honda', 
    model: 'Accord',
    productionYear: '2012',
    engineCapacity: '750cc',
    color: 'silver',
    OperationDate: new Date(),
    status : 'booked'
},
{
    id : 3,
    plateNo: '543543656',
    manufacturer: 'Nissan', 
    model: 'Qaashqai',
    productionYear: '2018',
    engineCapacity: '850cc',
    color: 'red',
    OperationDate: new Date(),
    status : 'rented'
},
{
    id : 4,
    plateNo: '934876543',
    manufacturer: 'Lamborghini', 
    model: 'Aventador',
    productionYear: '2019',
    engineCapacity: '150cc',
    color: 'black',
    OperationDate: new Date(),
    status : 'available'
},
{
    id : 5,
    plateNo: '56464366',
    manufacturer: 'Mercedes', 
    model: 'S350',
    productionYear: '2020',
    engineCapacity: '500cc',
    color: 'blue',
    OperationDate: new Date(),
    status : 'available'
},
]

export const colorOptions = [{value: "white", title: 'Beyaz'},
                    {value: "black", title: 'Siyah'},
                    {value: "red", title: 'Kirmizi'},
                    {value: "blue", title: 'Mavi'},
                    {value: "silver", title: 'Gumus'},
                    {value: "green", title: 'Yesil'}]

export const statusOptions = [{value: "available", title: 'Musait'},
                       {value: "reserved", title: 'reservli'},
                       {value: "rented", title: 'Kirali'},
                       {value: "maintenance", title: 'Tamirde'}]