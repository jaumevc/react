//06-objects-operador-Spread
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

const invoice2 = invoice;

const result = invoice === invoice2;

console.log(result);

invoice2.id=20;

console.log(invoice.id);

const invoice3= { ...invoice }

invoice3.id = 30;

console.log("id objecte original: "+ invoice.id + " vs id nova instacia: "+invoice3.id);










