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
    //Inicialment a la cistella no hi tindrem productes:
    const [cartItems, setCartItems] = useState(initialCartItems);

    //Aqui rebem el producte que hem seleccionat per posar a la cistella
    const handlerAddProduct = (product)=>{
        //VIDEO 86
        setCartItems([
            ...cartItems, 
            {
               product,
               quantity:1,
               total: product.price * 1
            }
        ]);
    };

    return (
        <>
            <div className="container">
                <h3>Productes</h3>
                {/* això tb es pot escriure: el product q reb del fill es passa a la funcio i es retorna tot al fill*/}
                {/* <CatalogView handler= {(product)=>handlerAddProduct(product)}/> */}
                {/* Pero es pot simplificar així: */}
                <CatalogView handler= {handlerAddProduct}/>
                <div className="my-4 w-50">
                    <h3>Afegit a Cistella</h3>
                    <CartView items = { cartItems }/>
                </div>
            </div>
        </>
    );
}