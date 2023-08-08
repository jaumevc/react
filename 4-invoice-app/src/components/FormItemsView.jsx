import { useState } from "react";

const FormItemsView = ({ handler }) => {

    const [formItemsState, setFormItemsState] = useState({
        product: '',
        price: '',
        quantity: ''
    });
    //Ara desestructurem el formItemsState, conté el useState com un objetce amb 3 atributs, 
    //per poder usar els seus valors en el form, l'hem de desestructurar:
    const { product, price, quantity } = formItemsState;

    const onInputChange = ({target:{name,value}})=>{
        console.log(name);
        console.log(value);
        setFormItemsState({
            ...formItemsState,
            [name]:value
        });
    }

    const onInvoiceItemsSubmit = (event) =>{
        event.preventDefault();
        //trim és per eliminar espais
        if (product.trim().length <= 1) return;

        if (isNaN(price.trim())) {
            setFormItemsState;
            return;
        }
        if (isNaN(quantity.trim())) {
            setFormItemsState;
            return;
        }

        handler(formItemsState);
        
        setFormItemsState(
            { product: '',
            price: '',
            quantity: ''
        });
    }

    return (
        <>
            <form className="w-50" onSubmit={event => onInvoiceItemsSubmit(event)}>
                <input
                    type="text"
                    name="product"
                    value={product}
                    placeholder="Producte"
                    className="form-control mt-3 mb-3"
                    onChange={event => {
                        onInputChange(event);
                    }}
                />
                <input
                    type="text"
                    name="price"
                    value={price}
                    placeholder="Preu"
                    className="form-control mb-3"
                    onChange={event => onInputChange(event)}
                />
                <input
                    type="text"
                    name="quantity"
                    value={quantity}
                    placeholder="Quantitat"
                    className="form-control mb-3"
                    onChange={onInputChange}
                />
                <button type="submit" className="btn btn-primary">Afegeix</button>
            </form>
        </>
    );
}

export {
    FormItemsView
}