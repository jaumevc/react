import { useEffect, useState } from "react";
import { getProducts } from "./services/productService";

export const CartApp = () => {

    // const products= getProducts();
    // es carregarà un array vuit en productes 
    const [products, setProducts] = useState([]);
    // en el useEffect es carregaran les dades a la const products
    useEffect(
        () => {
            setProducts(getProducts());
        }, []
    );

    return (
        <>
            <div className="container">
                <h3>Productes</h3>
                <div className="row">
                    {
                        products.map(
                            producte => (
                                <div className="col-4 my-2" key={producte.id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{producte.name}</h5>
                                            <p className="cart-text">{producte.description}</p>
                                            <p className="cart-text">{producte.price}</p>
                                            <button className="btn btn-primary">Afegir a la Cistella</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    }
                    
                </div>
                <div className="my-4 w-50">
                    <h3>Afegit a Cistella</h3>
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>Producte</th>
                                <th>Preu</th>
                                <th>Quantitat</th>
                                <th>Subtotal</th>
                                <th>Descartar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>producte</td>
                                <td>preu</td>
                                <td>quantitat</td>
                                <td>subtotal</td>
                                <td>eliminar</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3" className="text-end fw-bold">Total:</td>
                                <td colSpan="2" className="text-center">€€€€€</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    );
}