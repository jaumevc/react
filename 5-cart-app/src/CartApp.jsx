import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";

export const CartApp = () => {

    return (
        <>
            <div className="container">
                <h3>Productes</h3>
                <CatalogView/>
                <div className="my-4 w-50">
                    <h3>Afegit a Cistella</h3>
                    <CartView/>
                </div>
            </div>
        </>
    );
}