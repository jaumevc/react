import { UserRow } from "./UserRow";

export const UsersList = ({users})=>{
    return(
        <>
            <p>Llistat d'usuaris</p>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>userName</th>
                        <th>email</th>
                        <th>update</th>
                        <th>remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user =>(
                            <UserRow
                                key = {user.id}
                                user= {user}
                            />
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}