
import PropTypes from 'prop-types';
import { InvoiceDetailRowItem } from './InvoiceDetailRowItem';

export const InvoiceDetail = ({title, items, handlerDeleteItem }) => {
    return (
        <>
            <h4>{title}</h4>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({ id, product, quantity, price }) => (
                        // <tr key={id}>
                        //     <td>{product}</td>
                        //     <td>{quantity}</td>
                        //     <td>{price}</td>
                        // </tr>)
                        //el id serà nomes per assignar-lo a la key per poder renderitzar cada element 
                        <InvoiceDetailRowItem
                            key = { id }
                            // li passem tb el id per poder localitzar el item q eliminarem
                            id = { id }
                            product =  { product }
                            quantity = { quantity }
                            price =    { price }
                            handlerDeleteItem = { id => handlerDeleteItem(id) }
                        />
                    ))} 
                    
                </tbody>
            </table>
        </>
    );
}

InvoiceDetail.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
}