export const ProductCardView = ({id, name, description, price }) => {
    //aquesta funció passara cap al pare el producte que hem seleccionat amb el click al bto
    const addProduct = (product) =>{

    };

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{ name }</h5>
                    <p className="cart-text">{ description }</p>
                    <p className="cart-text">{ price }</p>
                    <button className="btn btn-primary"
                    onClick={()=> addProduct({id, name, description, price})}>Afegir a la Cistella</button>
                </div>
            </div>
        </>
    );
}