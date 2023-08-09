import PropTypes from 'prop-types';

export const InvoiceDetailRowItem = ({ id, product, quantity, price, handlerDeleteItem }) => {
    return (
        <>
            {/* el key el deixem al component pare */}
            {/* <tr key={id}> */}
            <tr>
                <td>{product}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>
                    <button className='btn btn-danger' onClick={()=>handlerDeleteItem(id)}>
                        eliminar
                    </button>
                </td>
            </tr>
        </>
    );
}

InvoiceDetailRowItem.propTypes = {
    product: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
}