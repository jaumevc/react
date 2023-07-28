import { getInvoice } from "./services/getInvoice";
import { InvoiceClientData } from "./components/InvoiceClientData";
import { InvoiceDataRef } from "./components/invoiceDataRef";
import { InvoiceEnterprisseData } from "./components/InvoiceEnterpriseData";
import { InvoiceDetail } from "./components/InvoiceDetail";



const InvoiceApp = () => {
    const { id, name, client, company, items } = getInvoice();

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

                    </div>
                </div>
            </div>
        </>
    );
}

export {
    InvoiceApp
}