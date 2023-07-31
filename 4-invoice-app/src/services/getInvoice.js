import { invoice } from "../data/invoice";

const getInvoice = ()=>{
    let total = 0;
    // for(const it of invoice.items){
    //     total = total + it.price * it.quantity;
    // }

    // invoice.items.forEach(it => {
    //     total= total + it.quantity * it.price;
    // });

    // invoice.items.forEach((it)=>{
    //     if(it.id == '002'){
    //         it.quantity=10;
    //     }
    // })

    // el map transforma l'objecte o array items, a un valor numeric
    // el 3er argument: 0 es que el valorActual parteix de 0
    total = invoice.items
        .map(item => item.price * item.quantity)
        .reduce((acomulador, valorActual) =>  acomulador + valorActual, 0);
    return {...invoice, total};
}

export{
    getInvoice
}