export const InvoiceDetail = ({items}) => {
    return (
        <>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({ id, product, quantity, price }) => (
                        <tr key={id}>
                            <td>{product}</td>
                            <td>{quantity}</td>
                            <td>{price}</td>
                        </tr>)
                    )}
                </tbody>
            </table>
        </>
    );
}