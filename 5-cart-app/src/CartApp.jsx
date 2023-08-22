import { useReducer, useState, useEffect } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { itemsReducer } from "./reducer/itemsReducer";
import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "./reducer/itemsActions";

const initialCartItems = JSON.parse(sessionStorage.getItem("cistella")) || [];

export const CartApp = () => {

    //Inicialment a la cistella no hi tindrem productes:
    // const [cartItems, setCartItems] = useState(initialCartItems);

    // el dispatch seria el metode equivalent a setCartItems
    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

    useEffect(()=>{
        sessionStorage.setItem("cistella", JSON.stringify(/*items*/cartItems));  
    },[cartItems]/*[items]*/);

    //Aqui rebem el producte que hem seleccionat per posar a la cistella
    const handlerAddProduct = (product) => {
        //VIDEO 87:INCREMENTAR LA QUANTITAT DE LA CISTELLA SI JA TE UN ITEM
        const hasItem = cartItems.find(item => item.product.id === product.id);

        if (hasItem) {
            dispatch({
                type: UPDATE_PRODUCT,//'updateQuantityProductCart',
                payload: product
            });

        } else {
            dispatch({
                type: ADD_PRODUCT,//'addProductCart',
                payload: product
            });
        }
    };

    const handlerDeleteProductCard = (id) => {

        dispatch({
            type: DELETE_PRODUCT,//'deleteProductCart',
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