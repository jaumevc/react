
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


const invoiceByName = (nom) =>{
    return invoices.find(factura => factura.name === nom);
}

/*
export default (nom) =>{
    return invoices.find(factura => factura.name === nom);
}
*/

const invoiceById = (id) =>{
    return invoices.find(factura => factura.id === id);
} 

export {
    itemReferencia,
    invoices as default,
    invoiceByName,
    invoiceById 
}