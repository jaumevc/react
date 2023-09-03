import { UserRow } from "./UserRow";

export const UsersList = ({users, handlerRemoveUser})=>{
    return(
        <>
            <p>Llistat d'usuaris</p>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>userName</th>
                        <th>password</th>
                        <th>email</th>
                        <th>update</th>
                        <th>remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(({id, userName, password,email}) =>(
                            <UserRow
                                key = {id}
                                id = {id}
                                userName={ userName}
                                password={password}
                                email={email}
                                handlerRemoveUser={handlerRemoveUser}
                            />
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}