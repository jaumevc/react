export const ProductCardView = ({name, description, price }) => {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{ name }</h5>
                    <p className="cart-text">{ description }</p>
                    <p className="cart-text">{ price }</p>
                    <button className="btn btn-primary">Afegir a la Cistella</button>
                </div>
            </div>
        </>
    );
}