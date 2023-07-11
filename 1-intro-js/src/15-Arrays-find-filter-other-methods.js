//15-Arrays-find-filter-other-methods

const itemReferencia ={product:'gamming chair', price:340, quantity:15};
const invoices = [
    {
        id:1,
        name: 'Material d\'oficina',
        date: new Date(),
        client: {
            name: 'Corporation & Coo',
            adress: 'C/Pincipal s/n'
        },
        items:[
            {product:'mouse', price:30, quantity:15},
            {product:'disk ssd 128gb', price:140, quantity:15},
            itemReferencia
        ], 
        total: function(){
            let valor = 0;

            this.items.forEach(item =>{
                valor += item.price * item.quantity;
            });
            
            return valor;
        },
        greeting:function() {
            return `Hola ${this.client.name}`;
        }
    },

    {
        id:2,
        name: 'Material magatzem',
        date: new Date(),
        client: {
            name: 'Company & Coo',
            adress: 'C/Major s/n'
        },
        items:[
            {product:'keyboard', price:30, quantity:15},
            {product:'Screen 15"', price:140, quantity:15},
            {product:'pc', price:740, quantity:15}
        ], 
        total: function(){
            let valor = 0;

            this.items.forEach(item =>{
                valor += item.price * item.quantity;
            });
            
            return valor;
        },
        greeting:function() {
            return `Hola ${this.client.name}`;
        }
    },

    {
        id:3,
        name: 'Material TEC',
        date: new Date(),
        client: {
            name: 'Tecnlogies & Coo',
            adress: 'C/Vulevart s/n'
        },
        items:[
            {product:'Screen gamming 24"', price:240, quantity:15},
            {product:'gamming chair', price:340, quantity:15},
            itemReferencia
        ], 
        total: function(){
            let valor = 0;
            
            for(let i =0; i<this.items.length; i++){
                valor = valor + this.items[i].price * this.items[i].quantity;
            }
            
            return valor;
        },
        greeting:function() {
            return `Hola ${this.client.name}`;
        }
    }
];

//const invoice =  invoices.find(factura => {return factura.id === 3});
const invoiceById =  invoices.find(factura => factura.id === 3);
const invoiceByName =  invoices.find(factura => factura.name === 'Material magatzem');
const invoiceByClientName =  invoices.find(factura => factura.client.name === 'Corporation TURURUT');

console.log(invoiceById);
console.log(invoiceByName);
console.log(invoiceByClientName);

//FILTRAR...pels id > 1
//el filter moltes vegades s'usa per crear un nou objecte excloient algun dels registres
const invoiceFilter = invoices.filter( factura =>  factura.id > 1 );

//El includes ho fa per referencia objecte, no per valor. Ha de ser la mateixa instància en memoria
const invoiceFilter2 = invoices.filter( factura =>  factura.items.includes(itemReferencia));

console.log(invoiceFilter);
console.log(invoiceFilter2);

//SOME
const invoiceFilter3 = invoices.some( factura =>  factura.id === 3 );
console.log(invoiceFilter3);

//FOREACH
console.log("forEach");
invoices.forEach( factura =>  console.log(factura));

console.log("forEach 2:");
invoices.forEach(factura => {
    if(factura.id >2 ) console.log(factura)
});

