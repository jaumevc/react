import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "./itemsActions";

//L'state es l'objecte que volem tractar, que en el nostre cas es un array
export const itemsReducer = (state = [], action) => {
    //cada cas del switch obeeix a les 2 incloses en en CartApp handlerAddProduct + la handlerDeleteProductCart
    switch (action.type) {
        case ADD_PRODUCT:
            return [
                //...cartItems,
                ...state,
                {
                    //en l'action arriba el valor que en el cas de les actions enlloc de value és payload
                    product: action.payload,
                    quantity: 1,
                    // total: product.price * 1 //el total es gestiona en el CartView
                }
            ];

        case UPDATE_PRODUCT:
            // el map ja retorna un array x això eliminem les corxetes i ja conté els item existents
            return state.map((item) => {//cartItems.map((item) => { 

                if (item.product.id === /*product.id*/ action.payload.id) {
                    // item.quantity = item.quantity + 1;
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item;
            });

        case DELETE_PRODUCT:

            return state.filter((item) => item.product.id !== action.payload);
        // return [
        //     ...state.filter((item) => item.product.id !== action.payload)
        // ];
        default:
            // si no entra en cap dels casos, retorna l'estat inicial
            return state;
    }
}