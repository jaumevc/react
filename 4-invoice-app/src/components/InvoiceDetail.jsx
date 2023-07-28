
import PropTypes from 'prop-types';

export const InvoiceDetail = ({title, items}) => {
    return (
        <>
            <h4>{title}</h4>
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

InvoiceDetail.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
}