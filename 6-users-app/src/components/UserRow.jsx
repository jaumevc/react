export const UserRow = ({user}) => {
    return (
        <>
            <tr>
                <td>{user.id}</td>
                <td>{user.userName}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>
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
                        className="btn btn-danger btn-sm">
                        remove
                    </button>
                </td>
            </tr>
        </>
    );
}