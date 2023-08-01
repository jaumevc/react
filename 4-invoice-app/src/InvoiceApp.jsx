import { getInvoice } from "./services/getInvoice";
import { InvoiceClientData } from "./components/InvoiceClientData";
import { InvoiceDataRef } from "./components/invoiceDataRef";
import { InvoiceEnterprisseData } from "./components/InvoiceEnterpriseData";
import { InvoiceDetail } from "./components/InvoiceDetail";
import { InvoiceTotalDetail } from "./components/InvoicetotalDetail";
import { useState } from "react";

const InvoiceApp = () => {
    const { id, name, client, company, items: initialItems, total} = getInvoice();

    const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState(0);
    const [quantityValue, setQuantityValue] = useState(0);

    const [items, setItems] = useState(initialItems)

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
                                title = "Línies de detall de la factura:"
                                items={items}
                            />
                        </div>

                        <div>
                            <InvoiceTotalDetail
                                total = {total}/>
                        </div>

                        <div>
                            <form className = "w-50" onSubmit={event =>{
                                event.preventDefault();

                                setItems([...items, {id: 40, product:productValue, price:priceValue, quantity:quantityValue}]);
                            }}>
                                <input 
                                    type="text" 
                                    name="product" 
                                    placeholder="Producte" 
                                    className="form-control mt-3 mb-3"
                                    onChangeCapture={event => {
                                        console.log(event.target.value);
                                        setProductValue(event.target.value);
                                    }}/>
                                <input 
                                    type="text" 
                                    name="price" 
                                    placeholder="Preu" 
                                    className="form-control mb-3"
                                    onChangeCapture={event => {
                                        console.log(event.target.value);
                                        setPriceValue(event.target.value);
                                    }}
                                    />
                                <input 
                                    type="text" 
                                    name="quantity" 
                                    placeholder="Quantitat" 
                                    className="form-control mb-3"
                                    onChangeCapture={event => {
                                        console.log(event.target.value);
                                        setQuantityValue(event.target.value);
                                    }}
                                    />

                                    <button type="submit" className="btn btn-primary">Afegeix</button>
                            </form>
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