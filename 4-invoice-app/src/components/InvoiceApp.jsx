//  import { invoice } from "../data/invoice";
import { getInvoice } from "../services/getInvoice";

const InvoiceApp = () =>{

    const invoice = getInvoice();

    return (
        <>
        <h1>Exemple Factura</h1>
        <ul>
            <li> Id: {invoice.id} </li>
            <li> Name: {invoice.name} </li>
        </ul>
        </>
    );

}

export {
    InvoiceApp
}