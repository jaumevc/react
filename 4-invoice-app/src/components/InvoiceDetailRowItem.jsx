import PropTypes from 'prop-types';

export const InvoiceDetailRowItem = ({ product, quantity, price }) => {
    return (
        <>
            {/* el key el deixem al component pare */}
            {/* <tr key={id}> */}
            <tr>
                <td>{product}</td>
                <td>{quantity}</td>
                <td>{price}</td>
            </tr>
        </>
    );
}

InvoiceDetailRowItem.propTypes = {
    product: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
}