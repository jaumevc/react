
export const CartView = () => {
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
        </>
    );
}
