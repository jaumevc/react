//15-Arrays-find-filter-other-methods
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
            {product:'disk ssd 128gb', price:140, quantity:15}
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
            {product:'gamming chair', price:340, quantity:15}
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

/*
Map method, és similar al forEach(), 
pero el forEach és per executar algo, per mostrar alguna informació, per a iterar, mostrar en el log...
es un procediment, no retorna res, no modifica res (es una funcio que no retorna res, es per mostrar algo...).

Mentre que el Map, es reb l'objecte i podem modificar l'objecte al nostre gust. Retorna algo amb un calcul, alguna modificació...
Com retorna algo, sempre retorna un nou ARRAY

es necessita passar per argument un CALLBACK, que és com un forEach, pero que retorna algo
*/
/*
const invoices2= invoices.map( factura =>{
    return factura;
}); 
console.log(invoices2);
*/

const invoicesName= invoices.map( factura =>{
    if(factura.id==2){
        factura.name = 'Diputació';
    }
    return factura.name;
}); 

console.log(invoices);
console.log(invoicesName);

const invoicesNameClient= invoices.map( factura =>{
    return factura.client.name;
}); 

console.log(invoicesNameClient);

