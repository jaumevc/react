export const InvoiceEnterprisseData = ({ company }) => {
    return (
        <>
            <ul className="list-group">
                <li className="list-group-item active">{company.name}</li>
                <li className="list-group-item"><b>amb cif:</b> {company.cif}</li>
            </ul>
        </>
    );
}