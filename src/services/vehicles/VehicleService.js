export const getAllVehicles = () =>  [{
    id : 1,
    plateNo: '342353543',
    manufacturer: 'Toyota', 
    model: 'Land Cruiser',
    productionYear: '2014',
    engineCapacity: '1000cc',
    color: 'Beyaz',
    OperationDate: new Date(),
    costPerHour: 8
},
{
    id : 2,
    plateNo: '534732853',
    manufacturer: 'Honda', 
    model: 'Accord',
    productionYear: '2012',
    engineCapacity: '750cc',
    color: 'Gümüş',
    OperationDate: new Date(),
    costPerHour: 7
},
{
    id : 3,
    plateNo: '543543656',
    manufacturer: 'Nissan', 
    model: 'Qaashqai',
    productionYear: '2018',
    engineCapacity: '850cc',
    color: 'Kırmızı',
    OperationDate: new Date(),
    costPerHour: 5
},
{
    id : 4,
    plateNo: '934876543',
    manufacturer: 'Lamborghini', 
    model: 'Aventador',
    productionYear: '2019',
    engineCapacity: '150cc',
    color: 'Siyah',
    OperationDate: new Date(),
    costPerHour: 18
},
{
    id : 5,
    plateNo: '56464366',
    manufacturer: 'Mercedes', 
    model: 'S350',
    productionYear: '2020',
    engineCapacity: '500cc',
    color: 'Mavi',
    OperationDate: new Date(),
    costPerHour: 13
},
]

export const getColorOptions = () =>
                   [{value: "Beyaz", title: 'Beyaz'},
                    {value: "Siyah", title: 'Siyah'},
                    {value: "Kırmızı", title: 'Kırmızı'},
                    {value: "blue", title: 'Mavi'},
                    {value: "Gümüş", title: 'Gümüş'},
                    {value: "Yeşil", title: 'Yeşil'}]

export const getEngineCapacityOptions = () =>
                    [{value: "500cc", title: '500cc'},
                    {value: "750cc", title: '750cc'},
                    {value: "1000cc", title: '1000cc'},
                    {value: "1250cc", title: '1250cc'},
                    {value: "1500cc", title: '1500cc'}]

export const getStatusOptions = () => [{value: "available", title: 'Musait'},
                       {value: "reserved", title: 'reservli'},
                       {value: "rented", title: 'Kirali'},
                       {value: "maintenance", title: 'Tamirde'}]