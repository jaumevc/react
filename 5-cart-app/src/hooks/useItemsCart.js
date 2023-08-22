import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "../reducer/itemsActions";

const initialCartItems = JSON.parse(sessionStorage.getItem("cistella")) || [];

export const useItemsCart = () =>{

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

    return {
        cartItems,
        handlerAddProduct,
        handlerDeleteProductCard
    }
}