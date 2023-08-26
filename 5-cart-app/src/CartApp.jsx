import { Navbar } from "./components/Navbar";
import { useItemsCart } from "./hooks/useItemsCart";
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {
    
    const { cartItems, handlerAddProduct, handlerDeleteProductCard } = useItemsCart();

    return (
        <>
            <Navbar />
            {/* <div className="container my-3">
                <Navbar/>
            </div> */}

            <div className="container my-4">
                <h3>Productes</h3>

                <CartRoutes
                    cartItems = {cartItems}
                    handlerAddProduct={handlerAddProduct}
                    handlerDeleteProductCard={handlerDeleteProductCard}
                />
            </div>
        </>
    );
}