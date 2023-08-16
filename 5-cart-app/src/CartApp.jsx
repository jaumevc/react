import { useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";

const initialCartItems = [
    // {
    //     product:{},
    //     quantity: 0,
    //     total: 0
    // }
];

export const CartApp = () => {

    const [cartItems, setCartItems] = useState(initialCartItems);

    //Aqui rebem el producte que hem seleccionat per posar a la cistella
    const handlerAddProduct = ()=>{
        //VIDEO 86
    };

    return (
        <>
            <div className="container">
                <h3>Productes</h3>
                <CatalogView/>
                <div className="my-4 w-50">
                    <h3>Afegit a Cistella</h3>
                    <CartView items = { cartItems }/>
                </div>
            </div>
        </>
    );
}