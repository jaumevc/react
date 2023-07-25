//  import { invoice } from "../data/invoice";
import { getInvoice } from "../services/getInvoice";

const InvoiceApp = () =>{
    // const invoice = getInvoice();
    const {id, name, client,company, items} = getInvoice();
    //xq no hi hagi conflicte amb el name de la fctra li donem un alies (nameClient) 
    //al nom del client amb name:nameClient
    const {name:nameClient, lastName, adress} = client;
    const {country, city, street, number} = adress;

    return (
        <>
            <div className="container">
                <h1>Exemple Factura</h1>
                <ul className="list-group">
                    {/* <li> Id: {invoice.id} </li>
                    <li> Name: {invoice.name} </li> */}
                    <li className="list-group-item"> Id: {id} </li>
                    <li className="list-group-item"> Name: {name} </li>
                </ul>
                <div className="row">
                    <div className="col">
                        <h3>Dades del client:</h3>
                        <ul className="list-group">
                            {/* <li>{invoice.client.name} {invoice.client.lastName}</li>
                            <li>{invoice.client.adress.street}, {invoice.client.adress.number}</li>
                            <li>{invoice.client.adress.country}, {invoice.client.adress.city}</li> */}
                            {/* <li>{client.name} {client.lastName}</li>
                            <li>{client.adress.street}, {client.adress.number}</li>
                            <li>{client.adress.country}, {client.adress.city}</li> */}
                            <li className="list-group-item">{nameClient} {lastName}</li>
                            <li className="list-group-item">{street}, {number}</li>
                            <li className="list-group-item">{country}, {city}</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Dades de l'empresa:</h3>
                        <ul className="list-group">
                            <li className="list-group-item">{company.name}, <b>amb cif:</b> {company.cif}</li>
                        </ul>
                    </div>
                </div>
            
                <h4>Línies de detall de la factura:</h4>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {items.map(item =>{
                            return(
                                <tr>
                                    <td>{item.product}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                </tr>
                                );
                            }
                        )} */}

                        {/* {items.map(({product, quantity, price}) =>{
                            return(
                                <tr>
                                    <td>{product}</td>
                                    <td>{quantity}</td>
                                    <td>{price}</td>
                                </tr>
                                );
                            }
                        )} */}

                        {items.map(({id, product, quantity, price}) => (
                                <tr key={id}>
                                    <td>{product}</td>
                                    <td>{quantity}</td>
                                    <td>{price}</td>
                                </tr>)
                                )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export {
    InvoiceApp
}