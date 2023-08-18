import { products } from "../data/products"

export const getProducts =()=>{
    return products;
}

export const totalCistella = (items)=>{
    // reduce requereix un aomulador, el valor actual i com a segon argument, el acomulador el fem partir en 0
    return items.reduce( 
        ((acomulador, actualItemValue)=> acomulador + actualItemValue.product.price * actualItemValue.quantity) 
        , 0 
        );
}