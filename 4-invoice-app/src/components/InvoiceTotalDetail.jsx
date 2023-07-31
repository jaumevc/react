export const InvoiceTotalDetail= ({total})=>{
    
    return (
        <>
        {/* el div es mostra a la dreta */}
        <div className="text-end">
            <span className="badge bg-success"> {total} </span>
        </div>

        {/* El div es mostra a l'squerra  */}
        {/* <div className="text-start"></div> */}

        </>
    );
}