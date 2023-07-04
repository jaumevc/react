//04-objectes-metodes
const invoice = {
    id:10,
    name: 'Material d\'oficina',
    date: new Date(),
    client: {
        id:100,
        name: 'Corporation & Coo',
        adress: 'C/Pincipal s/n'
    },
    total: 1000.00,

    greeting:function() {
        return `Hola ${this.client.name}`;
    }

}

console.log(invoice);

invoice.client.name = 'Empresa suplent';

console.log(invoice);

console.log(invoice.greeting());




