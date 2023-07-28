import PropTypes from 'prop-types';

// export const InvoiceClientData = ({nameClient, lastName, street, number, country, city}) => {
//     return (
//         <>
//             <ul className="list-group">
//                 <li className="list-group-item active">{nameClient} {lastName}</li>
//                 <li className="list-group-item">{street}, {number}</li>
//                 <li className="list-group-item">{country}, {city}</li>
//             </ul>
//         </>
//     );
// }

export const InvoiceClientData = ({title, client}) => {
    const { name: nameClient, lastName, adress } = client;
    const { country, city, street, number } = adress;
    return (
        <>
            <h3>{title}</h3>
            <ul className="list-group">
                <li className="list-group-item active">{nameClient} {lastName}</li>
                <li className="list-group-item">{street}, {number}</li>
                <li className="list-group-item">{country}, {city}</li>
            </ul>
        </>
    );
}

InvoiceClientData.propTypes = {
    title: PropTypes.string.isRequired,
    client: PropTypes.object.isRequired
}