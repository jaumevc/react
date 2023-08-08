import { getInvoice, calcularTotal } from "./services/getInvoice";
import { InvoiceClientData } from "./components/InvoiceClientData";
import { InvoiceDataRef } from "./components/invoiceDataRef";
import { InvoiceEnterprisseData } from "./components/InvoiceEnterpriseData";
import { InvoiceDetail } from "./components/InvoiceDetail";
import { InvoiceTotalDetail } from "./components/InvoiceTotalDetail";
import { useEffect, useState } from "react";
import { FormItemsView } from "./components/FormItemsView";

const invoiceInitial = {
    id: 0,
    name: '',
    client: {
        name: '',
        lastName: '',
        adress: {
            country: '',
            city: '',
            street: '',
            number: ''
        },
    },
    company: {
        name: '',
        cif: '0'
    },
    items: []
};

const InvoiceApp = () => {

    const [total, setTotal] = useState(0);

    // const invoice = getInvoice();
    const [invoice, setInvoice] = useState(invoiceInitial);
    //els items els creem amb un state buit amb el invoiceInitial
    //i li afegirem les dades amb l'useEffect, un cop fem la crida a la persistència
    const [items, setItems] = useState([]);

    const { id, name, client, company } = invoice;

    const [counter, setCounter] = useState(40);

    useEffect(() => {
        const data = getInvoice();
        console.log(data);
        setInvoice(data);
        setItems(data.items);
    }, []);

    useEffect(() => {
        setTotal(calcularTotal(items))
    }, [items]);

    //com argument passarem l'Item desestructurat i 
    //li canviem el nom onInvoiceItemsSubmit per handlerAddItems
    const handlerAddItems = ({ product, price, quantity }) => {
        setItems([...items, {
            id: counter,
            product: product,
            //afegint l'operador UNARI [+] convertim string a number
            //afegeixo el .trim() per eliminar els espais en blanc
            price: +price.trim(),
            //parsejant (lo que bolem convertir, en base 10)
            //afegeixo el .trim() per eliminar els espais en blanc
            quantity: parseInt(quantity.trim(), 10)
        }]);
        setCounter(counter + 10);
    }

    return (
        <>
            <div className="container">
                <div className="card my-5">

                    <div className="card-header text-center">
                        <h3>Exemple Factura</h3>
                    </div>
                    <div className="card-body">

                        <InvoiceDataRef id={id} name={name} />

                        <div className="row my-3">
                            <div className="col">

                                <InvoiceClientData
                                    title="Dades del client:"
                                    client={client}
                                />

                            </div>
                            <div className="col">

                                <InvoiceEnterprisseData
                                    title="Dades de l'empresa:"
                                    company={company}
                                />
                            </div>
                        </div>

                        <div>
                            <InvoiceDetail
                                title="Línies de detall de la factura:"
                                items={items}
                            />
                        </div>

                        <div>
                            <InvoiceTotalDetail
                                total={total} />
                        </div>

                        <div>
                            {/* desde el fill FormItemsView rebem l'Item i 
                            l'afegim al formulari q tb esta al fill FormItemsView */}
                            {/* <FormItemsView handler = {(newItem) => handlerAddItems(newItem)}/> */}
                            {/* tambe es podria escriure: */}
                            <FormItemsView handler = { handlerAddItems }/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export {
    InvoiceApp
}