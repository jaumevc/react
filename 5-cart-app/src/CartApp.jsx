export const  CartApp = () =>{
    return (
        <>
            <div className="container">
                <h3>Productes</h3>
                <div className="row">
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Teclat Mecànic RGB</h5>
                                <p className="cart-text">Teclat mecànic retro il·luminat amb colors RGG</p>
                                <p className="cart-text">250,00 €</p>
                                <button className="btn btn-primary">Afegir a la Cistella</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Samsung Smart TV 50"</h5>
                                <p className="cart-text">Televisor alta definició i so envolvent</p>
                                <p className="cart-text">950,00 €</p>
                                <button className="btn btn-primary">Afegir a la Cistella</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Memoria Ram 32 GB</h5>
                                <p className="cart-text">Memoria Ramb de 32 GB de capacitat</p>
                                <p className="cart-text">180,00 €</p>
                                <button className="btn btn-primary">Afegir a la Cistella</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Màgic Mouse</h5>
                                <p className="cart-text">Mouse alta gama</p>
                                <p className="cart-text">120,00 €</p>
                                <button className="btn btn-primary">Afegir a la Cistella</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Pantalla HP 24"</h5>
                                <p className="cart-text">Pantalla alta definició HP</p>
                                <p className="cart-text">230,00 €</p>
                                <button className="btn btn-primary">Afegir a la Cistella</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Disc SSD</h5>
                                <p className="cart-text">Disc SSD 250 GB</p>
                                <p className="cart-text">140,00 €</p>
                                <button className="btn btn-primary">Afegir a la Cistella</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-4 w-50">
                    <h3>Afegit a Cistella</h3>
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>Producte</th>
                                <th>Preu</th>
                                <th>Quantitat</th>
                                <th>Subtotal</th>
                                <th>Descartar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>producte</td>
                                <td>preu</td>
                                <td>quantitat</td>
                                <td>subtotal</td>
                                <td>eliminar</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3" className="text-end fw-bold">Total:</td>
                                <td colSpan="2" className="text-center">€€€€€</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    );
}