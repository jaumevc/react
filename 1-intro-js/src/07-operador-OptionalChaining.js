//07-operador-Optional-chaining
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

console.log(invoice.company?.name);

//abans de incloure aquest operador haviam de fer validacions del tipus:
if(invoice.company != null && invoice.company.name !=null) 
    console.log("Existexis l\'atribut");
else 
    console.log("NO Existexis l\'atribut");

//és molt més senzill fer-ho amb l'operador Optional chaining
if(invoice.company?.name) 
    console.log("Existexis l\'atribut comprovat amb operador Optional chaining");
else 
    console.log("NO Existexis l\'atribut comprovat amb operador Optional chaining");

//ho fem amb un atribut existent
console.log(invoice.client?.name);

if(invoice.client?.name)
    console.log("El nom del client si existeix:" + invoice.client.name);

console.log(invoice.client?.age?.major); 






