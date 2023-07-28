export const InvoiceEnterprisseData = ({title, company }) => {
    return (
        <>
            <h3>{title}</h3>
            <ul className="list-group">
                <li className="list-group-item active">{company.name}</li>
                <li className="list-group-item"><b>amb cif:</b> {company.cif}</li>
            </ul>
        </>
    );
}