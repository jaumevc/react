// import { useReducer, useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { useItemsCart } from "./hooks/useItemsCart";
// import { itemsReducer } from "./reducer/itemsReducer";
// import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "./reducer/itemsActions";

// const initialCartItems = JSON.parse(sessionStorage.getItem("cistella")) || [];
export const CartApp = () => {
   
    const { cartItems, handlerAddProduct, handlerDeleteProductCard } = useItemsCart();
    
    return (
        <>
            <div className="container my-4">
                <h3>Productes</h3>

                <Routes>
                    <Route path="catalog" element = {<CatalogView handler={handlerAddProduct} />}/>
                    <Route path="cart" element = {(
                            cartItems != null && cartItems.length <= 0 ? 
                            <div className="alert alert-warning">La cistellaestà buida</div> 
                            : (
                                <div className="my-4 w-50">
                                    <h3>Afegit a Cistella</h3>
                                    <CartView items={cartItems} handlerDelete={ handlerDeleteProductCard } />
                                </div>
                            )
                    )}/>

                    {/* que per defecte ens entri al catalog:*/}
                    <Route path="/" element={<Navigate to="/catalog"/>}/>
                    
                </Routes>

                {/* això tb es pot escriure: el product q reb del fill es passa a la funcio i es retorna tot al fill*/}
                {/* <CatalogView handler= {(product)=>handlerAddProduct(product)}/> */}
                {/* Pero es pot simplificar així: */}
                {/* <CatalogView handler={handlerAddProduct} /> */}

                {/* {
                    cartItems != null && cartItems.length <= 0  || (
                        <div className="my-4 w-50">
                            <h3>Afegit a Cistella</h3>
                            <CartView items={cartItems} handlerDelete={ handlerDeleteProductCard } />
                        </div>
                    )
                } */}

            </div>
        </>
    );
}