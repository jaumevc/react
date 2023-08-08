import { getInvoice, calcularTotal } from "./services/getInvoice";
import { InvoiceClientData } from "./components/InvoiceClientData";
import { InvoiceDataRef } from "./components/invoiceDataRef";
import { InvoiceEnterprisseData } from "./components/InvoiceEnterpriseData";
import { InvoiceDetail } from "./components/InvoiceDetail";
import { InvoiceTotalDetail } from "./components/InvoiceTotalDetail";
import { useEffect, useState } from "react";

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

    const [formItemsState, setFormItemsState] = useState({
        product: '',
        price: '',
        quantity: ''
    });
    //Ara desestructurem el formItemsState, conté el useState com un objetce amb 3 atributs, 
    //per poder usar els seus valors en el form, l'hem de desestructurar:
    const { product, price, quantity } = formItemsState;
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

    // useEffect(()=>{
    //     console.log("el preu s'ha modificat");
    // },[ price ]);

    // useEffect(()=>{
    //     console.log("el formulari s'ha modificat");
    // },[ formItemsState ]);

    // useEffect(()=>{
    //     console.log("el contador s'ha modificat");
    // },[ counter]);

    // useEffect(()=>{
    //     console.log("els items s'han modificat");
    // },[ items ]);

    /*
    const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [quantityValue, setQuantityValue] = useState('');
    
    const [items, setItems] = useState(initialItems)
    */

    const onInputChange = ({target:{name,value}})=>{
        console.log(name);
        console.log(value);
        setFormItemsState({
            ...formItemsState,
            [name]:value
        });
    }

    /*
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
    */

    const onInvoiceItemsSubmit = (event) =>{
            event.preventDefault();
            //trim és per eliminar espais
            if (product.trim().length <= 1) return;
            // if(priceValue.trim().length < 1) return;
            // if(quantityValue.trim().length < 1) return;
            if (isNaN(price.trim())) {
                setFormItemsState;
                return;
            }
            if (isNaN(quantity.trim())) {
                setFormItemsState;
                return;
            }
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
            //netejarInputs();
            setFormItemsState({ product: '',price: '',quantity: ''
            });
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
                                    value={product}
                                    placeholder="Producte"
                                    className="form-control mt-3 mb-3"
                                    onChange={event => {
                                       // onProductChange(event);
                                       onInputChange(event);
                                    }}
                                />
                                <input
                                    type="text"
                                    name="price"
                                    value={price}
                                    placeholder="Preu"
                                    className="form-control mb-3"
                                    onChange={event => onInputChange(event)/*onPriceChange(event)*/}
                                />
                                <input
                                    type="text"
                                    name="quantity"
                                    value={quantity}
                                    placeholder="Quantitat"
                                    className="form-control mb-3"
                                    onChange={onInputChange/*onQuantityChange*/}
                                />
                                <button type="submit" className="btn btn-primary">Afegeix</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );

    /*
    function netejarInputs() {
        setProductValue('');
        setPriceValue('');
        setQuantityValue('');
        
    }
    */
}

export {
    InvoiceApp
}