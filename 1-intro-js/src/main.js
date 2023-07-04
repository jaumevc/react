//05-objectes-atributs-array
const invoice = {
    id:10,
    name: 'Material d\'oficina',
    date: new Date(),
    client: {
        id:100,
        name: 'Corporation & Coo',
        adress: 'C/Pincipal s/n'
    },
    items:[
        {product:'keyboard', price:30, quantity:15},
        {product:'Screan', price:140, quantity:15},
        {product:'pc', price:540, quantity:15},
    ], 
    total: function(){
        let bill = 0;
       
        for(let i=0; i <= this.items.length; i++){
            bill += this.intems[i].price;
        }
        return bill;
    },
    greeting:function() {
        return `Hola ${this.client.name}`;
    }

}

console.log(invoice);

console.log(invoice.items[1].product);

console.log(invoice.total());






