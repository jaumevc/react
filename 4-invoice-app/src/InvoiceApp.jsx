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
    name:'',
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
        name:'',
        cif: '0'
    },
    items: []
};

const InvoiceApp = () => {

    const [total, setTotal]= useState(0);

    // const invoice = getInvoice();
    const [invoice, setInvoice] = useState(invoiceInitial);
    //els items els creem amb un state buit amb el invoiceInitial
    //i li afegirem les dades amb l'useEffect, un cop fem la crida a la persistència
    const [items, setItems] = useState([]);

    const { id, name, client, company } = invoice;

    const [counter, setCounter] = useState(40);

    useEffect(()=>{
        const data = getInvoice();
        console.log(data);
        setInvoice(data);
        setItems(data.items);
    },[]);

    useEffect(()=>{
        setTotal(calcularTotal(items))
    },[ items ]);

    // const onInvoiceItemsSubmit = (event) =>{
    //         event.preventDefault();
    //         //trim és per eliminar espais
    //         if (product.trim().length <= 1) return;

    //         if (isNaN(price.trim())) {
    //             setFormItemsState;
    //             return;
    //         }
    //         if (isNaN(quantity.trim())) {
    //             setFormItemsState;
    //             return;
    //         }
    //         setItems([...items, {
    //             id: counter,
    //             product: product,
    //             //afegint l'operador UNARI [+] convertim string a number
    //              //afegeixo el .trim() per eliminar els espais en blanc
    //             price: +price.trim(),
    //             //parsejant (lo que bolem convertir, en base 10)
    //             //afegeixo el .trim() per eliminar els espais en blanc
    //             quantity: parseInt(quantity.trim(), 10)
    //         }]);
    //         setFormItemsState({ product: '',price: '',quantity: ''
    //         });
    //         setCounter(counter + 10);
    // }

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
                           <FormItemsView/>
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