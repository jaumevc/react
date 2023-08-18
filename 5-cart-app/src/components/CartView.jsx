
export const CartView = ({ items , handlerDelete }) => {

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
                        <td colSpan="2" className="text-center">€€€€€</td>
                    </tr>
                </tfoot>
            </table>
        </>
    );
}
