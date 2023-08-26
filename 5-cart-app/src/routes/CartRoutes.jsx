import { Navigate, Route, Routes } from "react-router-dom";
import { CatalogView } from "../components/CatalogView";
import { CartView } from "../components/CartView";

export const CartRoutes = ({cartItems, handlerAddProduct,handlerDeleteProductCard})=>{

    return (
        <>
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
        </>
    );
}