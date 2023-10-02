import { useReducer } from "react";
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { usersReducer } from "./reducers/usersReducer";

const initialUsers = [{
    id:1,
    userName: 'pepito',
    password: '1234',
    email: 'pepito@mail.cat'
},];

const initialUserForm = {
    userName:'',
    password:'',
    email:''
}

export const UsersApp = () => {

    const [users, dispatch] = useReducer(usersReducer, initialUsers);
    
    const handlerAddUser = (user) =>{
        console.log(user);
        dispatch({
            type: 'addUser',
            payload:user
        });
    }

    const handlerRemoveUser = (id) =>{
        console.log(id);
        dispatch({
            type: 'removeUser',
            payload:id
        });
    }

    return (
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="row">
                <div className="col">
                    <UserForm 
                        initialUserForm  =  {initialUserForm}
                        handlerAddUser = {handlerAddUser}
                    />
                </div>
                <div className="col">
                    
                   { users.length === 0 ?
                        <div className="alert alert-warning">No hi han usuaris a la llista</div>
                        : <UsersList 
                            users = { users } //{ initialUsers } 
                             handlerRemoveUser = {handlerRemoveUser}
                            />
                    }  
                </div>
            </div>
        </div>
    );
}