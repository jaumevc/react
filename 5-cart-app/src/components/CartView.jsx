import { useEffect, useState } from "react";
import { totalCistella } from "../services/productService";

export const CartView = ({ items , handlerDelete }) => {

    const [total, setTotal] = useState(0);

    useEffect(()=>{
        setTotal(
            totalCistella(items)
        );
        // Almacena la información en sessionStorage 
        // sessionStorage.setItem("key", "value"); 
        //nomes es poden desar valors string, amb lo q hem de convertir l'objecte items a string
        // sessionStorage.setItem("cistella", JSON.stringify(items));  
    },[items]);

    
    const onDeleteProduct = (id)=>{
        handlerDelete(id);
    }

    return (
        <>
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
                    {
                        items.map(item => (
                            <tr key={item.product.id}>
                                <td>{item.product.name}</td>
                                <td>{item.product.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.quantity * item.product.price}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => onDeleteProduct(item.product.id)}>Eliminar producte</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">Total:</td>
                        <td colSpan="2" className="text-center">{ total }</td>
                    </tr>
                </tfoot>
            </table>
        </>
    );
}
