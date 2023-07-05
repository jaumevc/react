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
        {product:'pc', price:540, quantity:15}
    ], 
    total: function(){
        let valor = 0;
        for(let i =0; i<this.items.length; i++){
            valor = valor + this.items[i].price * this.items[i].quantity;
        }
        /*
        for(let valo in this.items){
            valor += valo.price * valo.quantity; 
        }
       
        this.items.forEach(item =>{
            valor += item.price * item.quantity;
        });
        */
        
        return valor;
    },
    greeting:function() {
        return `Hola ${this.client.name}`;
    }
}

console.log(invoice);

console.log(invoice.items[1].product);

console.log(invoice.total());






