import { useEffect } from "react";
import { useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCardView } from "./ProductCardView";

export const CatalogView = ({ handler })=>{
    // const products= getProducts();
    // es carregarà un array vuit en productes 
    const [products, setProducts] = useState([]);
    // en el useEffect es carregaran les dades a la const products
    useEffect(
        () => {
            setProducts(getProducts());
        }, []
    );
    return(
        <>
            <div className="row">
                    {
                        products.map(
                            producte => (
                                <div className="col-4 my-2" key={producte.id}>
                                    <ProductCardView 
                                        id = { producte.id }
                                        name = { producte.name }
                                        description = { producte.description }
                                        price = { producte.price }
                                        handler = { handler }
                                    />
                                </div>
                            )
                        )
                    }
            </div>
          
        </>
    );
}