import { useReducer, useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { itemsReducer } from "./reducer/itemsReducer";

const initialCartItems = JSON.parse(sessionStorage.getItem("cistella")) || [];

export const CartApp = () => {
    
    //Inicialment a la cistella no hi tindrem productes:
    // const [cartItems, setCartItems] = useState(initialCartItems);

    // el dispatch seria el metode equivalent a setCartItems
    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

    //Aqui rebem el producte que hem seleccionat per posar a la cistella
    const handlerAddProduct = (product) => {
        //VIDEO 87:INCREMENTAR LA QUANTITAT DE LA CISTELLA SI JA TE UN ITEM
        const hasItem = cartItems.find(item => item.product.id === product.id);

        if (hasItem) {
            // setCartItems(
            //     // el map ja retorna un array x això eliminem les corxetes i ja conté els item existents
            //     cartItems.map((item) => {
            //         if (item.product.id === product.id) {
            //             item.quantity = item.quantity + 1;
            //         }
            //         return item;
            //     })
            // );
            dispatch({
                type:'updateQuantityProductCart',
                payload: product
            });

        } else {
            dispatch({
                type:'addProductCart',
                payload: product
            });
            //VIDEO 86
            // setCartItems([
            //     ...cartItems,
            //     {
            //         product,
            //         quantity: 1,
            //         // total: product.price * 1 //el total es gestiona en el CartView
            //     }
            // ]);
        }
    };

    const handlerDeleteProductCard = (id) => {
        
        // setCartItems([
        //     ...cartItems.filter((item) => item.product.id !== id)
        // ]);

        dispatch({
            type:'deleteProductCart',
            payload: id
        });
    };

    return (
        <>
            <div className="container my-4">
                <h3>Productes</h3>
                {/* això tb es pot escriure: el product q reb del fill es passa a la funcio i es retorna tot al fill*/}
                {/* <CatalogView handler= {(product)=>handlerAddProduct(product)}/> */}
                {/* Pero es pot simplificar així: */}
                <CatalogView handler={handlerAddProduct} />

                {
                    cartItems != null && cartItems.length <= 0  || (
                        <div className="my-4 w-50">
                            <h3>Afegit a Cistella</h3>
                            <CartView items={cartItems} handlerDelete={ handlerDeleteProductCard } />
                        </div>
                    )
                }

            </div>
        </>
    );
}