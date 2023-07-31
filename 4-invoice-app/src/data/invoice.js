export const invoice = {
    id: 10,
    name:'Components PC',
    client: {
        name: 'Jaume',
        lastName: 'Valls',
        adress: {
            country: 'Catalunya',
            city: 'Lleida',
            street: 'C/Jaume II',
            number: '5A'
        },
    },
    company: {
        name:'My Company & Co',
        cif: 'A250050505'
    },
    items: [
        {
            id: 10,
            product:'Cpu intel i7', 
            price: 499, 
            quantity:1
        },
        {
            id: 20,
            product:'Corsair keyboard Mecanic', 
            price: 150, 
            quantity:1
        },
        {
            id: 30,
            product:'Monitor hp', 
            price:250, 
            quantity:1
        }
    ]
}