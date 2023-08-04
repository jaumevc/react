import { getInvoice } from "./services/getInvoice";
import { InvoiceClientData } from "./components/InvoiceClientData";
import { InvoiceDataRef } from "./components/invoiceDataRef";
import { InvoiceEnterprisseData } from "./components/InvoiceEnterpriseData";
import { InvoiceDetail } from "./components/InvoiceDetail";
import { InvoiceTotalDetail } from "./components/InvoicetotalDetail";
import { useState } from "react";

const InvoiceApp = () => {
    const { id, name, client, company, items: initialItems, total } = getInvoice();

    const [productValue, setProductValue] = useState('');
    // const [priceValue, setPriceValue] = useState(0);
    // const [quantityValue, setQuantityValue] = useState(0);
    const [priceValue, setPriceValue] = useState('');
    const [quantityValue, setQuantityValue] = useState('');

    const [items, setItems] = useState(initialItems)

    const [counter, setCounter] = useState(40);

    const onProductChange = (event)=>{
        // console.log(event.target.value);
        setProductValue(event.target.value);
    }

    const onPriceChange =(event)=>{
        // console.log(event.target.value);
        setPriceValue(event.target.value);
    }

    //tb podem desestructurar i agafar nomes lo que ens interessa de l'objecte que li passem
    //en aquest cas, nome el target
    const onQuantityChange = ({target})=>{
        // console.log(target.value);
        setQuantityValue(target.value);
    }

    const onInvoiceItemsSubmit = (event) =>{
            event.preventDefault();
            //trim és per eliminar espais
            if (productValue.trim().length <= 1) return;
            // if(priceValue.trim().length < 1) return;
            // if(quantityValue.trim().length < 1) return;
            if (isNaN(priceValue.trim())) {
                alert('el camp ha de ser numèric');
                netejarInputs();
                return;
            }
            if (isNaN(quantityValue.trim())) {
                alert('el camp ha de ser numèric');
                netejarInputs();
                return;
            }
            setItems([...items, {
                id: counter,
                product: productValue,
                //afegint l'operador UNARI [+] convertim string a number
                 //afegeixo el .trim() per eliminar els espais en blanc
                price: +priceValue.trim(),
                //parsejant (lo que bolem convertir, en base 10)
                //afegeixo el .trim() per eliminar els espais en blanc
                quantity: parseInt(quantityValue.trim(), 10)
            }]);
            netejarInputs();
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
                            <form className="w-50" onSubmit={ event =>onInvoiceItemsSubmit(event)}>
                                <input
                                    type="text"
                                    name="product"
                                    value={productValue}
                                    placeholder="Producte"
                                    className="form-control mt-3 mb-3"
                                    onChange={event => {
                                        onProductChange(event);
                                    }}
                                />
                                <input
                                    type="text"
                                    name="price"
                                    value={priceValue}
                                    placeholder="Preu"
                                    className="form-control mb-3"
                                    onChange={event => onPriceChange(event)}
                                />
                                <input
                                    type="text"
                                    name="quantity"
                                    value={quantityValue}
                                    placeholder="Quantitat"
                                    className="form-control mb-3"
                                    onChange={onQuantityChange}
                                />
                                <button type="submit" className="btn btn-primary">Afegeix</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );

    function netejarInputs() {
        setProductValue('');
        // setPriceValue(0);
        // setQuantityValue(0);
        setPriceValue('');
        setQuantityValue('');
    }
}

export {
    InvoiceApp
}