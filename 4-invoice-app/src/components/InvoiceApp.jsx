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
        <h1>Exemple Factura</h1>
        <ul>
            {/* <li> Id: {invoice.id} </li>
            <li> Name: {invoice.name} </li> */}
            <li> Id: {id} </li>
            <li> Name: {name} </li>
        </ul>
        <h3>Dades del client:</h3>
        <ul>
            {/* <li>{invoice.client.name} {invoice.client.lastName}</li>
            <li>{invoice.client.adress.street}, {invoice.client.adress.number}</li>
            <li>{invoice.client.adress.country}, {invoice.client.adress.city}</li> */}
            {/* <li>{client.name} {client.lastName}</li>
            <li>{client.adress.street}, {client.adress.number}</li>
            <li>{client.adress.country}, {client.adress.city}</li> */}
            <li>{nameClient} {lastName}</li>
            <li>{street}, {number}</li>
            <li>{country}, {city}</li>
        </ul>
        <h3>Dades de l'empresa:</h3>
        <ul>
            <li>{company.name}, <b>amb cif:</b> {company.cif}</li>
        </ul>
        </>
    );
}

export {
    InvoiceApp
}