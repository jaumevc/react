export const UserRow = ({id, userName, password, email, handlerRemoveUser}) => {

    const onRemoveUser = (id)=>{
        handlerRemoveUser(id);
    }
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{userName}</td>
                <td>{password}</td>
                <td>{email}</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-primary btn-sm">
                        update
                    </button>
                </td>
                <td>
                    <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick = {() => onRemoveUser(id) }>
                        remove
                    </button>
                </td>
            </tr>
        </>
    );
}